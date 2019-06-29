import { useEffect, useState, useRef } from 'react'
import Link from 'next/link';
import keysLoader from '../utils/keysLoader';
import { getReq } from '../utils/xhr';


export default function IndexPage(props) {
  function checkKey(key, search) {
    search = search.toLowerCase();
    return !search.length || 
      key.name.toLowerCase().includes(search) || 
      key.readableName.toLowerCase().includes(search);
  }

  const [keys, setKeys] = useState([]);
  const [search, setSearch] = useState('');
  const [serve, setServe] = useState(props.serve);

  const sendServe = () => getReq(`/api/serve?name=${serve}`);

  useEffect(() => {
    const keys = props.keys
      .filter((key) => checkKey(key, search))
      .map((key) => (<li key={key.name}>
          {key.readableName}
          <Link href={'/download?name=' + key.name}>Download</Link>
          <button onClick={() => (setServe(key.name),sendServe())}>Serve</button>
        </li>));
    setKeys(keys);
  }, [search]);

  return <div>
    <div>Serve now: {serve}</div>
    <input type='text' onChange={event => setSearch(event.target.value)}/>
    <ul>{keys}</ul>
  </div>;
}

IndexPage.getInitialProps = async ({ req }) => {
    return { 
      keys: await keysLoader(req, 'getKeyList'),
      search: '',
    };
};
