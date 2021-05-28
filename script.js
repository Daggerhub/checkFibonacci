const generate = document.getElementById('generate')
const fibonacci = document.getElementById('fibonacci')

const generateFibonacci = () => {

    const number = document.getElementById('fnumber').value
    let a = 0n;
    let b = 1n;
   
    let c = 0n;
    
    for(let i = 2; i <= number; i++){
       c = a + b; 
       a = b; 
       b = c; 
    }

    if(number){
        fibonacci.innerHTML = b;
    }
    else{
        fibonacci.innerHTML = a;
    }
    
}

generate.addEventListener('click', generateFibonacci);
