# UI DESCRIPTION (Expense Tracker)

## BIG FEATURE 1: Quản lý giao dịch

### FEATURE 1: Thêm giao dịch (Income / Expense)

**Màn hình Home**:

* Header: hiển thị tổng số dư (Balance)
* Danh sách transaction (list dạng vertical)
* Floating Action Button (FAB) "+" ở góc dưới phải

**Màn hình Add Transaction**:

* Toggle chọn loại: Income / Expense (segmented control)
* Input field: Amount (numeric keyboard)
* Dropdown: Category
* Date picker: chọn ngày giờ
* Input: Note (optional)
* Button "Save" (primary)
* Button "Cancel" hoặc back icon

---

### FEATURE 2: Sửa giao dịch

**Màn hình Detail/Edit Transaction**:

* Hiển thị thông tin transaction hiện tại
* Các field editable giống màn Add:

  * Amount
  * Category
  * Date
  * Note
* Button "Save"
* Button "Delete" (secondary, màu cảnh báo)

---

### FEATURE 3: Xóa giao dịch

**Popup Confirm Delete**:

* Title: "Delete Transaction"
* Message: "Are you sure you want to delete?"
* Button "Cancel"
* Button "Confirm" (highlight, màu đỏ)

---

## BIG FEATURE 2: Phân loại giao dịch

### FEATURE 1: Danh mục mặc định

**Dropdown Category**:

* List dạng bottom sheet hoặc dropdown
* Hiển thị các category mặc định:

  * Food
  * Travel
  * Shopping
* Mỗi item có icon + tên

---

### FEATURE 2: Tạo category mới

**Màn hình Add Category**:

* Input: Category Name
* Button "Save"
* Button "Cancel"
* Validation message nếu trùng tên

---

### FEATURE 3: Gán category cho giao dịch

**Dropdown Category Selection**:

* Highlight category đang chọn
* Tap để select
* Sau khi chọn → đóng dropdown

---

## BIG FEATURE 3: Biểu đồ thống kê

### FEATURE 1: Pie Chart

**Màn hình Statistics**:

* Tab hoặc navigation title: "Statistics"
* Chart area (center): Pie Chart
* Legend: list category + màu + %
* Có thể tap từng slice để highlight

---

### FEATURE 2: Bar Chart

**Màn hình Statistics (Bar mode)**:

* Chart area: Bar Chart
* Trục X: thời gian (day/week/month)
* Trục Y: số tiền
* Có tooltip khi tap vào bar

---

### FEATURE 3: Toggle chart type

**UI Toggle**:

* Segmented control hoặc switch (Pie / Bar)
* Vị trí: phía trên chart
* Khi toggle → chart area update animation

---

## BIG FEATURE 4: Lọc theo thời gian

### FEATURE 1: Lọc theo khoảng thời gian

**Filter Panel / Screen**:

* Date picker: Start Date
* Date picker: End Date
* Button "Apply"
* Button "Reset"

---

### FEATURE 2: Quick filter

**Quick Filter Bar**:

* Các button dạng chip:

  * Today
  * This Week
  * This Month
* Selected state có highlight

---

### FEATURE 3: Persist filter

**Behavior UI**:

* Khi mở lại app:

  * Filter trước đó vẫn được highlight
  * List và chart hiển thị theo filter
* Không có UI riêng, chỉ là trạng thái được giữ lại
