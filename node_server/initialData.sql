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
INSERT INTO device (name, operatingSystem, ipv4Address, macAddress) VALUES
('Johns_Laptop', 'Windows 10', '192.168.1.2', '00:14:22:01:23:45'),
('Mikes_iPhone', 'iOS', '192.168.1.3', '00:1A:C2:7B:00:47'),
('Carolines_MacBook', 'macOS', '192.168.1.4', '00:3E:E1:C8:AA:22'),
('Sams_Android', 'Android', '192.168.1.5', '02:00:4C:4F:4F:60'),
('Jennifers_Laptop', 'Linux', '192.168.1.6', '00:16:3E:2A:BD:9F'),
('Davids_iPad', 'iOS', '192.168.1.7', '00:1D:7D:AA:BB:CC'),
('Brians_MacBook_Air', 'macOS', '192.168.1.8', '00:26:08:AF:1C:1D'),
('Elizabeths_Android_Tablet', 'Android', '192.168.1.9', '02:00:57:3A:F8:B1'),
('Adams_Surface', 'Windows 11', '192.168.1.10', '00:14:22:01:24:56'),
('Marys_Android_Phone', 'Android', '192.168.1.11', '02:00:8C:4F:4F:61'),
('Pauls_iMac', 'macOS', '192.168.1.12', '00:3E:E1:C8:AA:23'),
('Natalies_Chromebook', 'Chrome OS', '192.168.1.13', '00:16:3E:2A:BE:9A');

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
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (18, 6, 'MALWARE', 3);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (5, 1, 'SOCIAL_ENGINEERING', 4);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (20, 8, 'UNWANTED_SOFTWARE', 5);
INSERT INTO assessmentReport (pulseCount, malwareCount, threatType, platformTypeId)
VALUES (7, 3, 'POTENTIALLY_HARMFUL_APPLICATION', 5);

-- Insert data into maliciousEvent
-- Insert data into maliciousEvent
INSERT INTO maliciousEvent (urlVisited, visitedAt, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.example-malware1.com', '2023-03-12 10:00:00', '100.200.55.21', 'high', 1, 1),
 ('www.example-phishing2.com', '2023-03-13 11:00:00', '23.45.67.89', 'low', 2, 2),
 ('www.example-unwanted3.com', '2023-03-14 12:00:00', '123.45.67.89', 'undefined', 3, 3),
 ('www.example-harmful4.com', '2023-03-15 13:00:00', '98.76.54.32', 'high', 4, 4),
 ('www.fitnessguru.com', '2023-03-16 14:00:00', '162.221.3.21', 'low', 5, 1),
 ('www.creativehub.com', '2023-03-17 15:00:00', '79.129.11.87', 'high', 2, 2),
 ('www.techconnect.com', '2023-03-18 16:00:00', '222.33.44.121', 'undefined', 5, 3),
 ('www.sportscentral.com', '2023-03-12 17:00:00', '45.76.122.90', 'high', 7, 5),
 ('www.bad-malware5.com', '2023-03-13 18:00:00', '89.123.45.67', 'high', 5, 5),
 ('www.phishing-attack6.com', '2023-03-14 19:00:00', '11.22.33.44', 'low', 6, 6),
 ('www.unwanted-software7.com', '2023-03-15 20:00:00', '222.111.33.77', 'undefined', 7, 7),
 ('www.potentially-harmful8.com', '2023-03-16 21:00:00', '201.202.203.204', 'high', 8, 8),
 ('www.bad-malware9.com', '2023-03-17 22:00:00', '209.85.220.41', 'high', 9, 9),
 ('www.phishing-attack10.com', '2023-03-18 23:00:00', '192.168.1.1', 'low', 10, 10),
 ('www.unwanted-software11.com', '2023-03-12 08:00:00', '173.194.55.121', 'undefined', 10, 11),
 ('www.potentially-harmful12.com', '2023-03-13 09:00:00', '216.58.220.46', 'high', 10, 10);


SELECT * FROM completeReport;
