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
  Select
} from '@mantine/core';
import { Pencil, Trash } from 'tabler-icons-react';

import {Container} from '../Auth/AuthComponents';
import {getRequests, updateRequest} from '../../api/firebase';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  // addDoc()
  const theme = useMantineTheme();

  useEffect(async () => {
    const res = await getRequests();
    setRequests(res);
  }, []);

  const update = async (id, status) => {
    await updateRequest(id, status);
    const res = await getRequests();
    setRequests(res);
  }



  const rows = requests.map((item) => {
    return (<tr key={item.id}>
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
          {item.category}
        </Text>
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
          {item.phone}
        </Anchor>
      </td>
      <td>
        <Text size="sm" color="gray">
          {item.description}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <Pencil size={16} onClick={() => update(item.id, item.status)}/>
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
              <th>Название</th>
              <th>Адрес</th>
              <th>Статус заказа</th>
              <th>Телефон</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 && rows}
          </tbody>
        </Table>
      </ScrollArea>
    </Container>
  );
}

export default Requests;
