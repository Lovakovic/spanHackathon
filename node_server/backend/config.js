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
    alienVaultApiKey: 'd5ff7a0e3d91b331cdb49bd38e1f65ab57a4f40a03b32409fcf2d95af9f2b22a',
    virusTotalApiKey: `ec411e9e674b9b2f656f8665f61490c05b0e6bac0c7d68f560d66a9f80353526`
}
