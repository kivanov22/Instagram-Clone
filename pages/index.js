import Head from "next/head";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Feed */}

      {/*Modal*/}
      <h1>Instagram</h1>
    </div>
  );
}
