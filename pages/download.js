import keysLoader from '../utils/keysLoader';
import Layout from '../components/Layout';


export default function DownloadList(props) {
    const link = index => ['download', props.keyObject.name, index].join('/');
    const parts = props.parts
        .map((part, index) => (<li key={part}>{part}<a href={link(index)}>Download</a></li>));

    return <Layout>
        <h2>{props.keyObject.readableName}</h2>
        <ul>{parts}</ul>
    </Layout>;
}

DownloadList.getInitialProps = async ({ query, req, res }) => {
    const keyName = query.name;
    const key = await keysLoader(req, 'getKeyByName', keyName);
    const parts = await keysLoader(req, 'getParts', keyName);

    return { keyName, keyObject: key, parts };
};
