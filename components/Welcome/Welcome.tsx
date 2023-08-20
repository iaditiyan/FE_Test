/* eslint-disable max-len */
import { Title, Text, Anchor, Container } from '@mantine/core';
import useStyles from './Welcome.styles';
import { HeaderCustom } from '../HeaderCustom/HeaderCustom';
import { Footer } from '../Footer/Footer';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
    <HeaderCustom links={[{
      link: '/about',
      label: 'Features',
    },
    {
      link: '/pricing',
      label: 'Pricing',
    },
    {
      link: '/learn',
      label: 'Learn',
    },
    {
      link: '/community',
      label: 'Community',
    }]}
    />
      <Container>
        <Title className={classes.title} align="center" mt={100}>
            Welcome to{' '}
            <Text inherit variant="gradient" component="span">
              Mantine
            </Text>
        </Title>
        <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          This starter Next.js project includes a minimal setup for server side rendering, if you want
          to learn more on Mantine + Next.js integration follow{' '}
          <Anchor href="https://mantine.dev/guides/next/" size="lg">
            this guide
          </Anchor>
          . To get started edit index.tsx file.
        </Text>
      </Container>
      <Footer links={[{
      link: '#',
      label: 'Contact',
    },
    {
      link: '#',
      label: 'Privacy',
    },
    {
      link: '#',
      label: 'Blog',
    },
    {
      link: '#',
      label: 'Careers',
    }]}
      />
    </>
  );
}
