import 'server-only';
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

export interface Items {
  item_id: Generated<number>;
  img: string | null;
  name: string | null;
  system_id: Generated<number>;
  type: string | null;
}

interface ItemTraits {
  item_id: number;
  trait_id: number;
}

interface System {
  system_id: number;
  description_value: string | null;
  bulk: number | null;
  level_value: number | null;
  precious_material_value: string | null;
  precious_material_grade_value: string | null;
  price_gp_value: number | null;
  quantity_per_batch: number | null;
  source_book: string | null;
  rarity_value: string | null;
}
interface Traits {
  trait_id: Generated<number>;
  trait_name: string | null;
}

interface DB {
  item_traits: ItemTraits;
  items: Items;
  system: System;
  traits: Traits;
}

export const queryBuilder = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL
  })
});