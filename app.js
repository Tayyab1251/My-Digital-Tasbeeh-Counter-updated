const clickableArea = document.querySelector(".container");

const counterValue = document.querySelector(".counter");

const reset_btn = document.querySelector(".reset-btn");

//static value//

counterValue.textContent = "00";


clickableArea.addEventListener('click', function counterTasbeeh() {
    
    let prefix = "0";
    
      if(counterValue.textContent == 0 || counterValue.textContent < 9){

        let Count = parseInt(counterValue.textContent) + 1;

         counterValue.textContent =  prefix + Count;

      }else{

    counterValue.textContent = parseInt(counterValue.textContent) + 1; 
            }
});

reset_btn.addEventListener('click',function reset(){

    let askToCnfrm = confirm("Are you sure you want to Reset the Counter ?");

    if(askToCnfrm == true){

        counterValue.textContent = 0-1;

    }
    else{

        counterValue.textContent -=1;

    }
});