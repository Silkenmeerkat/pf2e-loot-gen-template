import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';


interface Items {
  item_id: number;
  img: string;
  name: string;
  system_id: number;
  type: string;
}

export default async function ItemsTable({ items }: { items: item[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>IMG</TableHeaderCell>
          <TableHeaderCell>system_id</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.item_id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>{item.img}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.system_id}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.type}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
