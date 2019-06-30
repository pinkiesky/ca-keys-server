export default function KeyRow({ keyObj, actions }) {
    return <tr>
        <td>{keyObj.readableName}</td>
        <td>{actions(keyObj)}</td>
    </tr>;
}