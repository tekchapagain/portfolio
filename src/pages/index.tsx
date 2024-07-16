import { GetStaticProps } from 'next';
import ThemeToggle from '../components/ThemeToggle';
import { getMarkdownContent } from '../lib/markdown';
import styles from '../styles/markdownpage.module.css'; 

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
    <div className={styles.pageContainer}>
    <div className={styles.contentContainer}>
      <ThemeToggle />
      <div className='test'>
      <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
    </div>
  );
};

export default MarkdownPage;
