import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TextArea from './text_area.js';



/**
 * React-redux class component to render markdown
 *
 * @extends {Component}
 */
class Previewer extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextArea />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Previewer);
