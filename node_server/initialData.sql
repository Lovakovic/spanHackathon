INSERT INTO platformType(name) VALUES ('PLATFORM_TYPE_UNSPECIFIED');
INSERT INTO platformType(name) VALUES ('WINDOWS');
INSERT INTO platformType(name) VALUES ('LINUX');
INSERT INTO platformType(name) VALUES ('ANDROID');
INSERT INTO platformType(name) VALUES ('OSX');
INSERT INTO platformType(name) VALUES ('IOS');
INSERT INTO platformType(name) VALUES ('ANY_PLATFORM');
INSERT INTO platformType(name) VALUES ('ALL_PLATFORMS');
INSERT INTO platformType(name) VALUES ('CHROME');

INSERT INTO device(name,operatingSystem) VALUES ('Galaxy S10,','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('MacBook Air','macOS Big Sur 11.2.3');
INSERT INTO device(name,operatingSystem) VALUES ('iPad Pro','iPadOS 15.1');
INSERT INTO device(name,operatingSystem) VALUES ('Pixel 3','Android 12');
INSERT INTO device(name,operatingSystem) VALUES ('ThinkPad X1 Carbon','Windows 10 Pro 21H1');
INSERT INTO device(name,operatingSystem) VALUES ('iPhone 12 Pro Max','iOS 15.1');
INSERT INTO device(name,operatingSystem) VALUES ('Surface Laptop 3','Windows 11 Home');
INSERT INTO device(name,operatingSystem) VALUES ('Galaxy Tab S7','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('iMac','macOS Monterey 12.0.1');
INSERT INTO device(name,operatingSystem) VALUES ('Moto G Power','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('Surface Pro 7','Windows 10 Pro 21H1');
INSERT INTO device(name,operatingSystem) VALUES ('OnePlus 9','Android 12');
INSERT INTO device(name,operatingSystem) VALUES ('MacBook Pro','macOS Catalina 10.15.7');
INSERT INTO device(name,operatingSystem) VALUES ('Pixel 6','Android 12');
INSERT INTO device(name,operatingSystem) VALUES ('Galaxy Note 20 Ultra','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('HP Spectre x360','Windows 11 Home');
INSERT INTO device(name,operatingSystem) VALUES ('iPad mini','iPadOS 15.1');
INSERT INTO device(name,operatingSystem) VALUES ('Dell XPS 13','Ubuntu 21.10');
INSERT INTO device(name,operatingSystem) VALUES ('Surface Go 2','Windows 10 Home 21H1');
INSERT INTO device(name,operatingSystem) VALUES ('iPhone SE (2nd Gen)','iOS 15.1');
INSERT INTO device(name,operatingSystem) VALUES ('ThinkPad T490','Windows 10 Pro 21H1');
INSERT INTO device(name,operatingSystem) VALUES ('Galaxy A52','Android 13');
INSERT INTO device(name,operatingSystem) VALUES ('MacBook','macOS Big Sur 11.5.2');
INSERT INTO device(name,operatingSystem) VALUES ('Pixel 4a','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('Surface Pro X','Windows 11 Home');
INSERT INTO device(name,operatingSystem) VALUES ('iPad Air','iPadOS 15.1');
INSERT INTO device(name,operatingSystem) VALUES ('Galaxy S21 Ultra','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('MacBook Pro','macOS Mojave 10.14.6');
INSERT INTO device(name,operatingSystem) VALUES ('Moto G Stylus','Android 10');
INSERT INTO device(name,operatingSystem) VALUES ('ThinkPad X13','Windows 11 Pro');
INSERT INTO device(name,operatingSystem) VALUES ('Surface Studio 2','Windows 10 Pro 21H1');
INSERT INTO device(name,operatingSystem) VALUES ('iPhone 11','iOS 15.1');
INSERT INTO device(name,operatingSystem) VALUES ('Galaxy Tab A7 Lite','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('Dell Inspiron 15','Windows 11 Home');
INSERT INTO device(name,operatingSystem) VALUES ('iPad','iPadOS 15.1');
INSERT INTO device(name,operatingSystem) VALUES ('Pixel 3a','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('Surface Book 3','Windows 10 Pro 21H1');
INSERT INTO device(name,operatingSystem) VALUES ('OnePlus 8','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('MacBook Air','macOS High Sierra 10.13.6');
INSERT INTO device(name,operatingSystem) VALUES ('Galaxy Z Fold 3','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('iPhone 13 Pro','iOS 15.1');
INSERT INTO device(name,operatingSystem) VALUES ('ThinkPad T15g','Windows 11 Pro');
INSERT INTO device(name,operatingSystem) VALUES ('Surface Laptop 4','Windows 10 Home 21H1');
INSERT INTO device(name,operatingSystem) VALUES ('Galaxy S20 FE','Android 11');
INSERT INTO device(name,operatingSystem) VALUES ('MacBook Pro','macOS Sierra 10.12.6');
INSERT INTO device(name,operatingSystem) VALUES ('Pixel 5a','Android 12');
INSERT INTO device(name,operatingSystem) VALUES ('iPad Pro','iPadOS 14.8');
INSERT INTO device(name,operatingSystem) VALUES ('Surface Pro 8','Windows 11 Home');
INSERT INTO device(name,operatingSystem) VALUES ('Moto G7 Power','Android 10');
INSERT INTO device(name,operatingSystem) VALUES ('Galaxy Tab S6 Lite','Android 10');


INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.fitnessguru.com', '162.221.3.21', 'low', 49, 1);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.creativehub.com', '79.129.11.87', 'high', 2, 2);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.techconnect.com', '222.33.44.121', 'undefined', 5, 3);
INSERT INTO maliciousEvent (urlVisited, originIp, threatLevel, deviceId, assessmentReportId)
VALUES ('www.sportscentral.com', '45.76.122.90', 'high', 24, 5);
