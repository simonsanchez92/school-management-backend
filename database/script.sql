-- Creating database
CREATE DATABASE school_management;



-- Creating tables
CREATE TABLE "role" (
    id SERIAL PRIMARY KEY NOT NULL,
    "description" varchar(50)
);

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY NOT NULL,
    email varchar(150),
    "password" varchar (100),
    role_id int,
    FOREIGN KEY (role_id) REFERENCES "role"(id)
);

CREATE TABLE "admin" (
    id SERIAL PRIMARY KEY NOT NULL,
    "name" varchar(150),
    surname varchar(150),
    join_date date,
    "status" boolean,
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TABLE "teacher" (
    id SERIAL PRIMARY KEY NOT NULL,
    "name" varchar(150),
    surname varchar(150),
    dob date,
    gender varchar(150),
    "address" varchar(150),
    phone varchar(150),
    join_date date,
    "status" boolean,
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TABLE "student" (
    id SERIAL PRIMARY KEY NOT NULL,
    "name" varchar(150),
    surname varchar(150),
    dob date,
    gender varchar(150),
    "address" varchar(150),
    phone varchar(150),
    join_date date,
    "status" boolean,
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);


-- Inserting data
INSERT INTO "role"("role") VALUES ('admin');
INSERT INTO "role"("role") VALUES ('teacher');
INSERT INTO "role"("role") VALUES ('student');


INSERT INTO "user"(email, "password", role_id) VALUES ('simonsanchez@gmail.com', '123456', 1);
INSERT INTO "user"(email, "password", role_id) VALUES ('camilosanchez@gmail.com', '123456', 2);
INSERT INTO "user"(email, "password", role_id) VALUES ('rodrigoromano@gmail.com', '123456', 3);


INSERT INTO "admin"("name", surname, dob, gender, "address", phone, join_date, user_id, status)
     VALUES ('Simon', 'Sanchez', '26/05/1992', "male", "San Luis 73", '4355670', '11/10/2022', True);

INSERT INTO "teacher"("name", surname, dob, gender, "address", phone, join_date, user_id, status)
     VALUES ('Simon', 'Sanchez', '26/05/1992', "male", "San Luis 73", '4355670', '11/10/2022', True);


INSERT INTO "student"("name", surname, dob, gender, "address", phone, join_date, user_id, status)
     VALUES ('Simon', 'Sanchez', '26/05/1992', "male", "San Luis 73", '4355670', '11/10/2022', True);


-- SELECT a.name, a.surname, u.email, u.password FROM "admin" as a
-- INNER JOIN "user" as u
-- ON a.user_id = u.id;



CREATE TABLE "Classroom" (
    id SERIAL PRIMARY KEY NOT NULL,
    "description" varchar(50),
    "year" INT,
    division_id SERIAL,
    FOREIGN KEY (division_id) REFERENCES "Division"(id)
);

CREATE TABLE "Division" (
    id SERIAL PRIMARY KEY NOT NULL,
    "description" varchar(50)
);

INSERT INTO "Division"("description") VALUES ('A');
INSERT INTO "Division"("description") VALUES ('B');


INSERT INTO "Classroom"("description", "year", "division_id") VALUES ('1°', 2022, 1);


SELECT c.description, c.year, d.description AS "Division" from "Classroom" c
INNER JOIN "Division" d ON c.division_id = d.id



INSERT INTO "Classroom"("description", "year", "division_id")
SELECT "id","description", "year", "division_id"
FROM "Classroom"
WHERE NOT EXISTS(
  SELECT "description", "year", "division_id"
  FROM "Classroom"
  WHERE Classroom.customer_id = Classroom.customer_id
);