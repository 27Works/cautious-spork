import Head from "next/head";
import Image from "next/image";
import { useContext, MouseEvent } from "react";
import ArticleListTile from "../components/ArticleListTile/ArticleListTile";
import styles from "../styles/Home.module.css";
import { ArticleListItem } from "../types/articles";
import { getPosts } from "../untils/api";
import { mapDataToArticleListItems } from "../untils/dataMapper";
import { signOut } from "../untils/auth";
import AuthContext from "../contexts/authContext";

export default function Home({ articles }: { articles: ArticleListItem[] }) {
  const authContext = useContext(AuthContext);
  const isSignedIn = !!authContext.user;

  const handleSignOut = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Articles Today</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.signOut}>
        {isSignedIn && (
          <a href="#" onClick={handleSignOut}>
            Sign Out
          </a>
        )}
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>Articles Today</h1>
        <div className={styles.grid}>
          {articles.map((article, index) => (
            <ArticleListTile
              article={article}
              isSignedIn={isSignedIn}
              key={index}
            />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const data = await getPosts();
  const articles = mapDataToArticleListItems(data);

  console.log(articles);

  return { props: { articles } };
}