SELECT email, r.description FROM "Users" AS u
INNER JOIN "Roles" AS r
ON u.role_id = r.id;

SELECT * FROM "Users";

INSERT INTO "Admin" (status, "name", surname, user_id) VALUES (TRUE, 'Simon', 'Sanchez', 11)

SELECT a.name, a.surname, u.email FROM "Admin" a
INNER JOIN "Users" u ON a.user_id = u.id;


SELECT t.name, t.surname, t.dob, t.gender,t.address, t.phone, t.status, u.email FROM "Teacher" t
INNER JOIN "Users" u ON t.user_id =u.id;


CREATE TABLE "Classroom" (
    id SERIAL PRIMARY KEY NOT NULL,
    "description" VARCHAR(50),
    "year" INT,
    division_id SERIAL,
    FOREIGN KEY (division_id) REFERENCES "Division"(id)
);

CREATE TABLE "Division" (
    id SERIAL PRIMARY KEY NOT NULL,
    "description" VARCHAR(50) UNIQUE
);

INSERT INTO "Division"("description") VALUES ('A');
INSERT INTO "Division"("description") VALUES ('B');

INSERT INTO "Classroom"("description", "year", "division_id") VALUES ('1°', 2022, 1);
INSERT INTO "Classroom"("description", "year", "division_id") VALUES ('1°', 2022, 2);

SELECT c.description, c.year, d.description AS "Division" FROM "Classroom" c
INNER JOIN "Division" d ON c.division_id = d.id



