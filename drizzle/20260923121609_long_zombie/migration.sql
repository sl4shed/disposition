-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `rsvps` (
	`hca_id` char(16) PRIMARY KEY,
	`email` char(255) NOT NULL,
	`slack_id` char(16) NOT NULL,
	`timestamp` datetime GENERATED ALWAYS AS (current_timestamp()) VIRTUAL DEFAULT NULL
);

*/