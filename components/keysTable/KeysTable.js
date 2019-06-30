import css from 'styled-jsx/css';
import KeyRow from './KeyRow';

const tableStyle = css`
th {
  text-align: left;
  text-transform: uppercase;
  padding: .3rem;
  color: #aaa;
}
`;

export default function KeysTable({ keys, filter, actions }) {
  function checkKey(key, search) {
    const slc = search.toLowerCase();
    return !slc.length
      || key.name.toLowerCase().includes(slc)
      || key.readableName.toLowerCase().includes(slc);
  }

  const fkeys = keys
    .filter(key => checkKey(key, filter))
    .map(key => <KeyRow key={key.name} keyObj={key} actions={actions} />);

  return (
    <table>
      <style jsx>{tableStyle}</style>
      <tbody>
        {fkeys}
      </tbody>
    </table>
  );
}
