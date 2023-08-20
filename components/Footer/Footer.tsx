/* eslint-disable max-len */
import { Container, Group, Anchor } from '@mantine/core';

// import Link from 'next/link';
import useStyles from './Footer.styles';

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function Footer({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
