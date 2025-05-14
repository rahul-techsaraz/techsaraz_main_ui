import { blogData } from '../Constant/config/blogData';

export function extractBlogData() {
  const item = blogData.rss.channel.item;
  const blogDatas = item.map((blog, index) => {
    // console.log({ blog });
    return {
      id: index + 1,
      date: blogData.rss.channel.pubDate,
      categorie: blog?.category?.__cdata ? blog?.category?.__cdata : '',
      heading: blog.title,
      summary: 'Summary',
      paragraph: 'Paragraph',
      readMoreLink: blog.link,
      author: blogData.rss.channel.title,
    };
  });
  return blogDatas;
}
