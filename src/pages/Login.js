import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { Container, Title, PasswordInput, Button, Paper, TextInput } from '@mantine/core';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  console.log("LOG_n", email)
  console.log("pas=", pass)

  const authUser = () => {
    const auth = getAuth();
  
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user=", user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage=", errorMessage)
        // ..
      });
  
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Войти в аккаунт
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" onChange={(e) => setEmail(e.target.value)} placeholder="mail@gmail.com" required />
        <PasswordInput onChange={(e) => setPass(e.target.value)} label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl" onClick={() => authUser()}>
          Войти
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;