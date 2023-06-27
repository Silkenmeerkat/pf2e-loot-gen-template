import 'server-only';
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

// interface item {
//   id: Generated<number>;
//   name: string;
//   description: string;
//   bulk: string;
//   price: Float32Array; 
//   quantity: Int32Array;
//   source: string;
//   type: string;
//   level: Int16Array
//   rarity: string;
//   //traits TBD?
// }
// 
// CREATE TABLE items (
//   item_id INT PRIMARY KEY AUTO_INCREMENT,
//   img VARCHAR(255),
//   name VARCHAR(255),
//   system_id INT,
//   type VARCHAR(255),
//   FOREIGN KEY (system_id) REFERENCES system(system_id)
// );
// interface items {
//   item_id: Generated<number>
//   name: string; 
//   system_id: Int;

// }
