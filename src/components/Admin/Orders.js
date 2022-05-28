import React, {useState, useEffect} from "react";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { Pencil, Trash } from 'tabler-icons-react';

import {Container} from '../Auth/AuthComponents';
import {getOrders} from '../../api/firebase';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders)
  // addDoc()
  const theme = useMantineTheme();

  useEffect(async () => {
    setOrders(await getOrders());
  }, []);

  const rows = orders.map((item) => {
    const items = [];
    item.products.forEach(i => {items.push(i.name)});

    return (<tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Text size="sm" color="gray">
          {item.address}
        </Text>
      </td>
      <td>
        <Badge
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        >
          {item.status}
        </Badge>
      </td>
      <td>
        <Anchor size="sm" href="#" onClick={(event) => event.preventDefault()}>
          {item.email}
        </Anchor>
      </td>
      <td>
        <Text size="sm" color="gray">
          {item.phone}
        </Text>
      </td>
      <td>
        <Text size="sm" color="gray">
          {items.join(', ')}
        </Text>
      </td>
      <td>
        <Text size="sm" color="gray">
          {item.cost}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <Pencil size={16} />
          </ActionIcon>
          <ActionIcon color="red">
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  )});

  return (
    <Container>
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Заказчик</th>
              <th>Адрес</th>
              <th>Статус заказа</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Товары</th>
              <th>Стоимость</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 && rows}
          </tbody>
        </Table>
      </ScrollArea>
    </Container>
  );
}

export default Orders;
