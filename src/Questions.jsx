import './questions.css'


export function Questions() {



    const handleQuestionClick = (e) => {

        e.preventDefault();
        console.log(e.target.innerText)

        if(e.target.innerText === '+' || e.target.innerText === '-'){
            console.log('dadada')
            if(e.target.innerText === '+'){
                console.log('yea')
            e.target.innerText = '-';
        }else {
            e.target.innerText = '+';
        }

        }  else{
            if(e.target.children[0].innerText === '+'){
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
            <li><a href="#" onClick={handleQuestionClick} >Question 1<span>+</span></a></li>
            <li><a href="#">Question 2 <span>+</span></a></li>
            <li><a href="#">Question 3 <span>+</span></a></li>
            <li><a href="#">Question 4 <span>+</span></a></li>
            <li><a href="#">Question 5 <span>+</span></a></li>
            <li><a href="#">Question 6 <span>+</span></a></li>
            <li><a href="#">Question 7 <span>+</span></a></li>
            <li><a href="#">Question 8 <span>+</span></a></li>
            <li><a href="#">Question 9 <span>+</span></a></li>
            <li><a href="#">Question 10 <span>+</span></a></li>
        </ul>

    </div>

)
}