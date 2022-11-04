const inputName = document.querySelector(".txt-nombre")
const firstNote = document.querySelector(".txt-firstNote")
const secondNote = document.querySelector(".txt-secondNote")
const thirdNote = document.querySelector(".txt-thirdNote")

const finalNote = document.querySelector(".txt-finalNote")


const Send = document.querySelector(".btn-enviar")

Send.addEventListener("click", calculate)



function calculate(){
        if(firstNote.value <= 5 && firstNote.value >= 1 && secondNote.value <= 5 && secondNote.value >= 1 && thirdNote.value <= 5 && thirdNote.value >= 1){
            const resultFirst = parseFloat(firstNote.value* 30) / 100; 
            console.log(resultFirst);
            const resultSecond =  parseFloat(secondNote.value*30) / 100; 
            const resultThird = parseFloat(thirdNote.value*40) / 100;
            const result = (resultFirst + resultSecond + resultThird);
            validateResul(result.toFixed(2))
        }else{
            console.log("error");
        }
}

function validateResul(result){
   if(result >= 4.5){
    finalNote.textContent = inputName.value + " Excelente " + result
   }else if(result >= 3.5 && result <= 4.5){
    finalNote.textContent = inputName.value + " Bueno " + result
   }else if(result >= 2 && result <= 3.4){
    finalNote.textContent = inputName.value + " Perdiste la materia tienes oportunidad de recuperar " + result
   }else if(result <= 2){
    finalNote.textContent = inputName.value + " Perdiste la materia deberas repetirla" + result
   }
}