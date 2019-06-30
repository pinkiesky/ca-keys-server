import KeysTable from './KeysTable';
import { useState } from 'react'


export default function FilterableKeysTable({ keys, actions }) {
    const [filter, setFilter] = useState('');

    return <div>
        <div><input name='name' placeholder='Search by name' onChange={ev => setFilter(ev.target.value)}/></div>
        <KeysTable keys={keys} filter={filter} actions={actions}/>
    </div>
}