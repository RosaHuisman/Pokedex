BEGIN;

--
-- Déchargement des données de la table "pokemon"
--
INSERT INTO "pokemon" ("id", "nom", "pv", "attaque", "defense", "attaque_spe", "defense_spe", "vitesse", "numero") VALUES
(1209, 'Bulbizarre', 45, 49, 49, 65, 65, 45, 1),
(1210, 'Herbizarre', 60, 62, 63, 80, 80, 60, 2),
(1211, 'Florizarre', 80, 82, 83, 100, 100, 80, 3),
(1212, 'Salameche', 39, 52, 43, 60, 50, 65, 4),
(1213, 'Reptincel', 58, 64, 58, 80, 65, 80, 5),
(1214, 'Dracaufeu', 78, 84, 78, 109, 85, 100, 6),
(1215, 'Carapuce', 44, 48, 65, 50, 64, 43, 7),
(1216, 'Carabaffe', 59, 63, 80, 65, 80, 58, 8),
(1217, 'Tortank', 79, 83, 100, 85, 105, 78, 9),
(1218, 'Chenipan', 45, 30, 35, 20, 20, 45, 10),
(1219, 'Chrysacier', 50, 20, 55, 25, 25, 30, 11),
(1220, 'Papilusion', 60, 45, 50, 80, 80, 70, 12),
(1221, 'Aspicot', 40, 35, 30, 20, 20, 50, 13),
(1222, 'Coconfort', 45, 25, 50, 25, 25, 35, 14),
(1223, 'Dardargnan', 65, 80, 40, 45, 80, 75, 15),
(1224, 'Roucool', 40, 45, 40, 35, 35, 56, 16),
(1225, 'Roucoups', 63, 60, 55, 50, 50, 71, 17),
(1226, 'Roucarnage', 83, 80, 75, 70, 70, 91, 18),
(1227, 'Rattata', 30, 56, 35, 25, 35, 72, 19),
(1228, 'Rattatac', 55, 81, 60, 50, 70, 97, 20),
(1229, 'Piafabec', 40, 60, 30, 31, 31, 70, 21),
(1230, 'Rapasdepic', 65, 90, 65, 61, 61, 100, 22);


--
-- Déchargement des données de la table "type"
--

INSERT INTO "type" ("id", "name", "color") VALUES
(1, 'Acier', 'aaaabb'),
(2, 'Combat', 'bb5544'),
(3, 'Dragon', '7766ee'),
(4, 'Eau', '3399ff'),
(5, 'Électrik', 'ffbb33'),
(6, 'Feu', 'ff4422'),
(7, 'Glace', '77ddff'),
(8, 'Insecte', 'aabb22'),
(9, 'Normal', 'bbaabb'),
(10, 'Plante', '77cc55'),
(11, 'Poison', 'aa5599'),
(12, 'Psy', 'ff5599'),
(13, 'Roche', 'bbaa66'),
(14, 'Sol', 'ddbb55'),
(15, 'Spectre', '6666bb'),
(16, 'Ténèbres', '665544'),
(17, 'Vol', '6699ff');


--
-- Déchargement des données de la table "pokemon_type"
--

INSERT INTO "pokemon_type" ("pokemon_id", "type_id") VALUES
(1209, 10),
(1209, 11),
(1210, 10),
(1210, 11),
(1211, 10),
(1211, 11),
(1212, 6),
(1213, 6),
(1214, 6),
(1214, 17),
(1215, 4),
(1216, 4),
(1217, 4),
(1218, 8),
(1219, 8),
(1220, 8),
(1220, 17),
(1221, 8),
(1221, 11),
(1222, 8),
(1222, 11),
(1223, 8),
(1223, 11),
(1224, 9),
(1224, 17),
(1225, 9),
(1225, 17),
(1226, 9),
(1226, 17),
(1227, 9),
(1228, 9),
(1229, 9),
(1229, 17),
(1230, 9),
(1230, 17);

COMMIT;
