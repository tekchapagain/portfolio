import { GetStaticProps } from 'next';
import ThemeToggle from '../components/ThemeToggle';
import { getMarkdownContent } from '../lib/markdown';
import styles from '../styles/MarkdownPage.module.css'; // Create this file in the same directory

type Props = {
  title: string;
  contentHtml: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { title, contentHtml } = await getMarkdownContent('content.md'); // Adjust with your markdown file path
  return {
    props: {
      title,
      contentHtml,
    },
  };
};

const MarkdownPage = ({ title, contentHtml }: Props) => {
  return (
    <div className={styles.container}>
      <ThemeToggle />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default MarkdownPage;