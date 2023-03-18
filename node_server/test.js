const axios = require('axios');

const submitURL = async (url, apiKey) => {
    try {
        const response = await axios.post(
            'https://otx.alienvault.com/api/v1/indicators/submit_url',
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

const queryAssessment = async (url, apiKey) => {
    try {
        const response = await axios.get(
            'https://otx.alienvault.com/api/v1/indicators/url/' + url + '/general',
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

const apiKey = 'd5ff7a0e3d91b331cdb49bd38e1f65ab57a4f40a03b32409fcf2d95af9f2b22a';
const urlToSubmit = 'www.runstarhrvatska.com';
// submitURL(urlToSubmit, apiKey);
queryAssessment(urlToSubmit, apiKey);
