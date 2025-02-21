SET NAMES 'utf8mb4';

CREATE TABLE `books` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `titre` VARCHAR(255) NOT NULL,
  `intro` VARCHAR(255) NOT NULL,
  `auteur` VARCHAR(255) NOT NULL,
  `genre` VARCHAR(255) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `books` (`titre`, `intro`, `auteur`, `genre`) VALUES
  ('Personne ne doit savoir', 'Alison organise une réunion d\'anciens camarades d\'Oxford pour fêter une amitié longue d\'un quart de siècle.', 'Claire McGowan', 'romance'),
  ('Avant toi', 'Louisa Clark n\'a aucune ambition particulière. Quand elle devient aide-soignante pour Will Traynor, un jeune homme tétraplégique, elle ne s\'attend pas à une telle transformation.', 'Jojo Moyes', 'romance'),
  ('La femme de ménage', 'Chaque jour, Millie fait le ménage dans la belle maison des Winchester, une riche famille new-yorkaise. Elle récupère aussi leur fille à l\'école et prépare les repas avant d\'aller se coucher dans sa chambre, au grenier.', 'Freida McFadden', 'thriller'),
  ('Le manuscrit inachevé', 'Un thriller haletant où une femme découvre un manuscrit dont l\'histoire semble trop proche de la réalité...', 'Franck Thilliez', 'thriller'),
  ('Tout le bleu du ciel', 'Jeune homme de 26 ans, condamné à une espérance de vie de deux ans par un Alzheimer précoce, souhaite prendre le large pour un ultime voyage. Recherche compagnon(ne) pour partager avec moi ce dernier périple.', 'Mélissa Da Costa', 'drame'),
  ('Le Nom du vent', 'Kvothe, jeune orphelin surdoué, apprend l\'art de la magie et cherche à découvrir la vérité sur la mort de ses parents.', 'Patrick Rothfuss', 'fantasy'),
  ('Dune', 'Paul Atréides, héritier d\'une noble famille, découvre un monde désertique où se joue le destin de l\'univers.', 'Frank Herbert', 'science-fiction'),
  ('Le mystère de la chambre jaune', 'Un huis clos captivant où un crime semble impossible à résoudre dans une chambre fermée de l\'intérieur.', 'Gaston Leroux', 'policier');

