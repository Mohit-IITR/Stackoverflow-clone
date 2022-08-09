import React, { useState,useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser'
import { Form, Button } from 'react-bootstrap'
import '../static/css/QuestionForm.css'

function QuestionForm() {
  const [values, setValues] = useState({
    title: "",
    body: "",
    tags: [],
    tagfield: ""
  })
  useEffect(() => {
    console.log(values)
  },[values])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onKeyDown = (e) => {
    const { key } = e
    const trimmedInput = values.tagfield.trim() //remove whitespace from both side

    if (key === ' ' && trimmedInput.length && !values.tags.includes(trimmedInput) && values.tags.length < 5) {
      e.preventDefault()
      setValues({ ...values, tagfield: '', tags: [...values.tags, trimmedInput]})
    }

    if (key === "Backspace" && !values.tagfield.length && values.tags.length) {
      e.preventDefault()
      const tagsCopy = [...values.tags]
      const poppedTag = tagsCopy.pop()
      console.log(tagsCopy,poppedTag)
      setValues({ ...values, tagfield: poppedTag, tags: [...tagsCopy] })
    }

  }

  const deleteTag = (index) => {
    setValues({ ...values, tags: values.tags.filter((tag, i) => i !== index) })
  }

  return (
    <div className='container'>
      <h2>Ask a public quesiton</h2>
      <div className='form'>
        <Form>
          <label>Title</label>
          <Form.Control type="text" placeholder="title" name="title" value={values.title}
            onChange={(event) => setValues({ ...values, title: event.target.value })} />

          <label>Body</label>
          <CKEditor
            editor={ClassicEditor}
            data={values.body}
            onChange={(event, editor) => {
              const data = editor.getData()
              // console.log(event, editor, data)
              setValues({ ...values, body: (data) })
            }}
          />

          <label>Tags</label>
          <p>You can add upto 5 tags</p>
          <div className='containerTag'>
            {values.tags.map((tag, index) => (
              <div className='tag' key={index}>
                {tag}
                <button onClick={(e) => {
                  e.preventDefault()
                  deleteTag(index)
                }}>x</button>
              </div>
            ))}
            <input type="text" placeholder="tag" name="tag" value={values.tagfield}
              onChange={(event) => setValues({ ...values, tagfield: event.target.value })}
              onKeyDown={onKeyDown} />
          </div>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default QuestionForm