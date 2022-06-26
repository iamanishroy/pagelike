import axios from '../lib/axios';

export default async function getLike() {
    return await axios.get('/')
        .then(res => {
            if (res.status === 200) {
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