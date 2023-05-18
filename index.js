const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({ target: 'http://51.250.72.142:1337', changeOrigin: true }));
app.listen(3000);
