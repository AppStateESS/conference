import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Editor = ({content, update}) => {
  return <ReactQuill theme="snow" value={content} onChange={update} />
}

Editor.propTypes = {
  content: PropTypes.string,
  update: PropTypes.func,
}

export default Editor
