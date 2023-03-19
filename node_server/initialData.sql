DELETE FROM maliciousEvent;
DELETE FROM device;
DELETE FROM assessmentReport;
DELETE FROM platformType;


-- Insert data into platformType
INSERT INTO platformType (name) VALUES ('Windows');
INSERT INTO platformType (name) VALUES ('Linux');
INSERT INTO platformType (name) VALUES ('macOS');
INSERT INTO platformType (name) VALUES ('Android');
INSERT INTO platformType (name) VALUES ('iOS');

-- Insert data into device
INSERT INTO device (name, operatingSystem, ipv4Address, macAddress)
VALUES ('Johns_Laptop', 'Windows 10', '192.168.1.2', '00:14:22:01:23:45');
INSERT INTO device (name, operatingSystem, ipv4Address, macAddress)
VALUES ('Mikes_iPhone', 'iOS', '192.168.1.3', '00:1A:C2:7B:00:47');
INSERT INTO device (name, operatingSystem, ipv4Address, macAddress)
VALUES ('Carolines_MacBook', 'macOS', '192.168.1.4', '00:3E:E1:C8:AA:22');
INSERT INTO device (name, operatingSystem, ipv4Address, macAddress)
VALUES ('Sams_Android', 'Android', '192.168.1.5', '02:00:4C:4F:4F:60');
INSERT INTO device (name, operatingSystem, ipv4Address, macAddress)
VALUES ('Jennifers_Laptop', 'Linux', '192.168.1.6', '00:16:3E:2A:BD:9F');
INSERT INTO device (name, operatingSystem, ipv4Address, macAddress)
VALUES ('Davids_iPad', 'iOS', '192.168.1.7', '00:1D:7D:AA:BB:CC');
INSERT INTO device (name, operatingSystem, ipv4Address, macAddress)
VALUES ('Brians_MacBook_Air', 'macOS', '192.168.1.8', '00:26:08:AF:1C:1D');
INSERT INTO device (name, operatingSystem, ipv4Address, macAddress)
VALUES ('Elizabeths_Android_Tablet', 'Android', '192.168.1.9', '02:00:57:3A:F8:B1');

-- Insert data into assessmentReport
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (15, 5, 'MALWARE', 1);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (8, 3, 'SOCIAL_ENGINEERING', 2);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (22, 7, 'UNWANTED_SOFTWARE', 3);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (6, 2, 'POTENTIALLY_HARMFUL_APPLICATION', 4);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (25, 10, 'MALWARE', 2);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (12, 4, 'SOCIAL_ENGINEERING', 3);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (30, 15, 'UNWANTED_SOFTWARE', 4);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (10, 1, 'POTENTIALLY_HARMFUL_APPLICATION', 5);

-- Insert data into maliciousEvent
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.example-malware1.com', '100.200.55.21', 'high', 1, 1);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.example-phishing2.com', '23.45.67.89', 'low', 2, 2);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.example-unwanted3.com', '123.45.67.89', 'undefined', 3, 3);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.example-harmful4.com', '98.76.54.32', 'high', 4, 4);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.fitnessguru.com', '162.221.3.21', 'low', 5, 1);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.creativehub.com', '79.129.11.87', 'high', 2, 2);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.techconnect.com', '222.33.44.121', 'undefined', 5, 3);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.sportscentral.com', '45.76.122.90', 'high', 7, 5);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.bad-malware5.com', '89.123.45.67', 'high', 5, 5);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.phishing-attack6.com', '11.22.33.44', 'low', 6, 6);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.unwanted-software7.com', '222.111.33.77', 'undefined', 7, 7);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.potentially-harmful8.com', '201.202.203.204', 'high', 8, 8);


SELECT * FROM completeReport where id = 4;
