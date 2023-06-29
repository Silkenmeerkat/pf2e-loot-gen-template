// import { Kysely, sql } from 'kysely'
// import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

// export async function up(db: Kysely<any>): Promise<void> {
//   await db.schema
//     .createTable('items')
//       .addColumn('id', 'serial', (col) => col.primaryKey())
//       .addColumn('img', 'varchar')
//       .addColumn('name', 'varchar', (col) => col.notNull())
//       .addColumn('system_id', 'integer')
//       .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
//       .addForeignKeyConstraint('system_fk', ['system_id'], 'system', ['system_id'])
//       // .addForeignKeyConstraint('system_id_fk', ['system_id'], )
//       .execute()

//   await db.schema
//     .createTable('traits')
//       .addColumn('trait_id', 'serial', (col) => col.primaryKey())
//       .addColumn('name', 'varchar', (col) => col.notNull().unique().references(''))
//       .execute()

//   await db.schema
//     .createTable('item_traits')
//       .addColumn('item_id', 'integer', (col) => col.notNull())
//       .addColumn('trait_id', 'integer', (col) => col.notNull())
//       .addForeignKeyConstraint('item_id_fk', ['item_id'], 'items',['id'])
//       .addForeignKeyConstraint('trait_id_fk', ['trait_id'], 'traits', ['traid_id'])
//       .addPrimaryKeyConstraint('trait_pk', ['item_id', 'trait_id'] )
//       .execute()

//   await db.schema
//     .createTable('system')
//       .addColumn('system_id', 'integer', (col) => col.primaryKey()) 
//       .addColumn('description_value', 'text')
//       .addColumn('bulk', 'integer', (col) => col.notNull())
//       .addColumn('level_value', 'integer', (col) => col.notNull())
//       .addColumn('precious_material_value', 'varchar')
//       .addColumn('precious_material_grade_value', 'varchar')
//       // 1 cp = .01
//       // 1 sp = .10
//       // 1 gp = 1.00

//       .addColumn('price_gp_value', 'numeric' )
//       .addColumn('quantity_per_batch', 'integer')
//       .addColumn('source_book', 'varchar')
//       // 0 = common
//       // 1= uncommon
//       //2 = rare
//       .addColumn('rarity_value', 'integer')
//       .execute()
      

// //   await db.schema
// //     .createIndex('trait_index_id_index')
// //     .on('item_traits')
// //     .column('owner_id')
// //     .execute()
// // }
// }

// export async function down(db: Kysely<any>): Promise<void> {
//   await db.schema.dropTable('items').execute()
//   await db.schema.dropTable('traits').execute()
//   await db.schema.dropTable('item_traits').execute()
//   await db.schema.dropTable('system').execute()
// }