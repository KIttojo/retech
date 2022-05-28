import React from 'react';
import {
  createStyles,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import logo from '../../Assets/logoWhite.png';

import {Logo as LogoContainer} from './AdminComponents';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));


export function HeaderAction({activeTab, setActiveTab}) {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
        <LogoContainer to="#">
          <img
            src={logo}
            alt="logo"
          />
        </LogoContainer>
        </Group>
        <Group spacing={5} className={classes.links}>
          <div onClick={() => setActiveTab('Заказы')}>
            <Center>
              <span className={classes.link}>{'Заказы'}</span>
            </Center>
          </div>
          <div onClick={() => setActiveTab('Заявки на вывоз')}>
            <Center>
              <span className={classes.link}>{'Заявки на вывоз'}</span>
            </Center>
          </div>
        </Group>
        <Button radius="xl" sx={{ height: 30 }}>
          Выход
        </Button>
      </Container>
    </Header>
  );
}