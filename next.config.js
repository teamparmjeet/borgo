/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true
  },
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' },
      '/about': { page: '/about' },
      '/benefits': { page: '/benefits' },
      '/contact': { page: '/contact' },
      '/blog': { page: '/blog' },
      '/plans': { page: '/plans' },
      '/policies': { page: '/policies' },
      '/process': { page: '/process' },
      '/services': { page: '/services' },
      '/dext_blog': { page: '/dext_blog' },
      '/bike_blog': { page: '/bike_blog' },
      '/xero_blog': { page: '/xero_blog' },
      '/voucher_blog': { page: '/voucher_blog' },
      '/mileage_blog': { page: '/mileage_blog' },
      '/leogrants_blog': { page: '/leogrants_blog' },
      '/retirementrelief_blog': { page: '/retirementrelief_blog' },
      '/incometax_blog': { page: '/incometax_blog' },
      '/questionssarah_blog': { page: '/questionssarah_blog' },
      '/eiis_blog': { page: '/eiis_blog' },
      '/latereturn_blog': { page: '/latereturn_blog' },
      '/err_blog': { page: '/err_blog' },
    };
  },
}

module.exports = nextConfig
