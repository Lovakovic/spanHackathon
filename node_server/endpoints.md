## API endpoints

Note: Confirm in server console that the server is running
on port `8081`, otherwise modify port in API call accordingly

### Events
* `GET` @ `http://localhost:8081/event/all`
  * returns an array of JSON objects containing `completeReport` objects from database
    * example of response body: 
      * `[
        {
        "id": 1,
        "urlVisited": "www.example-malware1.com",
        "visitedAt": "2023-03-18T23:29:28.000Z",
        "originIp": "100.200.55.21",
        "ipv4Address": "192.168.1.2",
        "macAddress": "00:14:22:01:23:45",
        "pulseCount": 15,
        "malwareCount": 5,
        "threatType": "MALWARE",
        "platformName": "Windows"
        },
        {
        "id": 2,
        "urlVisited": "www.example-phishing2.com",
        "visitedAt": "2023-03-18T23:29:28.000Z",
        "originIp": "23.45.67.89",
        "ipv4Address": "192.168.1.3",
        "macAddress": "00:1A:C2:7B:00:47",
        "pulseCount": 8,
        "malwareCount": 3,
        "threatType": "SOCIAL_ENGINEERING",
        "platformName": "Linux"
        }]`
      
* `GET` @ `http://localhost:8081/event/delete/:id`
    * deletes `maliciousEvent` with specified id and its corresponding `assessmentReport`
    * Not very REST-ful of me, I know, but React apparently doesn't natively include DELETE method and this makes life easier
    * returns response object with empty body
  
### Assessment & reports
* `GET` @ `http://localhost:8081/assessReport/url/:url`
  * evaluates and assesses threats on provided `url`, inserts new `assessmentReport` object into DB, 
    as well as returning it inside of response body
  * params: 
    * `url` - domain url without protocol or parameters eg. `facebook.com`
    * example of a reply
  * example of a response body (in case of APIs returning `malwareCount` and `pulseCoun` of `0`: 
    * `{
      "url": "moj.tvz.hr",
      "pulseCount": 0,
      "malwareCount": 0
      }`
  * example of a response body (in case of APIs returning either `malwareCount` or `pulseCoun` greater than `0`: 
    * `{
      "pulseCount": 5,
      "malwareCount": 2,
      "matches": [
      {
      "threatType": "MALWARE",
      "platformType": "ANY_PLATFORM",
      "threatEntryType": "URL",
      "threat": {
      "url": "http://www.example-malicious-url.com"
      }
      },
      {
      "threatType": "SOCIAL_ENGINEERING",
      "platformType": "ANY_PLATFORM",
      "threatEntryType": "URL",
      "threat": {
      "url": "http://www.example-malicious-url.com"
      }}
      ]}`  
    
* `GET` @ `http://localhost:8081/assessReport/all`
  * returns all archived assessmentReports in body of response
  * example of a response body:
    * `[
      {
      "id": 1,
      "pulseCount": 15,
      "malwareCount": 5,
      "threatType": "MALWARE",
      "platformTypeId": 1
      },
      {
      "id": 2,
      "pulseCount": 8,
      "malwareCount": 3,
      "threatType": "SOCIAL_ENGINEERING",
      "platformTypeId": 2
      }]`
