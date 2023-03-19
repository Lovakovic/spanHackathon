export function chartData(data){
    let array = []

    data?.map((threat,id) => {

        const dateStr = threat.visitedAt;
        const dateObj = new Date(dateStr);
        const options = { weekday: 'long' };
        const dayString = dateObj.toLocaleString('en-US', options);
        

        array.push({name: dayString, malicious: threat.malwareCount, decoy: threat.pulseCount})

        console.log("chartdata " + threat)
    })
    return array;

}