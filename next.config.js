module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/browse',
        permanent: true,
      },
    ]
  },
  i18n: {
    locales: ["en", "pl-PL"],
    defaultLocale: "en",
  },
  experimental: {
    outputStandalone: true,
  },
}
