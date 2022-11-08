-- Creating database
CREATE DATABASE school_management;



-- Creating tables
CREATE TABLE "role" (
    id SERIAL PRIMARY KEY NOT NULL,
    "role" varchar(50)
);

CREATE TABLE "user" (
    id int PRIMARY KEY,
    email varchar(255),
    role_id int,
    FOREIGN KEY (role_id) REFERENCES "role"(id)
);


-- Inserting data
INSERT INTO "role"("role") VALUES ('admin');
INSERT INTO "role"("role") VALUES ('teacher');
INSERT INTO "role"("role") VALUES ('student');