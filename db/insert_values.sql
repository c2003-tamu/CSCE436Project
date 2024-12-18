USE csce436;

-- Insert dummy values into User table
INSERT INTO User (name) VALUES 
('Alice Johnson'),
('Bob Smith'),
('Carol White'),
('David Brown');

-- Insert dummy values into Room table
INSERT INTO Room (name, floor, number, seats, table_type, has_monitor, has_whiteboard) VALUES 
('Atrium', 1, 101, 50, 1, 1, 0),
(NULL, 1, 102, 4, 0, 0, 1),
(NULL, 2, 201, 2, 1, 1, 1),
(NULL, 2, 202, 8, 0, 1, 0),
(NULL, 3, 301, 4, 0, 0, 0);

-- Insert dummy values into Event table
-- Assuming each event duration is set in `number_minutes`
INSERT INTO Event (name, user_id, start_datetime, end_datetime, room_id, number_minutes) VALUES 
('Team Meeting', 1, '2024-11-06 09:00:00', '2024-11-06 10:00:00', 1, 60),
('Project Briefing', 2, '2024-11-06 11:00:00', '2024-11-06 12:30:00', 2, 90),
('Training Session', 3, '2024-11-07 14:00:00', '2024-11-07 16:00:00', 3, 120),
('Client Presentation', 1, '2024-11-08 13:00:00', '2024-11-08 14:30:00', 4, 90),
('Workshop', 4, '2024-11-09 10:00:00', '2024-11-09 12:00:00', 5, 120);
