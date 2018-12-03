let apiUrl;

process.env.NODE_ENV === 'development'
    ? apiUrl = 'http://localhost:3100'
    : apiUrl = 'https://tennoware.com'

export default apiUrl;
