export function totalScanned(data){
    let count = 0;
    data?.map((threat,id) => {
        count += (threat.malwareCount + threat.pulseCount);
    })
    console.log(count)
    return count;
}


export function todayScanned(data){
    let count = 0;
    const today = new Date()
    data?.map((threat,id) => {
        const datetime = new Date(threat.visitedAt)
        if (
            datetime.getFullYear() === today.getFullYear() &&
            datetime.getMonth() === today.getMonth() &&
            datetime.getDate() === today.getDate()
          ) {
            count += (threat.malwareCount + threat.pulseCount);}
    })
    return count
}


export function maliciousThreats(data){
    let count = 0;
    data?.map((threat,id) => {
        count += threat.malwareCount
    })
    return count
}

export function decoyThreats(data){
    let count = 0;
    data?.map((threat,id) => {
        count += (threat.pulseCount/2);
    })
    return count
}