let BASE_URL = "https://social-backend-y2zq.onrender.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://social-backend-y2zq.onrender.com/";
}

export { BASE_URL };
