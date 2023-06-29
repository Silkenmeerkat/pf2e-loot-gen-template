import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../lib/planetscale';
import Search from './search';
import ItemsTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const items = await queryBuilder
    .selectFrom('items')
    .select(['item_id', 'img', 'name', 'system_id', 'type'])
    .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Items</Title>
      <Text>
        A list of PF2e Items retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        <ItemsTable items={items} />
      </Card>
    </main>
  );
}