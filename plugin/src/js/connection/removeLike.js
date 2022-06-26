import axios from './../lib/axios';

export default async function removeLike() {
    // TODO: check already before
    return await axios.delete('/')
        .then(res => {
            if (res.status === 202) {
                return {
                    success: res.data.success,
                    totalLike: res.data.totalLike
                }
            }
            return {
                success: false,
                totalLike: 0
            }
        })
        .catch(() => {
            return {
                success: false,
                totalLike: 0
            }
        });
}