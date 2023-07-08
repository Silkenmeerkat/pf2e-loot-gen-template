import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import main_handler from '../pages/api/item-gen/item-gen';
import { get } from 'https';
import { createDeflateRaw } from 'zlib';

import { db } from '../lib/planetscale'
import { sql } from 'kysely';


export interface Items {
  item_id: number;
  img: string;
  name: string;
  system_id: number;
  type: string;
  traits: string[];
  price_gp_value: number;
  bulk: string;
  rarity_value: string;
  source_book: string;
  level_value: string;
  description_value: string; 
}

export default async function ItemsTable({ items }: { items: Items[] }) {
  return
    (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Value</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Level</TableHeaderCell>
          <TableHeaderCell>Traits</TableHeaderCell>
          <TableHeaderCell>Rarity</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.item_id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>{item.traits}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.price_gp_value}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.bulk}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.rarity_value}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.level_value}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.source_book}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.type}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.description_value}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export async function createDataContents(level:number,party:number){
  let baseGoldPerLevel = new Map<number, number>(); 
baseGoldPerLevel.set(1, 175)
baseGoldPerLevel.set(2, 300)
baseGoldPerLevel.set(3,500)
baseGoldPerLevel.set(4,800)
baseGoldPerLevel.set(5,1350)
baseGoldPerLevel.set(6,2000)
baseGoldPerLevel.set(7,2900)
baseGoldPerLevel.set(8,4000)
baseGoldPerLevel.set(9,5700)
baseGoldPerLevel.set(10,8000)
baseGoldPerLevel.set(11,11500)
baseGoldPerLevel.set(12,16500)
baseGoldPerLevel.set(13,25000)
baseGoldPerLevel.set(14,36500)
baseGoldPerLevel.set(15,54500)
baseGoldPerLevel.set(16,82500)
baseGoldPerLevel.set(17,128000)
baseGoldPerLevel.set(18,208000)
baseGoldPerLevel.set(19,355000)
baseGoldPerLevel.set(20,490000)

//Additional Gold
let additionalGoldPerLevel = new Map<number, number>();
baseGoldPerLevel.set(1, 10)
baseGoldPerLevel.set(2, 18)
baseGoldPerLevel.set(3,30)
baseGoldPerLevel.set(4,50)
baseGoldPerLevel.set(5,80)
baseGoldPerLevel.set(6,125)
baseGoldPerLevel.set(7,180)
baseGoldPerLevel.set(8,250)
baseGoldPerLevel.set(9,350)
baseGoldPerLevel.set(10,500)
baseGoldPerLevel.set(11,700)
baseGoldPerLevel.set(12,1000)
baseGoldPerLevel.set(13,1500)
baseGoldPerLevel.set(14,2250)
baseGoldPerLevel.set(15,3250)
baseGoldPerLevel.set(16,5000)
baseGoldPerLevel.set(17,7500)
baseGoldPerLevel.set(18,12000)
baseGoldPerLevel.set(19,20000)
baseGoldPerLevel.set(20,35000)

  switch (level) {
    case 1:
      //Level 1
      //Permenant Items: 2 level +1, 2 level
      //consumables: 2 level 2, 3 1st level
      //9 total items expected + gold      
      break;
    case 2: 
      //potency rune 1 4319
      break; 
    case 4:
      //Striking rune 3684 is one of level items
      break;
    case 5:
      //armor potency 308
      break; 
    case 8:
      //Resilency 2923
      break;
    case 10:
      //potency +2 4320 
      break;
    case 11:
      //armor potency +2 309

      break;
    case 12:
      //greater striking 3681
      break;
    case 14:
      //Resilency 2921
      break; 
    case 16:
      //potency rune +3 Weapon 4321
      break;
    case 18:
      //armor potency +3 310
    case 19:
      //major striking 3682
      break;
    case 20:
      //level 20 
      //perm: 4 level 20
      //Consumeable: 4 level 20, 2 level 19th 
      //Resilency 2922
    break; 
    
    default:
      break;
  }
}

export async function queryLevel(level:number, exclusions?: string[], forcedItems?:number[]){
  const response: Items = await db
    .selectFrom('items')
    .select(
      // If you use `sql` in a select statement, remember to call the `as`
      // method to give it an alias.
      sql<string>`group_concat(traits.trait_name)`.as('all_traits')
    )
    .leftJoin('system', 'items.system_id' ,'system.system_id')
    .innerJoin('item_traits', 'items.item_id', 'item_traits.item_id')
    .rightJoin('traits', 'item_traits.trait_id', 'traits.trait_id')
    .where('system.level_value', '=', level)
  //const item: Items = 
  console.log(response.item_id)

  return response


  //query for level - exclusions
    //   .selectFrom('items')
  //   .innerJoin('system', 'items.system_id', 'system.system_id')
  //   .limit(20)
  //   .select(['items.item_id', 'items.img', 'items.name', 'items.system_id', 'items.type', 'system.bulk', 'system.price_gp_value', 'system.description_value', 'system.rarity_value', 'system.level_value', 'system.source_book'])
  //   .execute();
}




