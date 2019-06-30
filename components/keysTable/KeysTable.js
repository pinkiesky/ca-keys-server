import KeyRow from './KeyRow';
import List from '../list';


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

  return (<List>{fkeys}</List>);
}
