# Quy tắc Layering (Architecture Rules)

Tài liệu này quy chuẩn hóa các ranh giới kiến trúc và quy tắc giao tiếp giữa các thành phần của hệ thống `MobileAutoTestcaseGenAgent`. Mục đích là duy trì sự tách biệt, dễ bảo trì và mở rộng sau này, tránh tình trạng "Spaghetti Code" hoặc chồng chéo logic.

---

## 1. Mức độ Hệ thống (System-Level Boundaries)

Hệ thống được chia thành 3 phân hệ cốt lõi: **Frontend**, **Backend**, và **Agents**. Không một phân hệ nào được phép thực hiện nhiệm vụ của phân hệ khác.

- **Frontend (Dumb UI)**:
  - Chỉ chịu trách nhiệm **hiển thị giao diện** và **tương tác người dùng**.
  - **Không** thực hiện xử lý file nặng, không có logic validate AI hay kết nối DB trực tiếp.
  - Yêu cầu dữ liệu phải qua API của Backend.
- **Backend (Gateway & Storage)**:
  - Chỉ chịu trách nhiệm là **chiếc cầu nối (Orchestrator)** và **lưu trữ trạng thái**.
  - Quản lý file tải lên, xác thực (Auth), lưu trữ lịch sử testcase vào Database.
  - **Không** chứa bất kỳ logic gọi LLM hay xử lý prompt nào. Việc sinh testcase 100% phải đẩy request sang cho service `Agents`.
- **Agents (AI Core)**:
  - Chỉ chịu trách nhiệm **thuần giải quyết logic tạo testcase bằng AI**.
  - **Không** xử lý phân quyền người dùng (auth), gửi email, hay query cơ sở dữ liệu hệ thống ngoài phạm vi dữ liệu AI đầu vào.
  - Giao tiếp với Backend qua REST API / gRPC.

---

## 2. Quy tắc Nội bộ: Backend (`backend/`)

Tuân thủ nghiêm ngặt mô hình **Controller - Service - Model (Repository)**.

1.  **`src/routes/`**: Nơi duy nhất định nghĩa URL. Chuyển tiếp ngay lập tức request đến Controllers. Tuyệt đối không viết logic ở đây.
2.  **`src/controllers/`**: Chỉ nhận HTTP Request, chạy validation cơ bản (VD: payload có đủ tham số không), gọi hàm từ Service, và format HTTP Response trả về.
3.  **`src/services/`**: Chứa 100% "Business Logic". Bất kỳ tính toán nghiệp vụ hoặc call thư viện API (VD: gọi API sang AI Agents) đều thực hiện tại đây. Một function service không nên nhận object `req`, `res` của framework Express.
4.  **`src/models/`**: Nơi duy nhất được phép giao tiếp với Database. Các tầng khác muốn lấy/sửa dữ liệu phải gọi qua models/repository.

---

## 3. Quy tắc Nội bộ: Frontend (`frontend/`)

Tuân thủ việc tách biệt **UI Component** và **Data Fetching**.

1.  **`src/pages/`**: Nơi định nghĩa layout của cả một màn hình (Screen). Chỉ lắp ráp các component, không nên fetch API trực tiếp tại đây.
2.  **`src/components/`**: Các mảnh ghép UI (UI elements). Component càng thuần túy (nhận `props`, trả ra UI) càng tốt. Hạn chế nhúng logic nghiệp vụ vào.
3.  **`src/services/` (hoặc `api/`)**: Lớp duy nhất tương tác với mạng (Axios / Fetch). Nơi định nghĩa các request gửi tới `Backend`.
4.  **`src/hooks/` hoặc `src/store/`**: Quản lý State. Tách biệt logic fetching/đếm giờ (loading state, tiến trình AI) ra khỏi component bằng React Custom Hooks hoặc Redux/Zustand.

---

## 4. Quy tắc Nội bộ: AI Agents (`agents/`)

Hệ thống Agent cần được thiết kế dưới dạng luồng xử lý độc lập, theo quy tắc Data In - Data Out dạng JSON.

1.  **`src/workflows/`**: File Pipeline nối các luồng với nhau (Ví dụ Agent 1 chạy xong truyền state cho Agent 2).
2.  **`src/agents/`**: File code khởi tạo AI cụ thể (Khai báo Langchain, System Template, Config Parameter như `temperature`, `top_p`). Tuyệt đối không gọi lệnh print text tĩnh hay thao tác file cứng trực tiếp.
3.  **`src/prompts/`**: Mọi chuỗi (String) hướng dẫn AI phải được tách ra file tĩnh (`.txt` hoặc `.md` hoặc string constant module) để dễ tune/chỉnh sửa. Luôn để trống tham số động (`{{Input}}`). Không hardcode nội dung prompt vào file code của thư mục `agents/`.
4.  **`src/schemas/`**: Mọi input và output giao tiếp với thế giới bên ngoài hoặc giao tiếp giữa các agent đều rập khuôn theo Pydantic schema (hoặc object type mapping tương đương). Tránh việc AI trả về text string hỗn độn rồi dùng regex để bắt.
