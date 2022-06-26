const prisma = require('./../lib/prisma')

exports.addLike = async (host) => {
    try {
        return await prisma.likes.upsert({
            where: { host: host },
            update: {
                likeCount: {
                    increment: 1
                }
            },
            create: {
                host: host,
                likeCount: 1,
            },
        });
    } catch (e) {
        return false;
    }
}

exports.getLike = async (host) => {
    try {
        return await prisma.likes.upsert({
            where: { host: host },
            update: {},
            create: {
                host: host,
                likeCount: 0,
            },
        });
    } catch (e) {
        return false;
    }
}

exports.removeLike = async (host) => {
    try {
        let t = await prisma.likes.update({
            where: {
                host: host,
            },
            data: {
                likeCount: {
                    increment: -1
                }
            }
        });

        if (t.likeCount < 0) {
            t = await prisma.likes.update({
                where: {
                    host: host,
                },
                data: {
                    likeCount: 0
                }
            });
            return [false, t];
        }

        return [true, t];
    } catch (e) {
        console.log(e)
        return false;
    }
}

