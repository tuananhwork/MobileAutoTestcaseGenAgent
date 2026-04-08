# Expense Tracker PRD

## Mô tả tổng quan dự án

Ứng dụng Expense Tracker giúp người dùng quản lý thu chi cá nhân một cách đơn giản và trực quan. Người dùng có thể ghi nhận giao dịch (thu nhập/chi tiêu), phân loại theo danh mục, theo dõi bằng biểu đồ và lọc dữ liệu theo thời gian để hiểu rõ tình hình tài chính.

Mục tiêu chính:

* Ghi nhận giao dịch nhanh chóng
* Phân loại rõ ràng
* Trực quan hóa dữ liệu
* Hỗ trợ phân tích theo thời gian

Đối tượng sử dụng:

* Người dùng cá nhân
* Người muốn quản lý tài chính cơ bản

---

## BIG FEATURE 1: Quản lý giao dịch

### FEATURE 1: Thêm giao dịch (Income / Expense)

**Mô tả**:
Cho phép người dùng thêm một giao dịch mới bao gồm thu nhập hoặc chi tiêu.

**Input**:

* Số tiền (bắt buộc)
* Loại giao dịch: Income / Expense
* Danh mục
* Ngày giờ
* Ghi chú (optional)

**Logic xử lý**:

* Validate số tiền > 0
* Nếu không chọn ngày → default current time
* Giao dịch được lưu vào local DB

**Output**:

* Giao dịch hiển thị trong danh sách
* Cập nhật tổng số dư

**Edge cases**:

* Nhập số âm → reject
* Không nhập số tiền → show error

---

### FEATURE 2: Sửa giao dịch

**Mô tả**:
Cho phép chỉnh sửa thông tin giao dịch đã tạo

**Logic xử lý**:

* Load dữ liệu cũ
* Update theo input mới

**Output**:

* Danh sách được cập nhật realtime

---

### FEATURE 3: Xóa giao dịch

**Mô tả**:
Cho phép xóa giao dịch khỏi hệ thống

**Logic xử lý**:

* Confirm trước khi xóa
* Remove khỏi DB

**Output**:

* Cập nhật lại danh sách và tổng tiền

---

## BIG FEATURE 2: Phân loại giao dịch

### FEATURE 1: Danh mục mặc định

**Mô tả**:
Cung cấp các danh mục có sẵn như Food, Travel, Shopping

**Logic xử lý**:

* Hardcode hoặc config từ server

---

### FEATURE 2: Tạo danh mục mới

**Mô tả**:
Cho phép người dùng tạo custom category

**Input**:

* Tên category

**Logic xử lý**:

* Validate không trùng tên

**Output**:

* Category xuất hiện trong dropdown

---

### FEATURE 3: Gán category cho giao dịch

**Mô tả**:
User chọn category khi tạo/edit giao dịch

**Output**:

* Dữ liệu transaction chứa category_id

---

## BIG FEATURE 3: Biểu đồ thống kê

### FEATURE 1: Pie Chart

**Mô tả**:
Hiển thị tỷ lệ chi tiêu theo category

**Logic xử lý**:

* Group by category
* Tính % từng category

**Output**:

* Pie chart UI

---

### FEATURE 2: Bar Chart

**Mô tả**:
Hiển thị thu/chi theo thời gian

**Logic xử lý**:

* Aggregate theo ngày/tuần/tháng

**Output**:

* Bar chart

---

### FEATURE 3: Toggle chart type

**Mô tả**:
Cho phép chuyển đổi giữa Pie và Bar chart

**Output**:

* UI update tương ứng

---

## BIG FEATURE 4: Lọc theo thời gian

### FEATURE 1: Lọc theo khoảng thời gian

**Mô tả**:
Cho phép chọn từ ngày → đến ngày

**Input**:

* start_date
* end_date

**Logic xử lý**:

* Query transaction theo range

**Output**:

* List + chart update

---

### FEATURE 2: Quick filter

**Mô tả**:
Các filter nhanh: Today, This Week, This Month

**Logic xử lý**:

* Map sang date range tương ứng

---

### FEATURE 3: Persist filter

**Mô tả**:
Lưu trạng thái filter hiện tại

**Logic xử lý**:

* Save local storage

**Output**:

* Khi mở lại app giữ nguyên filter

---

## Non-functional Requirements

* Performance: load < 2s với 1000 records
* Offline support: hoạt động không cần mạng
* Data consistency: không mất dữ liệu khi crash

---

## Open Questions

* Có cần sync cloud không?
* Có multi-device không?
* Có export data không?
