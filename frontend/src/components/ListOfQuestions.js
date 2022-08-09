import React from 'react'
import  { Link } from 'react-router-dom'

let createdTime = (question) => {
    return new Date(question.created_at).toDateString()
}

function ListOfQuestions({ question }) {
    return (
        <div className="row m-3">
            <div className="col-2">
                <p className=" m-1">upvotes {question.upvotes}</p>
                <p className=" m-1">answers {question.answers.length}</p>
                <p className=" m-1">views {question.views}</p>
            </div>
            <div className="col-7">
                <Link to={`/question/${question.id}`} state={question}
                ><h3>{question.title}</h3>
                </Link>
                <p>{question.body}</p>
                <p>{question.tags.map((tag) => 
                    <span className="border border-primary rounded ms-0 m-2 p-1 bg-primary bg-opacity-10" key={tag.id}> {tag.tag} </span>)}</p>
            </div>
            <div className='col-3'>
                <p>{question.user.username}</p>
                <p>{createdTime(question)}</p>
            </div>
            <hr></hr>

        </div>
    )
}

export default ListOfQuestions