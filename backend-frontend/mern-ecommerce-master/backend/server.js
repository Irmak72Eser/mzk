/*import dotenv from 'dotenv';
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import "./lib/redis.js";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log("Server is running on http://localhost:" + PORT);
	connectDB();
});


dotenv.config({ path: "./backend/.env" });
import dotenv from 'dotenv';
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import "./lib/redis.js";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();
if (!process.env.MONGODB_URI) {
	console.error('MONGODB_URI is undefined. Check your .env file.');
	process.exit(1);
}
//import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("Backend Server is Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log("Server is running on http://localhost:" + PORT);
	connectDB();
});

// server.js
import dotenv from 'dotenv';
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from 'cors';

import "./lib/redis.js";
import { connectDB } from "./lib/db.js";

// Routes
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

// Environment configuration
// dotenv.config({ path: "./backend/.env" });

if (!process.env.MONGODB_URI) {
	console.error('MONGODB_URI is undefined. Check your .env file.');
	process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}));

// Health check route
app.get("/api/health", (req, res) => {
	res.json({ status: "OK", message: "Backend Server is Running" });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

// Production setup
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		message: "Something went wrong!",
		error: process.env.NODE_ENV === 'development' ? err.message : undefined
	});
});

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
	connectDB();
	module.exports = app;
});*/

// import dotenv from 'dotenv'; // Vercel'de buna gerek yok, env değişkenleri Vercel ayarlarından gelir.
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from 'cors';

// Redis ve DB bağlantılarını import etmeye devam edebilirsiniz
import "./lib/redis.js";
import { connectDB } from "./lib/db.js";

// Routes
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

// Ortam değişkenlerini Vercel Dashboard'dan okuyacak
if (!process.env.MONGODB_URI) {
	// Bu hata mesajı Vercel loglarında görünecektir
	console.error('MONGODB_URI is undefined. Check Vercel Environment Variables.');
	process.exit(1); // Uygulamanın crash etmesi build'in başarısız olmasını sağlar
}

const app = express();
// PORT değişkeni Vercel tarafından yok sayılır, ama yerel geliştirme için kalabilir
const PORT = process.env.PORT || 8000;
// __dirname tanımı kalabilir, ancak production'daki statik dosya sunumunda kullanılmayacak
const __dirname = path.resolve();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// --- CORS Ayarı Düzeltmesi ---
// Sadece localhost yerine canlı URL'ye de izin verilmeli.
// En iyisi bunu da bir ortam değişkeni ile yönetmek.
app.use(cors({
	origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Vercel'e FRONTEND_URL ekleyin
	credentials: true
}));

// Health check route - Bu rota test için faydalı olabilir
app.get("/api/health", (req, res) => {
	res.json({ status: "OK", message: "Backend Server is Running" });
});

// API Routes - Bunlar olduğu gibi kalmalı
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

// --- Production Statik Dosya Sunumu Kaldırıldı ---
// Vercel bu işi "Output Directory" ayarına göre kendi başına yapar.
// Bu blok ve özellikle app.get("*", ...) catch-all rotası API rotalarıyla çakışabilir/gereksizdir.
/*
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
*/

// Error handling middleware - Bu kalabilir
app.use((err, req, res, next) => {
	console.error(err.stack); // Hataları Vercel loglarında görmek için önemli
	res.status(500).json({
		message: "Something went wrong!",
		// Geliştirme ortamında daha detaylı hata mesajı vermek iyi bir pratik
		error: process.env.NODE_ENV === 'development' ? err.message : undefined
	});
});
export default app;

// --- app.listen() Kaldırıldı (Vercel için) ---
// Vercel, sunucuyu kendisi başlatır, app.listen çağrısını kullanmaz.
// Yerel geliştirme için bu bloğu tutabilirsiniz, ancak Vercel'de çalışmayacak.
/*
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
	connectDB();
});
*/

// --- Vercel İçin Gerekli Export ---
// Vercel'in Express uygulamanızı bir Serverless Function olarak
// çalıştırabilmesi için app nesnesini export etmeniz gerekir.
// Bu satır dosyanın en sonunda olmalı.

// VEYA CommonJS kullanıyorsanız: module.exports = app;
// Projenizin package.json'ında "type": "module" varsa export default kullanın.