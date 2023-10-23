-- Convert the database to utf8mb4 collate utf8mb4_unicode_ci
-- Convert the table to utf8mb4 collate utf8mb4_unicode_ci
-- Convert the specific field (name) in the table to utf8mb4 collate utf8mb4_unicode_ci
ALTER DATABASE hbtn_0c_0 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hbtn_0c_0;
ALTER TABLE first_table CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE first_table MODIFY name VARCHAR(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
