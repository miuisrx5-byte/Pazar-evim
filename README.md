# 🛍️ Pazar Evim - Türkiye E-Ticaret Platformu

Türkiye pazarına tam uyumlu, profesyonel ve dinamik e-ticaret platformu.

## 📋 Proje Özellikleri

### Ürün Kategorileri
- 👔 **Erkek Giyim & Aksesuarları**
- 👗 **Kadın Giyim & Aksesuarları**
- 👶 **Çocuk Giyim & Aksesuarları**
- 👟 **Ayakkabılar**
- 💼 **Çanta & Aksesuarlar**

### Türkiye Pazarı Özellikleri
✅ Türkçe dil desteği
✅ TL para birimi
✅ Kargo takibi (Aras, MNG, UPS)
✅ Vergi hesplaması
✅ KVKK uyumluluğu
✅ SMS bildirim sistemi
✅ Canlı destek

### Ödeme Yöntemleri
💳 Kredi/Debit Kartı (Iyzico)
🏦 Havale/EFT
🚚 Kapıda Ödeme (KOD)

## 🏗️ Proje Yapısı

```
pazar-evim/
├── frontend/              # Next.js
│   ├── app/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── public/
├── backend/               # Node.js + Express
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── config/
├── database/              # PostgreSQL
│   └── migrations/
├── docs/                  # Dokumentasyon
└── README.md
```

## 🚀 Teknoloji Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Query** - Data fetching

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Sequelize** - ORM
- **JWT** - Authentication

### Entegrasyonlar
- **Iyzico** - Ödeme gateway'i
- **Twilio** - SMS gönderimi
- **SendGrid** - Email servisi
- **AWS S3** - Dosya depolama

## 📦 Kurulum

### Ön Koşullar
- Node.js 18+
- PostgreSQL 14+
- Git

### Frontend Kurulumu

```bash
cd frontend
npm install
npm run dev
```

### Backend Kurulumu

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## 🔧 Ortam Değişkenleri

`.env` dosyasını oluşturun:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/pazar_evim

# API
API_PORT=5000
API_URL=http://localhost:5000
FRONTEND_URL=http://localhost:3000

# Iyzico
IYZICO_API_KEY=your_api_key
IYZICO_SECRET_KEY=your_secret_key
IYZICO_BASE_URL=https://api.sandbox.iyzipay.com

# JWT
JWT_SECRET=your_jwt_secret_key

# Twilio
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+90xxx

# SendGrid
SENDGRID_API_KEY=your_sendgrid_key

# AWS S3
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=eu-west-1
AWS_S3_BUCKET=pazar-evim
```

## 📚 API Dokumentasyon

### Kimlik Doğrulama
- `POST /api/auth/register` - Kayıt
- `POST /api/auth/login` - Giriş
- `POST /api/auth/refresh` - Token yenileme

### Ürünler
- `GET /api/products` - Tüm ürünleri listele
- `GET /api/products/:id` - Ürün detayı
- `POST /api/products` - Ürün oluştur (Admin)
- `PUT /api/products/:id` - Ürün güncelle (Admin)
- `DELETE /api/products/:id` - Ürün sil (Admin)

### Sepet
- `GET /api/cart` - Sepeti getir
- `POST /api/cart/items` - Sepete ürün ekle
- `PUT /api/cart/items/:id` - Sepet öğesini güncelle
- `DELETE /api/cart/items/:id` - Sepetten sil

### Siparişler
- `GET /api/orders` - Siparişlerimi listele
- `POST /api/orders` - Sipariş oluştur
- `GET /api/orders/:id` - Sipariş detayı

### Ödeme
- `POST /api/payments/create-checkout` - Checkout oturumu
- `POST /api/payments/confirm` - Ödemeyi onayla

## 🎨 Tasarım

- Responsive tasarım (Mobile-first)
- Modern UI/UX
- Türkçe interface
- Erişilebilirlik (A11y)

## 📄 Lisans

MIT License - Detaylar için LICENSE dosyasına bakın.

## 👨‍💻 Geliştirici

**miuisrx5-byte**

## 📞 İletişim

- Email: info@pazar-evim.com
- WhatsApp: +90xxx
- Instagram: @pazar.evim

---

**Yapılı Tarih:** 2026
**Versiyon:** 1.0.0
