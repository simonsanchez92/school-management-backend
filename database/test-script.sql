DROP PROCEDURE IF EXISTS insert_data;
CREATE PROCEDURE insert_data("year" INTEGER, description "Classroom"."description"%TYPE, "division_id" INTEGER)
LANGUAGE SQL
BEGIN ATOMIC
  
  --SELECT * FROM "Classroom" c WHERE c.division_id = "division_id"; 
  
  --CASE WHEN TRUE THEN

   --INSERT INTO "Classroom" ( "year", "description", "division_id") VALUES ("year",             "description", "division_id");
  
  --END; 
  
  DO $$
BEGIN
    IF EXISTS(SELECT * FROM "Classroom" c WHERE c.year = 2022) THEN
        INSERT INTO "Classroom" ( "year", "description", "division_id") VALUES (2023, 'test', 1);
    ELSE
    
    END IF;

END $$;

END;


DO $$
BEGIN
    IF EXISTS(SELECT * FROM "Classroom" c WHERE c.year = 2022) THEN
        INSERT INTO "Classroom" ( "year", "description", "division_id") VALUES (2023, 'test', 1);
    ELSE
    
    END IF;

END $$;



CALL insert_data(2023, '1°', 1);