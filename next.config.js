/** @type {import('next').NextConfig} */
const WithNextIntl = require('next-intl/plugin')(
  './i18n.ts'
)

const nextConfig = {}

module.exports = WithNextIntl(nextConfig)
