import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';


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
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Traits</TableHeaderCell>
          <TableHeaderCell>Value (GP)</TableHeaderCell>
          <TableHeaderCell>Bulk</TableHeaderCell>
          <TableHeaderCell>Rarity</TableHeaderCell>
          <TableHeaderCell>level</TableHeaderCell>
          <TableHeaderCell>sourcebook</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
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
