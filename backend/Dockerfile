# Sử dụng Bun image chính thức
FROM oven/bun:1.2.3-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và bun.lockb trước để tối ưu cache
COPY package.json bun.lock ./

# Cài đặt dependencies
RUN bun install

# Sao chép toàn bộ mã nguồn
COPY . .

# Mở cổng backend
EXPOSE 3000

# Chạy backend
CMD ["bun", "run", "start"]
