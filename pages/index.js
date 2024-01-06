import Head from "next/head";
import React from "react";
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <Head>
        <title>Resume App with AI</title>
        <meta name="description" content="air Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Welcome</p>
    </div>
  );
}
