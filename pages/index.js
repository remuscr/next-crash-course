import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev</title>
        <meta name="keywords" content="web development, programing" />
      </Head>

      <ArticleList articles={articles} />
      <h1>Welcome to my site</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};
