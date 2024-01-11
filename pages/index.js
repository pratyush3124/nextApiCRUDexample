import { useEffect, useState } from "react";

export default function Home() {

  const [qno, setQno] = useState(-1)

  const sendAnswer = () => {
    // send answer to backend
    // /api/quiz/answer POST.
  }

  const getQuestionNumber = () => {
    // get question number & end Time from backend
    fetch('/api/quiz/questionNo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log('data', data)
          setQno(data.questionNo)
        })
      } else {
        console.log('error')
      }
    })
  }

  useEffect(() => {
    getQuestionNumber()
  }, [])

  // from backend
  const question = [{
    question: 'q1',
    options: ['op1', 'op2', 'op3', 'op4'],
  }, {
    question: 'q2',
    options: ['op1', 'op2', 'op3', 'op4'],
  }]

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        {/* mcq quiz */}
        <h1 className="text-4xl font-bold">{question[qno]?.question}</h1>
        {/* <form onSubmit={()=>{console.log('asdf')}}> */}
        <div>

          {question[qno]?.options?.map(el=>{
            return <div>
              <input type="radio" />
              <label> {el} </label>
            </div>
          })}

        <button onClick={()=>{sendAnswer()}} > Next </button>
        </div> 
        {/* </form> */}

      </div>
    </main>
  )
}
