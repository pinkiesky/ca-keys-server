import React from 'react'
import Link from 'next/link'
import ListDir from '../components/ListDir';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  static async getInitialProps({ req }) {
    return { 
      keys: await req.$keys.getInfoList(),
      search: '',
    };
  }

  handleSearchInput(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const keys = this.props.keys
      .filter((key) => !this.state.search.length || key.name.includes(this.state.search))
      .map((key) => (<li key={key.name}>{key.isLegacy ? key.name : key.meta.name} <a href={'download/' + key.name}>Download</a></li>));

    return <div>
      <input type='text' onChange={this.handleSearchInput.bind(this)}/>
      <ul>{keys}</ul>
    </div>;
  }
}
