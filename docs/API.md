# 📚 Pazar Evim API Dokumentasyon

## Base URL

```
https://api.pazar-evim.com/api
```

## Kimlik Doğrulama

Tüm istekler JWT token gerektirir (Authentication header'ında):

```
Authorization: Bearer <token>
```

## Response Format

Tüm yanıtlar JSON formatındadır:

```json
{
  "success": true,
  "data": { },
  "message": "İşlem başarılı"
}
```

## Endpoints

### 🔐 Kimlik Doğrulama (Auth)

#### Kayıt

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword",
  "first_name": "John",
  "last_name": "Doe"
}
```

**Yanıt:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "user@example.com",
    "token": "eyJhbGc..."
  },
  "message": "Kayıt başarılı"
}
```

#### Giriş

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### Logout

```http
POST /auth/logout
Authorization: Bearer <token>
```

### 🛍️ Ürünler (Products)

#### Tüm Ürünleri Listele

```http
GET /products?category=1&page=1&limit=20&sort=newest
```

**Query Parameters:**
- `category` (integer): Kategori ID
- `page` (integer): Sayfa numarası (default: 1)
- `limit` (integer): Sonuç sayısı (default: 20)
- `sort` (string): Sıralama (newest, popular, price_asc, price_desc)
- `search` (string): Arama metni

**Yanıt:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Mavi Tişört",
      "slug": "mavi-tisort",
      "description": "Kaliteli mavi tişört",
      "price": 99.99,
      "discount_price": 79.99,
      "category_id": 1,
      "stock_quantity": 50,
      "rating": 4.5,
      "reviews_count": 10,
      "images": [
        {
          "id": 1,
          "url": "https://s3.amazonaws.com/...",
          "alt": "Mavi Tişört"
        }
      ]
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 20,
    "pages": 5
  }
}
```

#### Ürün Detayı

```http
GET /products/:id
```

#### Ürün Oluştur (Admin)

```http
POST /products
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "name": "Ürün Adı",
  "description": "Ürün Açıklaması",
  "price": 99.99,
  "category_id": 1,
  "stock_quantity": 100,
  "sku": "SKU123",
  "images": [file1, file2]
}
```

### 🛒 Sepet (Cart)

#### Sepeti Görüntüle

```http
GET /cart
Authorization: Bearer <token>
```

#### Sepete Ürün Ekle

```http
POST /cart/items
Authorization: Bearer <token>
Content-Type: application/json

{
  "product_id": 1,
  "quantity": 2
}
```

#### Sepet Öğesini Güncelle

```http
PUT /cart/items/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 3
}
```

#### Sepetten Sil

```http
DELETE /cart/items/:id
Authorization: Bearer <token>
```

### 📦 Siparişler (Orders)

#### Siparişlerimi Listele

```http
GET /orders?status=pending&sort=newest
Authorization: Bearer <token>
```

#### Sipariş Oluştur

```http
POST /orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "shipping_address_id": 1,
  "payment_method": "credit_card",
  "notes": "Lütfen özel bir şekilde ambalajla"
}
```

#### Sipariş Detayı

```http
GET /orders/:id
Authorization: Bearer <token>
```

### 💳 Ödeme (Payments)

#### Ödeme Oturumu Oluştur

```http
POST /payments/create-checkout
Authorization: Bearer <token>
Content-Type: application/json

{
  "order_id": 1
}
```

**Yanıt:**

```json
{
  "success": true,
  "data": {
    "payment_url": "https://checkout.iyzipay.com/...",
    "payment_id": "payment_123"
  }
}
```

#### Ödemeyi Onayla

```http
POST /payments/confirm
Authorization: Bearer <token>
Content-Type: application/json

{
  "payment_id": "payment_123",
  "token": "iyzipay_token"
}
```

### 👤 Kullanıcı (Users)

#### Profil Görüntüle

```http
GET /users/profile
Authorization: Bearer <token>
```

#### Profil Güncelle

```http
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "first_name": "John",
  "last_name": "Doe",
  "phone": "+905551234567"
}
```

### ⭐ Yorumlar (Reviews)

#### Ürün Yorumlarını Listele

```http
GET /reviews?product_id=1&page=1
```

#### Yorum Oluştur

```http
POST /reviews
Authorization: Bearer <token>
Content-Type: application/json

{
  "product_id": 1,
  "rating": 5,
  "title": "Harika ürün",
  "comment": "Çok memnun kaldım"
}
```

## Hata Kodları

| Kod | Açıklama |
|-----|----------|
| 200 | Başarılı |
| 201 | Oluşturuldu |
| 400 | Hatalı istek |
| 401 | Yetkisiz |
| 403 | Yasak |
| 404 | Bulunamadı |
| 500 | Sunucu hatası |

## Rate Limiting

- **Limit**: 100 istek/dakika
- **Headers**: `X-RateLimit-Limit`, `X-RateLimit-Remaining`
