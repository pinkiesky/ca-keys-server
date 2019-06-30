import { useState } from 'react';
import KeysTable from './KeysTable';
import TextInput from '../TextInput';


export default function FilterableKeysTable({ keys, actions }) {
  const [filter, setFilter] = useState('');

  return (
    <div className="filterableKeys">
      <TextInput name="name" placeholder="Search by name" onChange={ev => setFilter(ev.target.value)} />
      <KeysTable keys={keys} filter={filter} actions={actions} />
      <style jsx>
        {`
          .filterableKeys {
            padding: 12px;
            border: 1px solid #aaa;
            border-radius: 3px;
            background: white;
          }
      `}
      </style>
    </div>
  );
}
