import KeyRow from './KeyRow';


export default function KeysTable({ keys, filter, actions }) {
    function checkKey(key, search) {
        search = search.toLowerCase();
        return !search.length || 
          key.name.toLowerCase().includes(search) || 
          key.readableName.toLowerCase().includes(search);
    }
    
    const fkeys = keys
        .filter(key => checkKey(key, filter))
        .map(key => <KeyRow key={key.name} keyObj={key} actions={actions} />);

    return <table>
        <thead>
            <tr>
                <th>name</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            {fkeys}
        </tbody>
    </table>;
}