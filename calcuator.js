let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
       if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
       }
       else if(e.target.innerHTML == 'AC'){
        string = "";
        document.querySelector('input').value = string;
       }
       else{
           // Check if the button clicked is 'x', then replace it with '*'
           let symbol = e.target.innerHTML === 'x' ? '*' : e.target.innerHTML;
           string = string + symbol;
           document.querySelector('input').value = string;
       }
    })
})
