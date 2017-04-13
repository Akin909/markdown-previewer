import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import marked from 'marked';
import { Container } from '../styled/general.js';
import highlight from 'highlight.js';
import emojis from 'emojilib';


const MarkdownInput = styled.textarea`
background: #FCEFEF;
width: 80%;
height: 30%;
margin: 1rem;
border: none;
box-shadow: 0px 1px 1px grey;
padding: 1rem;
font-size: 1.4rem;
`;
const MarkdownOutput = styled.div`
background: #FCEFEF;
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
    function tap(x){
      console.log('tapping', x);
      return x;
    }

    const markdown = tap(emojification(this.state));
    return { __html: markdown };
  }
  render() {
    return (
      <Container>
        <MarkdownInput  type="text" autoFocus value={this.state.value} onChange={this.handleChange} />
        <MarkdownOutput markdown dangerouslySetInnerHTML={this.renderMarkdown()} />
      </Container>
      );
  }
}
function emojification({value}) {
    let markdown = marked(value);
    if (value.includes(':')) {

      //Regexp to find characters inside colons
      const regEx = /(?:\:)\b(\w*)\b(?=\:)/g;
      let preEmoji = value.match(regEx);

      if (preEmoji) {
        preEmoji = preEmoji[0].substring(1);

        if (emojis.lib[preEmoji]) {

          // console.log(emojis.lib[preEmoji].char);
          const emoji = emojis.lib[preEmoji].char;
            markdown = markdown.replace(':'+ preEmoji, emoji);   
            return markdown;

        }
      }
    } 
      return markdown;
}

export default Previewer;
