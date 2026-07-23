'use client';

import DigitalClock from '@/components/DigitalClock';
import TodoList from '@/components/TodoList';
import { useState } from 'react';

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<'clock' | 'todo' | 'home'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">🛍️ Pazar Evim</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => setActiveTab('clock')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'clock'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              🕐 Dijital Saat
            </button>
            <button
              onClick={() => setActiveTab('todo')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'todo'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              📝 Yapılacaklar
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Ana Sayfa */}
        {activeTab === 'home' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center text-white py-12">
              <h2 className="text-5xl font-bold mb-4">
                🛒 Pazar Evim'e Hoş Geldiniz
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Türkiye pazarına uyumlu profesyonel e-ticaret platformu
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
                  Alışverişe Başla
                </button>
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors">
                  Daha Fazla Bilgi
                </button>
              </div>
            </div>

            {/* Özellikler */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">👕</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Erkek Giyim</h3>
                <p className="text-gray-600">
                  Kaliteli erkek giyim ve aksesuarları en uygun fiyatlarla
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Kadın Giyim</h3>
                <p className="text-gray-600">
                  Trendy kadın koleksiyonu ve modaya uygun ürünler
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Çocuk Giyim</h3>
                <p className="text-gray-600">
                  Rahat ve güvenli çocuk kıyafetleri tüm yaşlar için
                </p>
              </div>
            </div>

            {/* Teknoloji Stack */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">⚙️ Teknoloji Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-600 mb-2">Frontend</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Next.js 14</li>
                    <li>✓ React 18</li>
                    <li>✓ TypeScript</li>
                    <li>✓ Tailwind CSS</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-600 mb-2">Backend</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Node.js</li>
                    <li>✓ Express.js</li>
                    <li>✓ PostgreSQL</li>
                    <li>✓ JWT Auth</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-600 mb-2">Ödeme</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Iyzico</li>
                    <li>✓ Kredi Kartı</li>
                    <li>✓ Havale/EFT</li>
                    <li>✓ Kapıda Ödeme</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-bold text-orange-600 mb-2">Özellikler</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Türkçe Dil</li>
                    <li>✓ Kargo Takibi</li>
                    <li>✓ SMS Bildirim</li>
                    <li>✓ Admin Paneli</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Repository Link */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📚 GitHub Repository</h3>
              <a
                href="https://github.com/miuisrx5-byte/Pazar-evim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors"
              >
                Repository'yi Ziyaret Et →
              </a>
            </div>
          </div>
        )}

        {/* Dijital Saat Tab */}
        {activeTab === 'clock' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              🕐 Dijital Saat - Dünya Zaman Dilimleri
            </h2>
            <DigitalClock />
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📍 Desteklenen Zaman Dilimleri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇹🇷</span>
                  <div>
                    <p className="font-bold text-gray-800">Istanbul</p>
                    <p className="text-sm text-gray-600">Europe/Istanbul (UTC+3)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <p className="font-bold text-gray-800">London</p>
                    <p className="text-sm text-gray-600">Europe/London (UTC+0)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇺🇸</span>
                  <div>
                    <p className="font-bold text-gray-800">New York</p>
                    <p className="text-sm text-gray-600">America/New_York (UTC-4)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇺🇸</span>
                  <div>
                    <p className="font-bold text-gray-800">Los Angeles</p>
                    <p className="text-sm text-gray-600">America/Los_Angeles (UTC-7)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇯🇵</span>
                  <div>
                    <p className="font-bold text-gray-800">Tokyo</p>
                    <p className="text-sm text-gray-600">Asia/Tokyo (UTC+9)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇦🇪</span>
                  <div>
                    <p className="font-bold text-gray-800">Dubai</p>
                    <p className="text-sm text-gray-600">Asia/Dubai (UTC+4)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇦🇺</span>
                  <div>
                    <p className="font-bold text-gray-800">Sydney</p>
                    <p className="text-sm text-gray-600">Australia/Sydney (UTC+10)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇩🇪</span>
                  <div>
                    <p className="font-bold text-gray-800">Berlin</p>
                    <p className="text-sm text-gray-600">Europe/Berlin (UTC+2)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Yapılacaklar Tab */}
        {activeTab === 'todo' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              📝 Yapılacaklar Listesi - Local Storage Desteği
            </h2>
            <TodoList />
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">✨ Özellikler</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Görev ekleme, silme, tamamlama
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Local Storage'a otomatik kayıt
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> 5 kategori seçeneği
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Düşük, Orta, Yüksek öncelik seviyeleri
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Bitiş tarihi atama
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Kategori ve durum filtreleme
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> İstatistik gösterimi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Responsive tasarım
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">🛍️ Pazar Evim</h4>
              <p className="text-gray-400">Türkiye pazarına uyumlu profesyonel e-ticaret platformu</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kategoriler</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Erkek Giyim</li>
                <li>Kadın Giyim</li>
                <li>Çocuk Giyim</li>
                <li>Ayakkabılar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hakkında</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Blog</li>
                <li>Hakkımızda</li>
                <li>İletişim</li>
                <li>Kariyer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">İletişim</h4>
              <p className="text-gray-400 text-sm">Email: info@pazar-evim.com</p>
              <p className="text-gray-400 text-sm">Tel: +90 (xxx) xxx-xxxx</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Pazar Evim. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
