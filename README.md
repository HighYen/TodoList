# Ứng dụng Todolist

Ứng dụng giúp quản lý danh sách công việc (todo) với các tính năng sau:

## Tính năng chính

- **Tải danh sách Todos từ localStorage**: Ứng dụng tự động kiểm tra và tải danh sách công việc từ localStorage khi khởi động.
- **Thêm Todo mới**: Người dùng nhập nội dung vào form và thêm công việc mới vào danh sách.
- **Chỉnh sửa Todo**: Cho phép chỉnh sửa nội dung của công việc hiện có.
- **Hoàn thành Todo**: Đánh dấu công việc là đã hoàn thành.
- **Xóa Todo**: Xóa công việc khỏi danh sách.

Mỗi công việc được hiển thị với các nút để thực hiện các thao tác như chỉnh sửa, hoàn thành hoặc xóa.

## Hướng dẫn chạy ứng dụng

1. **Tải xuống mã nguồn**:
   - Clone repo hoặc tải mã nguồn về máy tính:
     ```bash
     git clone <repository-url>
     ```
     hoặc tải file ZIP và giải nén.

2. **Cài đặt các phụ thuộc**:
   - Mở terminal trong thư mục dự án và chạy lệnh:
     ```bash
     npm install
     ```

3. **Chạy ứng dụng**:
   - Khởi động ứng dụng ở chế độ phát triển:
     ```bash
     npm start
     ```
   - Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000) để sử dụng.

4. **Dựng ứng dụng cho môi trường sản xuất (tùy chọn)**:
   - Chạy lệnh để tạo bản dựng:
     ```bash
     npm run build
     ```
   - Các tệp được tạo sẽ nằm trong thư mục `build`.

