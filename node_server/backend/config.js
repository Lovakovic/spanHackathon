module.exports = {
    port: process.env.PORT || 8081,
    pool: {
        connectionLimit: 100,
        host: 'localhost',
        user: 'dev',
        password: 'devpass',
        database: 'hackathon',
        debug: false
    },
    baseUrl: 'https://otx.alienvault.com',
    apiKey: 'd5ff7a0e3d91b331cdb49bd38e1f65ab57a4f40a03b32409fcf2d95af9f2b22a'
}
