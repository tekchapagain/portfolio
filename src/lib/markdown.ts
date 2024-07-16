import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const markdownDirectory = path.join(process.cwd(), 'markdown');

export async function getMarkdownContent(filename: string) {
  const fullPath = path.join(markdownDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    title: matterResult.data.title,
    contentHtml,
  };
}
