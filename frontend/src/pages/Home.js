import React, { useState, useEffect } from 'react'
import  { Navigate,Link, useNavigate } from 'react-router-dom'
import ListOfQuestions from '../components/ListOfQuestions';

function Home() {
    let [questions, setQuestions] = useState([])
    let [user, setUser] = useState("")
    let Navigate = useNavigate()
    
    useEffect(() => {
        if(!localStorage.getItem("token")){
            Navigate("/login")
        }
        
    })
    useEffect(() => {
        const getQuestions = async () => {
            try {
                const response = await fetch("/api/questions/profile");
                const data = await response.json();
                console.log(data)
                setQuestions(data)
            } catch (error) {
                console.log("error", error);
            }
        }
        getQuestions()
    }, [])
    
    return (
        <>
        <div className="container row my-5 ms-3">
            <h3 className='col-10'> Top Questions </h3>
            <div className='col-2'>
            <Link to="/question/ask">
            <button className='button btn-primary'> Ask a question</button>
            </Link>
            </div>
        </div>
        <div className="container">
            {questions.map((question) => (
                <ListOfQuestions key={question.id} question={question} ></ListOfQuestions>
            ))}
        </div>
        </>
    )
}

export default Home