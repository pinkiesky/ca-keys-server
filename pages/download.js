import keysLoader from '../utils/keysLoader';
import Layout from '../components/Layout';


export default function DownloadList({ parts, keyObject }) {
  const link = index => ['download', keyObject.name, index].join('/');
  const partsLi = parts
    .map((part, index) => (<li key={part}><a href={link(index)}>{part}</a></li>));

  return (
    <Layout>
      <h2>{keyObject.readableName}</h2>
      <ol start="0">{partsLi}</ol>
    </Layout>
  );
}

DownloadList.getInitialProps = async ({ query, req }) => {
  const keyName = query.name;
  const key = await keysLoader(req, 'getKeyByName', keyName);
  const parts = await keysLoader(req, 'getParts', keyName);

  return { keyName, keyObject: key, parts };
};
