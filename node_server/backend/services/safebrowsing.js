const axios = require("axios");
const config = require("../config");

const assess = async (url) => {
    const requestBody = {
        client: {
            clientId: 'spanHackathon',
            clientVersion: '1.0',
        },
        threatInfo: {
            threatTypes: ['THREAT_TYPE_UNSPECIFIED', 'MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE',
                'POTENTIALLY_HARMFUL_APPLICATION'],
            platformTypes: ['ANY_PLATFORM'],
            threatEntryTypes: ['URL'],
            threatEntries: [{ url }],
        }
    };

    try {
        const response = await axios.post(`${config.safeBrowsingBaseUrl}/v4/threatMatches:find?key=${config.safeBrowsingApiKey}`, requestBody);
        return response.data;
    } catch (error) {
        console.error(`Error checking URL threat: ${error.message}`);
    }
}

module.exports = {
    assess
};
