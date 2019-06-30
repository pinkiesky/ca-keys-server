import css from 'styled-jsx/css';

const rowStyle = css`
  td {
    padding: .3rem;
  }

  tr:hover {
    background-color: #f9f9f9;
  }
`;

export default function KeyRow({ keyObj, actions }) {
  return (
    <tr>
      <td>{keyObj.readableName}</td>
      <td>{actions(keyObj)}</td>
      <style jsx>{rowStyle}</style>
    </tr>
  );
}
