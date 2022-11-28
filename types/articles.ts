export interface ArticleListItem {
  title: string;
  articleLink: string;
  subscriberOnly: boolean;
  thumbnail?: Thumbnail;
}

export interface Thumbnail {
  url: string;
  altText: string;
}
