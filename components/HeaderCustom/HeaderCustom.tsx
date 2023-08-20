/* eslint-disable max-len */
import { useState } from 'react';
import { Image, Header, Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantine/ds';
import Link from 'next/link';
import image from '../../assets/logoFull.png';
import useStyles from './HeaderCustom.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function HeaderCustom({ links }: HeaderSimpleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
      <Image src={image.src} width={200} />
        {/* <MantineLogo size={28} /> */}
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <ColorSchemeToggle />

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
}
