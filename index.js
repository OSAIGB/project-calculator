const indicator = document.querySelector('.indicator')
const calc = document.querySelector('.calc')
const number = document.querySelector('.number')
const theme = document.querySelector('.theme')
const body = document.querySelector('body')
const deleted = document.querySelector('.delete')
console.log(deleted)
const reset = document.querySelector('.key-reset')
console.log(reset)
const btn = document.querySelector('.calculator-buttons')
const answer = document.querySelector('.answer') 
const btns = document.querySelectorAll('input.btn')
console.log(btns)
const display = document.querySelector('.display')

btns.forEach(button => {
    button.addEventListener('click', (e) =>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        switch (e.target.value) {
            case "x":
                display.innerText += "*";
                break;
            case "RESET":
                display.innerText = "";
                break;
            case "DEL":
              let d =  display.innerText.slice(0, -1);
              display.innerText = d;
                break;
            case "=":
                try {
                     display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = "ERROR";
                }
                break;
            default:
                display.innerText += e.target.value;
                break;
        }
    });
  })
  
        
 

  

 




indicator.addEventListener('click', () =>{
    if (indicator.classList.contains('theme-1')){
        indicator.classList.remove('theme-1')
        indicator.classList.add('theme-2')
        calc.classList.add('calc-2')
        number.classList.add('number-2')
        theme.classList.add('theme-2')
        body.classList.add('body-2')
    }

    else if(indicator.classList.contains('theme-2')) {
    indicator.classList.remove('theme-2')
    indicator.classList.add('theme-3')
    // calc.classList.remove('calc-2')
    body.classList.remove('body-2')
    number.classList.remove('number-2')
    theme.classList.remove('theme-2')
    body.classList.remove('body-2') 
    calc.classList.remove('calc-2')
    calc.classList.add('calc-3')
    body.classList.add('body-3')
    number.classList.add('number-3')
    theme.classList.add('theme-3')
    btn.classList.remove('btn-background-2')
            btn.classList.add('btn-background-3')
           
            
            // answer.classList.remove('answer-2')
            // answer.classList.add('answer-3')
            indicator.classList.remove('btn-background-2')
            // deleted.classList.remove('delete')
            // deleted.classList.add('delete-3')
}

    else if (indicator.classList.contains('theme-3')){
        indicator.classList.remove('theme-3')

        indicator.classList.add('theme-1')
        calc.classList.remove('calc-3')
       calc.classList.add('calc')
       body.classList.remove('body-3')
       body.classList.add('body')
       number.classList.remove('number-3')
       number.classList.add('number')
       theme.classList.remove('theme-3')
       theme.classList.add('theme')
       body.classList.remove('body-2')
    //    answer.classList.remove('answer-3')
    //    answer.classList.add('answer')
       btn.classList.remove('btn-background-3')
       btn.classList.add('calculator-buttons')
       answer.classList.remove('answer-3')
    }
})



indicator.addEventListener('click', () =>{
    if (indicator.classList.contains('theme-2')){
       answer.classList.add('answer-2')
    //    answer.classList.remove('answer')
       deleted.classList.add('delete-2')
        reset.classList.add('reset-2')
        btn.classList.add('btn-background-2')
        // buttons.classList.add('.reset-2')
        btn.classList.add

        
    }
    else if (
        indicator.classList.contains('theme-3')){
            deleted.classList.remove('delete-2')
            deleted.classList.add('delete-3')
            reset.classList.remove('reset-2') 
            reset.classList.add('reset-3')
            answer.classList.remove('answer-2') 
            answer.classList.add('answer-3')
            btn.classList.remove('btn-background-2')
            btn.classList.add('btn-background-3')
        
           
            indicator.classList.remove('btn-background-2')
        }
 else if(
    indicator.classList.contains('theme-1')){
        deleted.classList.remove('delete-3')
        reset.classList.remove('reset-3')
    }
    })

indicator.addEventListener('click', () =>{
    if (indicator.classList.contains('theme-3')){
        document.querySelectorAll('input.btn').forEach(btns => {
            btns.classList.add('reset-3')
        })
        
    }
    else if (indicator.classList.contains('theme-1'))
    document.querySelectorAll('input.btn').forEach(btns => {
        btns.classList.remove('reset-3')
    })
})

