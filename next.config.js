const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withVideos = require('next-videos')

module.exports = withPlugins([
    [withImages],
    [withVideos]
], {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/skills': { page: '/skills' },
            '/portfolio': { page: '/portfolio' },
            '/blog': { page: '/blog' }
        }
    }
});