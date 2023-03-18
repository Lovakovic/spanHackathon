const axios = require('axios');
const config = require('./backend/config')

// Submits url to assess, returns no result
const submitUrl = async (url, apiKey) => {
    try {
        const response = await axios.post(
            config.baseUrl + '/api/v1/indicators/submit_url',
            {
                url: url,
            },
            {
                headers: {
                    'X-OTX-API-KEY': apiKey,
                },
            }
        );

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};



// Returns assessment object containing `url` queried, `pulse_info` and `malware` data?


const apiKey = 'd5ff7a0e3d91b331cdb49bd38e1f65ab57a4f40a03b32409fcf2d95af9f2b22a';
const urlToSubmit = 'facebook.com';
assessUrl(urlToSubmit, apiKey);
