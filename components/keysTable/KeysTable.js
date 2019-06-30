import KeyRow from './KeyRow';
import css from 'styled-jsx/css';

const tableStyle = css`
    table {
        padding: 1rem;
    }

    th {
        text-align: left;
        text-transform: uppercase;
        padding: .3rem;
        color: #aaa;
    }
`;

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
        <style jsx>{tableStyle}</style>
        <thead>
            <tr>
                <th>name</th>
            </tr>
        </thead>
        <tbody>
            {fkeys}
        </tbody>
    </table>;
}