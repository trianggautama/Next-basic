import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
const index = () => {
  return (
    <div>
      <Head>
        <title>
          Course | Home
        </title>
      </Head>
      <Fragment>
        <section class="p-1 space-y-2">
          <h1 className="font-bold text-blue-400">Home</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Image src="/1.jpg" alt="desc"  width="100vw" height="100%" quality="100" layout="responsive" objectFit="fill" objectPosition="center center"/>
          <br></br>
          <a>Google Link</a>
        </section>
      </Fragment>
    </div>
  );
}

export default index;