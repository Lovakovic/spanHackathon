const axios = require("axios");
const config = require("../config");

// Returns object with containing info gained from general assessment
const assessUrl = async (url, apiKey) => {
    try {
        const response = await axios.get(
            config.baseUrl + '/api/v1/indicators/domain/' + url + '/general',
            {
                headers: {
                    'X-OTX-API-KEY': apiKey,
                },
            }
        );

        let malware = undefined;
        const pulseCount = response.data.pulse_info.count;

        // Site has been reported, query if malware distribution has also been reported
        if(pulseCount > 0){
            const response = await axios.get(
                config.baseUrl + '/api/v1/indicators/domain/' + url + '/malware',
                {
                    headers: {
                        'X-OTX-API-KEY': apiKey,
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
