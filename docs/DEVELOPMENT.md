# 🚀 Geliştirme Rehberi

## Proje Kurulumu

### 1. Repository'yi Clone Edin

```bash
git clone https://github.com/miuisrx5-byte/Pazar-evim.git
cd Pazar-evim
```

### 2. Frontend Kurulumu

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Frontend şu adreste açılacak: `http://localhost:3000`

### 3. Backend Kurulumu

```bash
cd ../backend
npm install
cp .env.example .env
```

#### PostgreSQL Veritabanını Oluşturun

```bash
psql -U postgres
CREATE DATABASE pazar_evim;
\q
```

#### Schema'yı İçeri Aktarın

```bash
psql -U postgres -d pazar_evim -f ../database/schema.sql
```

#### Backend'i Çalıştırın

```bash
npm run dev
```

Backend şu adreste çalışacak: `http://localhost:5000`

## Dizin Yapısı

### Frontend Yapısı

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Ana sayfa
│   └── [locale]/           # i18n
├── components/
│   ├── Header.tsx          # Header
│   ├── Footer.tsx          # Footer
│   ├── ProductCard.tsx     # Ürün kartı
│   ├── Cart.tsx            # Sepet
│   └── ...
├── pages/
│   ├── products/           # Ürün sayfaları
│   ├── checkout/           # Ödeme
│   ├── orders/             # Siparişler
│   └── ...
├── styles/
│   └── globals.css         # Global stiller
├── public/
│   └── images/             # Görseller
└── next.config.js
```

### Backend Yapısı

```
backend/
├── src/
│   ├── routes/             # API rotaları
│   ├── controllers/        # İş mantığı
│   ├── models/             # Veritabanı modelleri
│   ├── middleware/         # Express middleware
│   ├── config/             # Konfigürasyon
│   ├── utils/              # Yardımcı fonksiyonlar
│   └── server.js           # Ana dosya
├── database/
│   └── migrations/         # DB göçleri
└── .env.example
```

## Git Workflow

### Feature Şubesi Oluşturun

```bash
git checkout -b feature/feature-name
```

### Değişiklikleri Commit Edin

```bash
git add .
git commit -m "feat: açıklama"
```

### Push Edin

```bash
git push origin feature/feature-name
```

### Pull Request Oluşturun

GitHub'da PR açın ve açıklamayı doldurun.

## Kod Standartları

### Dosya Adlandırması

- **Components**: `PascalCase` (ProductCard.tsx)
- **Utilities**: `camelCase` (formatPrice.ts)
- **Constants**: `UPPER_SNAKE_CASE` (API_URL)

### Commit Mesajları

```
feat: yeni özellik ekle
fix: hata düzelt
docs: dokumentasyon güncelle
style: kod stillendirmesi
refactor: kod yeniden düzenle
test: test ekle
chore: bağımlılık güncelle
```

## Environment Variables

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Backend (.env)

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/pazar_evim
JWT_SECRET=your_secret
IYZICO_API_KEY=your_key
IYZICO_SECRET_KEY=your_secret
```

## Debugging

### Backend Debugging

```bash
node --inspect src/server.js
```

Chrome DevTools'ta: `chrome://inspect`

### Frontend Debugging

Browser DevTools (F12) kullanın.

## Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test
```

## Deployment

### Frontend (Vercel)

```bash
npm install -g vercel
vercel
```

### Backend (Railway/Render)

1. Kodu GitHub'a push edin
2. Railway/Render'da proje oluşturun
3. Environment variables'ı ayarlayın
4. Deploy edin

## Sorun Giderme

### Port zaten kullanımda

```bash
# Linuxlerde
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Veritabanı bağlantı hatası

- PostgreSQL'in çalıştığını kontrol edin
- DATABASE_URL'i kontrol edin
- Kullanıcı izinlerini kontrol edin

## İletişim

Sorunlarınız için GitHub Issues açın.
