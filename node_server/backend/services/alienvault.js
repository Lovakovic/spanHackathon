const axios = require("axios");
const config = require("../config");

// Returns object with containing info gained from general assessment
const assessUrl = async (url) => {
    try {
        const response = await axios.get(
            config.baseAlienVaultUrl + '/api/v1/indicators/domain/' + url + '/general',
            {
                headers: {
                    'X-OTX-API-KEY': config.alienVaultApiKey,
                },
            }
        );

        let malware = undefined;
        const pulseCount = response.data.pulse_info.count;

        // Site has been reported, query if malware distribution has also been reported
        if(pulseCount > 0){
            const response = await axios.get(
                config.baseAlienVaultUrl + '/api/v1/indicators/domain/' + url + '/malware',
                {
                    headers: {
                        'X-OTX-API-KEY': config.alienVaultApiKey,
                    },
                }
            );
            malware = response.data;
        }

        const malwareCount = malware?.data.length;


        return { url, pulseCount, malwareCount };
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    assessUrl
};
