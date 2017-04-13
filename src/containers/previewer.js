import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import marked from 'marked';
import { Container } from '../styled/general.js';
import highlight from 'highlight.js';
// import pygments from 'pygmentize-bundled';


const MarkdownInput = styled.textarea`
  width: 80%;
  height: 30%;
  margin: 1rem;
  border: none;
  box-shadow: 0px 1px 1px grey;
  padding: 1rem;
  font-size: 1.4rem;
`;
const MarkdownOutput = styled.div`
  font-size: 1.4rem;
  padding: 1rem;
  width: 80%;
  background: ${ props => props.markdown ? 'white' : '#A1FCDF' };
  height: 30%;
  overflowY: auto;
  margin: 1rem;
  box-shadow: 0px 1px 1px grey;
`;



class Previewer extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };


  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event){
    this.setState({
      value: event.target.value,
    });
    console.log('state of input', this.state.value);
  }

  handleSubmit(event){
    event.preventDefault();
  }

  renderMarkdown(){
    marked.setOptions({
      highlight: (code) => {
        return highlight.highlightAuto(code).value;
      },
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: true,
      smartypants: true,
    });
    const markdown = marked( this.state.value ); 
    return { __html: markdown };
  }
  render() {
    return (
      <Container>
        <MarkdownInput  type="text" value={this.state.value} onChange={this.handleChange} />
        <MarkdownOutput markdown dangerouslySetInnerHTML={this.renderMarkdown()} />
      </Container>
    );
  }
}

export default Previewer;
