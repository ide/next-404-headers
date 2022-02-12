module.exports = {
  async headers() {
    return [{
      source: '/static/:path*',
      headers: [
        { key: 'access-control-allow-origin', value: '*' },
        { key: 'cache-control', value: 'public, max-age=3600' },
        { key: 'custom-demo', value: 'hello world' },
      ],
      locale: false,
    }];
  },
};
