const axios = require("axios");
const config = require("../config");

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

        const { url: indicator, pulse_info } = response.data;
        let malware = undefined;

        const pulseCount = pulse_info.count;

        // Site has been reported, query if malware connects to it
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

        return { url, pulse_info, malware };
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    assessUrl
};
