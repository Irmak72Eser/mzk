// backend/server.js
// ==================================================
// TEMEL IMPORTLAR
// ==================================================
import express from 'express'; // Express framework'ü (SADECE BİR KERE)
import dotenv from 'dotenv';    // Ortam değişkenleri için (.env dosyasını okur - Render'da etkisiz)
import path from 'path';      // Dosya yolları ile çalışmak için
import { fileURLToPath } from 'url'; // ES Modüllerinde __dirname/__filename benzeri için
import cookieParser from 'cookie-parser'; // Cookie'leri parse etmek için

// ==================================================
// ROTA DOSYALARINI IMPORT ET
// ==================================================
// Proje yapına göre bu yolların doğru olduğunu varsayıyoruz: ./routes/dosyaAdi.js
import authRoutes from './routes/auth.route.js';
import productRoutes from './routes/product.route.js';
import cartRoutes from './routes/cart.route.js';
import couponRoutes from './routes/coupon.route.js';
import paymentRoutes from './routes/payment.route.js';
import analyticsRoutes from './routes/analytics.route.js';
// Eğer başka rota dosyaların varsa buraya ekle

// ==================================================
// VERİTABANI BAĞLANTISINI IMPORT ET
// ==================================================
// Proje yapına göre yol: ./lib/db.js (küçük harf)
// Dosya içinden 'connectDB' fonksiyonunu named export olarak alıyoruz.
import { connectDB } from './lib/db.js'; // <<< KESİNLİKLE KÜÇÜK HARF 'db.js'

// ==================================================
// ORTAM DEĞİŞKENLERİNİ YÜKLE (Lokal için)
// ==================================================
dotenv.config();

// ==================================================
// EXPRESS UYGULAMASINI OLUŞTUR
// ==================================================
const app = express();

// ==================================================
// TEMEL MIDDLEWARE'LERİ KULLAN
// ==================================================
// Gelen JSON verilerini (API istekleri) parse eder
app.use(express.json({ limit: '5mb' })); // Limit isteğe bağlıdır
// Gelen URL-encoded verilerini (HTML formları) parse eder
app.use(express.urlencoded({ extended: true })); // 'true' nested objelere izin verir
// Gelen isteklerdeki cookie'leri parse eder (req.cookies altında erişilir)
app.use(cookieParser());

// ==================================================
// API ROTALARINI KULLAN
// ==================================================
// Belirli yollara gelen istekleri ilgili rota dosyalarına yönlendirir
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/coupons', couponRoutes); // API yolunu kontrol et (/api/coupon?)
app.use('/api/payment', paymentRoutes);
app.use('/api/analytics', analyticsRoutes);
// Başka API rotaların varsa buraya ekle

// ==================================================
// SAĞLIK KONTROL ROTASI (İsteğe Bağlı)
// ==================================================
// Sunucunun ayakta olup olmadığını basitçe kontrol etmek için
app.get('/api/health', (req, res) => {
    console.log("--- API HEALTH Endpoint Reached ---"); // Loglama
    res.status(200).send('Backend is Healthy!');
});

// ==================================================
// FRONTEND BUILD DOSYALARINI SUNMA (Statik Dosyalar)
// ==================================================
// Bu bölüm, derlenmiş React uygulamasını sunmak için GEREKLİDİR
// ÖNEMLİ: Bu bölüm API rotalarından SONRA gelmelidir!

// ES Modüllerinde __dirname eşdeğerini almanın yolu
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Derlenmiş frontend dosyalarının bulunduğu yolu hesapla
// `server.js`, `backend` içinde, `frontend/dist` ise bir üst dizinin altında
const frontendDistPath = path.resolve(__dirname, '..', 'frontend', 'dist');

// Hesaplanan yoldaki statik dosyaları (CSS, JS, resimler vb.) sunar
app.use(express.static(frontendDistPath));

// ==================================================
// CATCH-ALL ROTA (React Router İçin - EN SONDA OLMALI)
// ==================================================
// Yukarıdaki API veya statik dosya yollarıyla eşleşmeyen TÜM GET istekleri
// ana `index.html` dosyasını gönderir. Bu, React Router'ın çalışmasını sağlar.
// BU SATIR MUTLAKA TÜM DİĞER ROTALARDAN SONRA GELMELİDİR!
app.get('*', (req, res) => {
    res.sendFile(path.resolve(frontendDistPath, 'index.html'));
});

// ==================================================
// SUNUCUYU BAŞLATMA VE VERİTABANI BAĞLANTISI
// ==================================================
// Render'ın sağladığı PORT'u veya lokal için 5000'i kullan
const PORT = process.env.PORT || 5000;

// Sunucuyu belirtilen portta ve tüm ağ arayüzlerinde (0.0.0.0) dinle
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`); // Sunucunun başladığını logla

    // Sunucu dinlemeye başladıktan sonra veritabanına bağlanmayı dene
    connectDB();

    // Statik dosyaların nereden sunulduğunu logla (opsiyonel)
    console.log(`Serving static files from ${frontendDistPath}`);
});

// --- DOSYA SONU ---