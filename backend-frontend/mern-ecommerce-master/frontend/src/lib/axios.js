import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "http://localhost:8000/api" : "/api",
	withCredentials: true,
	headers: {
		'api-key': import.meta.env.VITE_API_KEY, // Vite kullandığınız için VITE_ prefix'i kullanılır
		'Content-Type': 'application/json'
	}
});

export default axiosInstance;