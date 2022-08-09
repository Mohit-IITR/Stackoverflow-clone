import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import ListOfAnswers from '../components/ListOfAnswers';
import { ReactComponent as ArrowDown } from '../static/images/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../static/images/arrow-up.svg'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../static/css/ViewQuestion.css'

let createdTime = (question) => {
  return new Date(question.created_at).toDateString()
}

function ViewQuestion() {

  const [uploadAnswer, SetAnswer] = useState("")
  // const { id } = useParams();
  const location = useLocation();
  const question = location.state;
  console.log(question);

  const handleSubmit = (e) => {
    e.preventDefault()
   
  }

  return (
    <div className='container'>
      <h1>{question.title}</h1>
      <div className='row'>
        <div className='col'>Asked {createdTime(question)}</div>
        <div className='col'>Total views {question.views}</div>
      </div>
      <hr></hr>
      <div className='d-flex'>
        <div className='left-column'>
          <button><ArrowUp/></button>
          <div>{question.upvotes}</div>
          <button><ArrowDown/></button>
        </div>
        <div className='right-column'>
          <div className='question-body'>
            {question.body}
          </div>
          <div className='tags'>
            {question.tags.map(tag => (
              <div key={tag.id}>{tag.tag}</div>
            ))}
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='answer-div'>
        <h3>{question.answers.length} Answers</h3>
        {question.answers.map((answer) => (
                <ListOfAnswers key={answer.id} answer={answer} ></ListOfAnswers>
            ))}
      </div>
      <hr></hr>
      <div>
        <h2>Post your Answers</h2>
        <CKEditor
            editor={ClassicEditor}
            data={uploadAnswer}
            onChange={(event, editor) => {
              const data = editor.getData()
              console.log(event, editor, data)
              SetAnswer(data)
            }}
          />
        <button className='btn btn-primary' onClick={handleSubmit}>Post your Answer</button>
      </div>
    </div>
  )
}

export default ViewQuestion