# Mobile Auto Testcase Generator (Multi-Agent System)

## 📌 Giới thiệu (Project Overview)

**Mục đích dự án:** Xây dựng hệ thống **Multi-Agent** để tự động hóa hoàn toàn quy trình sinh ra Auto Testcase từ tài liệu đặc tả sản phẩm.

Thay vì viết testcase tự động một cách thủ công, hệ thống này tiếp nhận tài liệu sản phẩm đầu vào, sau đó phân tích và chuyển đổi thành kịch bản tự động hóa bằng cách tận dụng sự kết hợp của nhiều AI Agents đóng từng vai trò khác nhau trong quy trình QC.

## 🚀 Kiến trúc luồng Agents (Agent Workflow)

Dựa trên sơ đồ xử lý của luồng dữ liệu (`docs/flow/flow.png`), hệ thống được thiết kế thành một 파ipelined workflow gồm 3 Agent chuyên biệt hoạt động nối tiếp nhau.

### 🧠 Agent 1: Trích xuất Scenario Spec (Hiểu user flow)

- **Đầu vào:** Tài liệu mô tả sản phẩm (Product Specs).
- **Nhiệm vụ:** Trích xuất và cấu trúc hóa các User flows (Luồng người dùng).
- **Nguyên tắc hoạt động:** Tập trung duy nhất vào việc phân tích **hành vi của người dùng (user behavior)** --- trả lời câu hỏi **"User làm gì?"**.
- **Ràng buộc:** KHÔNG bao gồm các yếu tố của testcase (như steps, expected result) và hành động UI cấp thấp (touch, swipe).
- **Đầu ra:** Tài liệu kịch bản nghiệp vụ (e.g., `AGENT_1_OUT.md`).

### ⚙️ Agent 2: Quản lý Test Scenario (Thiết kế test logic)

- **Đầu vào:** User Flows từ Agent 1.
- **Nhiệm vụ:** Thiết kế chi tiết các kịch bản kiểm thử ở mức độ logic QA (QA-level).
- **Nguyên tắc hoạt động:** Viết dưới dạng kịch bản **Manual Test**, có đầy đủ các bước (steps) và expected result tương ứng --- trả lời câu hỏi **"Test cái gì?"**.
- **Ràng buộc:** Bao gồm đầy đủ _Happy Path_ và _Negative Cases_, tuy nhiên KHÔNG chứa các action và code selectors UI phần mềm (như `text_contains`, `resource_id`).
- **Đầu ra:** Danh sách Testcases dạng file text (e.g., `AGENT_2_OUT.md`).

### 🤖 Agent 3: Sinh mã AutoMobile YAML (Sinh automation script)

- **Đầu vào:** Các QA Testcases từ Agent 2.
- **Nhiệm vụ:** Biên dịch kịch bản kiểm thử logic từ ngôn ngữ tự nhiên thành Automation Testcase sẵn sàng được chạy bởi máy.
- **Nguyên tắc hoạt động:** Các steps được mapping trực tiếp sang mã script thực thi phần mềm --- trả lời câu hỏi **"Test bằng cách nào?"**.
- **Ràng buộc:** Mỗi bước phải là **UI action cụ thể**, định nghĩa đầy đủ các Locator/Selector (`text_contains`, `resource_id`...) phục vụ tool AutoMobile.
- **Đầu ra:** Đoạn mã YAML auto test chạy trên AutoMobile engine (e.g., `AGENT_3_OUT.md`).

## ✅ Tóm tắt Logic & Rule chống chồng chéo (Non-overlap Rules)

| Phân hệ (Node) | Trách nhiệm chính / Câu hỏi lõi | Vai trò cụ thể              |
| -------------- | ------------------------------- | --------------------------- |
| **Agent 1**    | **User làm gì?**                | Hiểu và tạo user flow spec  |
| **Agent 2**    | **Test cái gì?**                | Thiết kế logic test cases   |
| **Agent 3**    | **Test bằng cách nào?**         | Viết script chạy automation |

Thiết kế kiến trúc module hóa này giúp ngăn chặn sự nhầm lẫn giữa các vai trò (VD: Agent phân tích luồng không cần bận tâm đến việc click button id nào, và Agent sinh code test không cần thẩm định lại nghiệp vụ).

## 📂 Cấu trúc thư mục tương tác

- `docs/flow/` - Chứa sơ đồ kiến trúc quy trình hoạt động (`flow.png`).
- `docs/agents/` - Chứa nguyên tắc, mô tả vai trò (`ROLE.md`) và các định dạng Sample Output từ mỗi thành phần (`AGENT_N_OUT.md`).
