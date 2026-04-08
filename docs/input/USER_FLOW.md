# USER FLOW (Expense Tracker)

## BIG FEATURE 1: Quản lý giao dịch

### FLOW 1: Thêm giao dịch (Income / Expense)

1. User mở app
2. Màn hình Home hiển thị danh sách giao dịch
3. User tap nút "+"
4. Màn hình Add Transaction hiển thị
5. User chọn loại giao dịch (Income / Expense)
6. User nhập số tiền
7. User chọn category
8. User chọn ngày giờ (default current time)
9. User nhập ghi chú (optional)
10. User tap "Save"
11. System validate dữ liệu
12. Nếu hợp lệ → lưu DB
13. Điều hướng về Home
14. Danh sách và số dư được cập nhật

---

### FLOW 2: Sửa giao dịch

1. User mở app
2. Tại Home, user tap vào một transaction
3. Màn hình Detail/Edit hiển thị
4. User chỉnh sửa thông tin (amount/category/date/note)
5. User tap "Save"
6. System validate dữ liệu
7. System update DB
8. Điều hướng về Home
9. Danh sách được cập nhật

---

### FLOW 3: Xóa giao dịch

1. User mở app
2. Tại Home, user tap vào một transaction
3. Màn hình Detail hiển thị
4. User tap "Delete"
5. Popup confirm hiển thị
6. User chọn "Confirm"
7. System xóa transaction khỏi DB
8. Điều hướng về Home
9. Danh sách và số dư cập nhật

---

## BIG FEATURE 2: Phân loại giao dịch

### FLOW 4: Xem danh mục mặc định

1. User mở app
2. User vào màn Add/Edit Transaction
3. User tap dropdown category
4. System hiển thị danh sách category mặc định (Food, Travel, Shopping...)

---

### FLOW 5: Tạo category mới

1. User vào màn Add/Edit Transaction
2. User tap dropdown category
3. User chọn "Add new category"
4. Màn hình tạo category hiển thị
5. User nhập tên category
6. User tap "Save"
7. System validate (không trùng tên)
8. System lưu category
9. Điều hướng về màn trước
10. Category mới xuất hiện trong dropdown

---

### FLOW 6: Gán category cho giao dịch

1. User mở màn Add/Edit Transaction
2. User tap dropdown category
3. User chọn một category
4. Category được gán vào transaction
5. User tiếp tục lưu transaction

---

## BIG FEATURE 3: Biểu đồ thống kê

### FLOW 7: Xem Pie Chart

1. User mở app
2. User navigate tới tab "Statistics"
3. System load dữ liệu transaction
4. System group theo category
5. System render Pie Chart
6. User xem biểu đồ

---

### FLOW 8: Xem Bar Chart

1. User ở màn Statistics
2. User tap chọn "Bar Chart"
3. System aggregate dữ liệu theo thời gian
4. System render Bar Chart
5. User xem biểu đồ

---

### FLOW 9: Toggle chart type

1. User ở màn Statistics
2. User sử dụng toggle (Pie ↔ Bar)
3. System chuyển đổi loại chart
4. UI cập nhật theo loại chart được chọn

---

## BIG FEATURE 4: Lọc theo thời gian

### FLOW 10: Lọc theo khoảng thời gian

1. User mở app
2. User tap icon filter
3. Màn hình filter hiển thị
4. User chọn start_date
5. User chọn end_date
6. User tap "Apply"
7. System query dữ liệu theo range
8. System update list và chart

---

### FLOW 11: Quick filter

1. User mở app
2. User tap các option nhanh (Today / This Week / This Month)
3. System map sang date range tương ứng
4. System query dữ liệu
5. UI cập nhật list và chart

---

### FLOW 12: Persist filter

1. User áp dụng một filter bất kỳ
2. System lưu trạng thái filter vào local storage
3. User đóng app
4. User mở lại app
5. System load filter đã lưu
6. UI hiển thị dữ liệu theo filter trước đó
