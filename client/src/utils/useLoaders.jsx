
export function useLoaders(data){

    const allScans = data.length;
    let unspecified = 0;
    let malware = 0;
    let se = 0;
    let unwantedSoftware = 0;
    let flagged = 0;
    
    data?.map((threat,id) => {
        // console.log(threat.threatType)
        switch(threat.threatType){
            case "UNSPECIFIED":
                unspecified++;
                break;
            case "MALWARE":
                malware++;
                break;
            case "SOCIAL_ENGINEERING":
                se++;
                break;
            case "UNWANTED_SOFTWARE":
                unwantedSoftware++;
                break;
            case "POTENTIALLY_HARMFUL_APPLICATION":
                flagged++;
                break;
            default:
                null
        }
    })

    // console.log(unwantedSoftware)

    return {allScans,unspecified,malware,se,unwantedSoftware,flagged}
}

export default useLoaders;