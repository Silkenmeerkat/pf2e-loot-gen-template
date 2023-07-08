import { Card, Title, Text } from '@tremor/react';
import { db } from '../lib/planetscale'
import Search from './search';
import ItemsTable from './table';
import { Items } from './table';
export const dynamic = 'force-dynamic';
import { createDataContents } from './table';
import { queryLevel } from './table';




export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  // const item: Items = await db
  //   .selectFrom('items')
  //   .innerJoin('system', 'items.system_id', 'system.system_id')
  //   .limit(20)
  //   .select(['items.item_id', 'items.img', 'items.name', 'items.system_id', 'items.type', 'system.bulk', 'system.price_gp_value', 'system.description_value', 'system.rarity_value', 'system.level_value', 'system.source_book'])
  //   .execute();
  await item : Items = queryLevel(1)
  //Get a seperate list that has the names of the 
  // const traits: traits = await db
  //   .selectFrom('item_traits')
  //   .select([item])

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Items</Title>
      <Text>
        A list of PF2e Items retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        <ItemsTable items ={ item } />
      </Card>
    </main>
  );
}