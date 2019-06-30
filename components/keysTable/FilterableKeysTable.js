import { useState, Fragment } from 'react';
import KeysTable from './KeysTable';
import TextInput from '../TextInput';
import withSurface from '../withSurface';


function FilterableKeysTable({ keys, actions }) {
  const [filter, setFilter] = useState('');

  return (
    <Fragment>
      <TextInput name="name" placeholder="Search by name" onChange={ev => setFilter(ev.target.value)} />
      <KeysTable keys={keys} filter={filter} actions={actions} />
    </Fragment>
  );
}

export default withSurface(FilterableKeysTable);
