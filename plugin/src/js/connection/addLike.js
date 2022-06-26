import axios from './../lib/axios';

export default async function addLike() {
    // TODO: check already before
    return await axios.post('/')
        .then(res => {
            if (res.status === 202) {
                console.log(res.data.totalLike)
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