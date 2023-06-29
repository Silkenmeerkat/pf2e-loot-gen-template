-- Create the items table
CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  img VARCHAR(255),
  name VARCHAR(255),
  system_id INT,
  type VARCHAR(255),
);

-- Create the traits table
CREATE TABLE traits (
  trait_id SERIAL PRIMARY KEY,
  trait_name VARCHAR(255)
);

-- Create the item_traits table
CREATE TABLE item_traits (
  item_id INT,
  trait_id INT,
  PRIMARY KEY (item_id, trait_id)
);

-- Create the system table
CREATE TABLE system (
  system_id INT PRIMARY KEY,
  description_value TEXT,
  bulk INT,
  level_value INT,
  precious_material_value VARCHAR(255),
  precious_material_grade_value VARCHAR(255),
  price_gp_value INT,
  quantity_per_batch INT,
  source_book VARCHAR(255),
  rarity_value VARCHAR(255),
);