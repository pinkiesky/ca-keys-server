import { ListItem } from '../list';


export default function KeyRow({ keyObj, actions }) {
  return (
    <ListItem>
      <div style={{ flex: '1' }}>{keyObj.readableName}</div>
      <div style={{ flex: '0 0 auto' }}>{actions(keyObj)}</div>
    </ListItem>
  );
}
