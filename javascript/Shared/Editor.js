import React, {Component} from 'react'
import PropTypes from 'prop-types'
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'froala-editor/js/plugins.pkgd.min.js'

import FroalaEditor from 'react-froala-wysiwyg'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.config = {
      quickInsertEnabled: false,
      toolbarButtons: [
        'bold',
        'italic',
        'align',
        'formatOL',
        'formatUL',
        'outdent',
        'indent',
        'quote',
        'insertLink',
        'insertTable',
        'specialCharacters',
        'insertHR',
        'selectAll',
        'clearFormatting',
        'html'
      ]
    }
  }

  componentDidMount() {
    new FroalaEditor()
  }

  render() {
    return (
      <FroalaEditor
        tag="textarea"
        config={this.config}
        model={this.props.content}
        onModelChange={this.props.update}
      />
    )
  }
}

Editor.propTypes = {
  content: PropTypes.string,
  update: PropTypes.func,
  ident: PropTypes.string
}

export default Editor
