import { ArticleListItem, Thumbnail } from "../types/articles";

export const mapDataToArticleListItems = (data: any) => {
  const articles: ArticleListItem[] = [];

  if (data?.results) {
    for (const result of data.results) {
      if (!canDeriveArticleListItemFromResult(result)) {
        continue;
      }

      const articleListItem: ArticleListItem = {
        title: result.title,
        articleLink: `/article/${result.slug}`,
        subscriberOnly: result.subscriberOnly ?? false,
      };
      const thumbnail = mapResultToThumbnail(result);

      if (thumbnail) {
        articleListItem.thumbnail = thumbnail;
      }

      articles.push(articleListItem);
    }
  }

  return articles;
};

// The result data must contain title and slug props
const canDeriveArticleListItemFromResult = (result: any): boolean =>
  result.title && result.slug;

// Can get thumbnail if result has sections has an array, which contains at least
// one object that has an image prop.
// The image prop is an array of objects with url.
// The imageMetadata is an array of objects of altText.
const mapResultToThumbnail = (result: any): Thumbnail | undefined => {
  if (!Array.isArray(result.sections)) {
    return undefined;
  }

  const sectionWithImage = result.sections.find(
    (section: any) =>
      section.image && Array.isArray(section.image) && section.image.length
  );

  if (!sectionWithImage) {
    return undefined;
  }

  return {
    url: sectionWithImage.image[0].url,
    altText: sectionWithImage.imageMetadata[0].altText ?? "Thumbnail Image",
  };
};
