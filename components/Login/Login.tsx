/* eslint-disable max-len */
import {
    Image,
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
  } from '@mantine/core';
  import Link from 'next/link';
  import image from '../../assets/logoFull.png';
  import useStyles from './Login.styles';
  import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

  export function Login() {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
          <Paper className={classes.form} radius={0} p={30}>
            <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                <Image src={image.src} className={classes.image} />
            </Title>

            <ColorSchemeToggle />

            <TextInput label="Username" placeholder="hello@gmail.com" size="md" />
            <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
            <Link href="/welcome" passHref>
                <Button fullWidth mt="xl" size="md">Login</Button>
            </Link>

          </Paper>
        </div>
      );
  }
