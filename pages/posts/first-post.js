import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(
            `script loaded correctly, window.FB has been populated ${window.FB}`
          )
        }
        onReady={() => console.log(`script is ready`)}
      />
      <h1>First Post</h1>
      <Image
        src="/images/keyboard.png" // Route of the image file
        height={75} // Desired size with correct aspect ratio
        width={256} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
