import type { ColumnType } from "kysely";
import 'server-only';
import { PlanetScaleDialect } from 'kysely-planetscale';

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Items {
  item_id: Generated<number>;
  img: string | null;
  name: string | null;
  system_id: number | null;
  type: string | null;
}

export interface ItemTraits {
  item_id: number;
  trait_id: number;
}

export interface System {
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

export interface Traits {
  trait_id: Generated<number>;
  trait_name: string | null;
}

export interface DB {
  item_traits: ItemTraits;
  items: Items;
  system: System;
  traits: Traits;
}