const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'http://51.250.72.142:1337',
    changeOrigin: true,
    cookieDomainRewrite: true,
    onProxyRes: function(proxyRes, req, res) {
        const cookies = proxyRes.headers['set-cookie'];
        if (cookies) {
            const newCookies = cookies.map(cookie => cookie.replace('SameSite=Lax', 'SameSite=None;Secure'));
            res.setHeader('Set-Cookie', newCookies);
        }
    }

}));
app.listen(3000);
