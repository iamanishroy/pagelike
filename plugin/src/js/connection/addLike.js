import axios from "./../lib/axios";

export default async function addLike(level) {
  return await axios
    .post("/", {
      params: {
        level: level,
      },
    })
    .then((res) => {
      if (res.status === 202) {
        return {
          success: res.data.success,
          totalLike: res.data.totalLike,
        };
      }
      return {
        success: false,
        totalLike: 0,
      };
    })
    .catch(() => {
      return {
        success: false,
        totalLike: 0,
      };
    });
}
