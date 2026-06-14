import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7278/api", //این باید آدرس بچ اند باشه
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(
    (config) => {

        const token =
            sessionStorage.getItem(
                "accessToken"
            );

        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;

        }

        return config;
    }
);

export default api;