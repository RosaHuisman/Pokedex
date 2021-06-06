BEGIN;

DROP TABLE IF EXISTS "pokemon",
"type",
"pokemon_type";

-- -----------------------------------------------------
-- Table "pokemon"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "pokemon" (
  "id" serial PRIMARY KEY,
  "nom" text NOT NULL,
  "pv" int NOT NULL,
  "attaque" int NOT NULL,
  "defense" int NOT NULL,
  "attaque_spe" int NOT NULL,
  "defense_spe" int NOT NULL,
  "vitesse" int NOT NULL,
  "numero" int NOT NULL UNIQUE
);

-- -----------------------------------------------------
-- Table "type"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "type" (
  "id" serial PRIMARY KEY,
  "name" text NOT NULL,
  "color" text NOT NULL
);

-- -----------------------------------------------------
-- Table "pokemon_type"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "pokemon_type" (
  "pokemon_id" integer REFERENCES "pokemon"("id"),
  "type_id" integer REFERENCES "type" ("id"),
  PRIMARY KEY ("pokemon_id", "type_id")
);

COMMIT;