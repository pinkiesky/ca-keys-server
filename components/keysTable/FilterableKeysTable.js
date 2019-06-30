import KeysTable from './KeysTable';
import { useState } from 'react'
import TextInput from '../TextInput';


export default function FilterableKeysTable({ keys, actions }) {
    const [filter, setFilter] = useState('');

    return <div>
        <TextInput name='name' placeholder='Search by name' onChange={ev => setFilter(ev.target.value)}/>
        <KeysTable keys={keys} filter={filter} actions={actions}/>
    </div>
}