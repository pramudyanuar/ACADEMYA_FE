# Academya Client - Vite + React + TypeScript + SWC

Academya Client adalah proyek frontend berbasis **Vite + React + TypeScript**, yang dioptimalkan menggunakan **SWC** untuk performa lebih cepat. Aplikasi ini dapat dijalankan dalam lingkungan Docker menggunakan **Nginx** sebagai web server.

## 📦 Struktur Proyek

```
Academya_Client/
├── public/                 # Static files
├── src/                    # Source code
├── .gitignore              # Git ignore file
├── createModule.cjs        # Script untuk membuat module baru
├── eslint.config.js        # ESLint configuration
├── index.html              # Root HTML file
├── package.json            # Dependencies dan script
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── Dockerfile              # Docker configuration
├── nginx.conf              # Nginx configuration
└── README.md               # Dokumentasi ini
```

## 🚀 Menjalankan dengan Docker

### **1️⃣ Build Docker Image**

Jalankan perintah berikut untuk membangun image:

```sh
docker build -t academya-client .
```

### **2️⃣ Jalankan Container**

Gunakan perintah ini untuk menjalankan container di port 3000:

```sh
docker run -d -p 3000:80 academya-client
```

### **3️⃣ Akses Aplikasi**

Buka browser dan akses:

```
http://localhost:3000
```

## 🔧 Konfigurasi Custom Nginx (Opsional)

File `nginx.conf` telah disiapkan untuk menangani routing **React Router SPA**. Jika ingin mengedit konfigurasi, ubah file `nginx.conf` sebelum membangun ulang image.

## 🛑 Menghentikan Container

Untuk menghentikan container yang berjalan, jalankan:

```sh
docker ps          # Cek ID container
```

```sh
docker stop <container_id>
```

## 🗑️ Menghapus Container dan Image

Jika perlu menghapus container dan image, gunakan perintah berikut:

```sh
docker rm $(docker ps -aq)       # Hapus semua container
```

```sh
docker rmi academya-client       # Hapus image
```

## 📜 Lisensi

Proyek ini menggunakan lisensi **MIT**.
