import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-monokai";
import {LinearProgress} from "@material-ui/core";
import EmailEditor from 'react-email-editor';

class Editor extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.onEditorChange = this.onEditorChange.bind(this)
  }

  onEditorChange(newValue) {
    //ReactDOM.findDOMNode(this.myRef.current).innerHTML = newValue
  }

  render() {
    if (this.props.memory.object === "") {
        return <LinearProgress />;
    } else {
        return (
          <EmailEditor
            ref={editor => this.editor = editor}
          />
        );
    };
  }
}


Editor.propTypes = {
  collapsed: PropTypes.bool
};
Editor.defaultProps = {
  collapsed: false
};

function mapStateToProps(state) {
    return {
        memory: state.memory
    }
}

export default connect(mapStateToProps)(Editor);
