import Head from 'next/head';
import Box from "@mui/material/Box";
import LoginForm from "@/components/Login/LoginForm";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {onAuthStateChanged, updateProfile, User} from "@firebase/auth";
import {auth} from "@/firebase/firebase";
import UserDetails from "@/components/Login/UserDetails";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User|null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
    return () => unsubscribe();
  }, [])

  return (
    <>
      <Head>
        <title>Reader</title>
        <meta name="description" content="E-Bookmark for all your favorite light novels and web novels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component={'main'} sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {!user && <LoginForm/>}
        {user && <UserDetails user={user} />}
      </Box>
    </>
  )
}
