import React from 'react'
import { ReactComponent as ArrowDown } from '../static/images/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../static/images/arrow-up.svg'

function ListOfAnswers({answer}) {
  return (
    <div className='d-flex'>
        <div className='left-column'>
          <button><ArrowUp/></button>
          <div>{answer.upvotes}</div>
          <button><ArrowDown/></button>
        </div>
        <div className='right-column'>
          <div class='answer-body'>
            {answer.body}
          </div>
        </div>
      </div>
  )
}

export default ListOfAnswers