import { useState } from 'react';
import Link from 'next/link';
import keysLoader from '../utils/keysLoader';
import { getReq } from '../utils/xhr';
import Layout from '../components/Layout';
import FilterableKeysTable from '../components/keysTable/FilterableKeysTable';
import Button from '../components/Button';
import Surface from '../components/Surface';


export default function IndexPage({ serve, keys }) {
  const [serveState, setServeState] = useState(serve);
  const setServe = (name) => {
    setServeState(name);
    getReq(`/api/serve?name=${name}`);
  };

  return (
    <Layout>
      <Surface>
        <span>Serve now: </span>
        {serveState}
      </Surface>
      <FilterableKeysTable
        keys={keys}
        actions={key => (
          <div>
            <Link href={`/download?name=${key.name}`}><Button buttonStyle="text">files</Button></Link>
            <Button onClick={() => (setServe(key.name))}>Serve</Button>
          </div>
        )}
      />
    </Layout>
  );
}

IndexPage.getInitialProps = async ({ req }) => ({
  keys: await keysLoader(req, 'getKeyList'),
  search: '',
  serve: req && req.$currentServing,
});
