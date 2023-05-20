const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'http://51.250.72.142:1337',
    changeOrigin: true,
    onProxyRes: function(proxyRes, req, res) {
        const cookies = proxyRes.headers['set-cookie'];
        console.log(cookies);
        if (cookies) {
            res.setHeader('Set-Cookie', cookies);
        }
    }
}));
app.listen(3000);
