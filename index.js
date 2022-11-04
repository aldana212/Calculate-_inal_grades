const inputName = document.querySelector(".txt-nombre")
const firstNote = document.querySelector(".txt-firstNote")
const secondNote = document.querySelector(".txt-secondNote")
const thirdNote = document.querySelector(".txt-thirdNote")

const finalNote = document.querySelector(".txt-finalNote")


const Send = document.querySelector(".btn-enviar")

// console.log(inputName, firstNote, secondNote, thirdNote, finalNote);


Send.addEventListener("click", calculate)
inputName.addEventListener("keyup", calculate)
firstNote.addEventListener("keyup", calculate)
secondNote.addEventListener("keyup", calculate)
thirdNote.addEventListener("keyup", calculate)

// console.log(inputName.value, firstNote.value, secondNote.value, thirdNote.value);


function calculate(events){
    if (events.code === "Enter" || events.pointerId === 1) { 
        // if(firstNote.value <= ""){
        //     console.log("hola...");
        // }
         const resultFirst = parseFloat(firstNote.value* 30) / 100; 
         console.log(resultFirst);
         const resultSecond =  parseFloat(secondNote.value*30) / 100; 
         const resultThird = parseFloat(thirdNote.value*40) / 100;
         const result = (resultFirst + resultSecond + resultThird);
         console.log("resultado de notas" + result.toFixed(2));
        validateResul(result.toFixed(1))
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