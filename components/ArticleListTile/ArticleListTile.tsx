import Image from "next/image";
import { ArticleListItem } from "../../types/articles";
import styles from "./ArticleListTile.module.css";

const ArticleListTile = ({
  article,
  isSignedIn = false,
}: {
  article: ArticleListItem;
  isSignedIn?: boolean;
}) => (
  <a
    href={
      !isSignedIn && article.subscriberOnly
        ? `/sign-in?redirect=${encodeURIComponent("/")}`
        : article.articleLink
    }
    className={styles.card}
  >
    {article.thumbnail && (
      <Image
        src={article.thumbnail.url}
        alt={article.thumbnail.altText}
        width={240}
        height={240}
      />
    )}
    <h2>{article.title}</h2>
    <label>
      {!isSignedIn && article.subscriberOnly ? "Members Only" : "Read More..."}
    </label>
  </a>
);

export default ArticleListTile;
