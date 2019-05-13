let apiUrl;

process.env.NODE_ENV === "development"
  ? apiUrl = "http://192.168.1.6:3200"
  : window.location.host === "www.tennoware.com" ? apiUrl = "https://www.tennoware.com" : apiUrl = "https://tennoware.com";

export default apiUrl;