let apiUrl;

process.env.NODE_ENV === 'development'
    ? apiUrl = 'http://192.168.1.114:3100'
    : apiUrl = 'https://tennoware.com'

export default apiUrl;
