// 环境
const env = process.env.NODE_ENV;

const baseUrl = env === 'production' ? "" : "";

export default {
    baseUrl
}