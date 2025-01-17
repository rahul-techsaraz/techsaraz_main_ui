import { blogData } from '../Constant/config/blogData';

export const extractBlogData = () => {
  const item = blogData.rss.channel.item;
  const blogDatas = item.map((blog, index) => {
    console.log({ blog });
    return {
      id: index + 1,
      heading: blog.title,
      paragraph: blog.encoded ? blog.encoded[0]?.cdata : '',
      readMoreLink: blog.link,
      categorie: blog.category?.cdata ? blog.category.cdata : '',
      author: blogData.rss.channel.title,
      date: blogData.rss.channel.pubDate,
    };
  });
  return blogDatas;
};
