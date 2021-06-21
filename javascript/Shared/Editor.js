import React from 'react'
import PropTypes from 'prop-types'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './editor.css'

const Editor = ({content, update}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          'bold',
          'italic',
          'link',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'outdent',
          'indent',
          '|',

          'undo',
          'redo',
        ],
      }}
      data={content}
      onChange={(event, editor) => {
        const data = editor.getData()
        update(data)
      }}
    />
  )
}

Editor.propTypes = {
  content: PropTypes.string,
  update: PropTypes.func,
}

export default Editor
