import { useState } from 'react';
import Link from 'next/link';
import keysLoader from '../utils/keysLoader';
import { getReq } from '../utils/xhr';
import Layout from '../components/Layout';
import FilterableKeysTable from '../components/keysTable/FilterableKeysTable';
import Button from '../components/Button';


export default function IndexPage({ serve, keys }) {
  const [serveState, setServeState] = useState(serve);
  const setServe = (name) => {
    setServeState(name);
    getReq(`/api/serve?name=${name}`);
  };

  return (
    <Layout>
      <div>
        <span>Serve now: </span>
        {serveState}
      </div>
      <FilterableKeysTable
        keys={keys}
        actions={key => (
          <div>
            <Link href={`/download?name=${key.name}`}><Button>Download</Button></Link>
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
