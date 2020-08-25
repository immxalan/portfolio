import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(this.props.post).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown source={markdown} />;
  }
}

export default App;