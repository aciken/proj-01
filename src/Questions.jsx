import './questions.css'


export function Questions() {



    const handleQuestionClick = (e) => {
        const questionList = document.querySelectorAll('.sign')
        e.preventDefault();
        console.log(e.target.innerText)

        if(e.target.innerText === '+' || e.target.innerText === '-'){
            if(e.target.innerText === '+'){ 
                questionList.forEach((li) => {
                    li.innerText = '+';
                })
            e.target.innerText = '-';
        }else {
            e.target.innerText = '+';
        }

        }  else{
            if(e.target.children[0].innerText === '+'){
                questionList.forEach((li) => {
                    li.innerText = '+';
                })
                e.target.children[0].innerText = '-';   
        } else{
            e.target.children[0].innerText = '+';   
        }
    }
        

        


//     if(e.target.innderText === '+'){
//         e.target.innderText = '-';
// } else{
//     e.target.innderText = '+';
// }
    }

return(
    <div className="questions">
        
        <ul className='question-list'>
            <li><a href="#" onClick={handleQuestionClick} >Question 1<span className='sign'>+</span></a></li>
            <li><a href="#" onClick={handleQuestionClick} >Question 2 <span className='sign'>+</span></a></li>
            <li><a href="#" onClick={handleQuestionClick} >Question 3 <span className='sign'>+</span></a></li>
            <li><a href="#" onClick={handleQuestionClick} >Question 4 <span className='sign'>+</span></a></li>
            <li><a href="#" onClick={handleQuestionClick} >Question 5 <span className='sign'>+</span></a></li>
            <li><a href="#" onClick={handleQuestionClick} >Question 6 <span className='sign'>+</span></a></li>
            <li><a href="#" onClick={handleQuestionClick} >Question 7 <span className='sign'>+</span></a></li>
            <li><a href="#" onClick={handleQuestionClick} >Question 8 <span className='sign'>+</span></a></li>
            <li><a href="#" onClick={handleQuestionClick} >Question 9 <span className='sign'>+</span></a></li>
            <li><a href="#" onClick={handleQuestionClick} >Question 10 <span className='sign'>+</span></a></li>
        </ul>

    </div>

)
}