import { create } from "axios";

export default create({
  baseURL: "https://pagelike.vercel.app/api/like/",
  params: {
    origin: window.location.href,
  },
  // baseURL: "http://localhost:8001/api/like/",
});
