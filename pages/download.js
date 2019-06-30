import keysLoader from '../utils/keysLoader';
import Layout from '../components/Layout';


export default function DownloadList(props) {
    const link = index => ['download', props.keyObject.name, index].join('/');
    const parts = props.parts
        .map((part, index) => (<li key={part}><a href={link(index)}>{part}</a></li>));

    return <Layout>
        <h2>{props.keyObject.readableName}</h2>
        <ol start='0'>{parts}</ol>
    </Layout>;
}

DownloadList.getInitialProps = async ({ query, req, res }) => {
    const keyName = query.name;
    const key = await keysLoader(req, 'getKeyByName', keyName);
    const parts = await keysLoader(req, 'getParts', keyName);

    return { keyName, keyObject: key, parts };
};
