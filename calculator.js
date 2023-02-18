"use strict"

// CARGAR CALCULADORA //

const calculator = document.querySelector(".container-calc");

addEventListener("load",()=>{
    calculator.style.opacity = 1
});

// PANTALLA //

const mainScreen = document.querySelector(".tipping");

// VALOR ACTUAL //

let actualValue = [``,``,``];

//- - - - - - - - - - - - BOTONES NÚMEROS - - - - - - - - - - - -//

const botonesNumeros = document.querySelectorAll(".button-num");

botonesNumeros.forEach(boton => {
    boton.addEventListener("click",()=>{
        setTimeout(() => {
            boton.blur();
        }, 1);

        if (actualValue[1] == ``){

            actualValue[0] += boton.value
                            
            if(boton.value == 1){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${boton.value}</p>`
            }
            else if(boton.value == 7){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${boton.value}</p>`
            }
            else {
                mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
            }

        }
        else {

            actualValue[2] += boton.value
                            
            if(boton.value == 1){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${boton.value}</p>`
            }
            else if(boton.value == 7){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${boton.value}</p>`
            }
            else {
                mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
            }

        }
    })
});

//- - - - - - - - - - - - BOTONES OPERADORES BÁSICOS - - - - - - - - - - - -//

const botonesOperadores = document.querySelectorAll(".button-op");

botonesOperadores.forEach(botonOP => {
    botonOP.addEventListener("click",()=>{

        actualValue[1] += botonOP.value

        if(botonOP.value == `+`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--plus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `-`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--minus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `/`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--division-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `x`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--multiplication-sign">${botonOP.value}</p>`
        }

    })
});

//- - - - - - - - - - - - - - - BOTON AC - - - - - - - - - - - - - - -//

const buttonAC = document.querySelector(".AC-button");

buttonAC.addEventListener("click",()=>{
    actualValue = [``,``,``];
    screensInUse = [false,false,false,false,false];
    resultScreen5.innerHTML = ``
    resultScreen4.innerHTML = ``
    resultScreen3.innerHTML = ``
    resultScreen2.innerHTML = ``
    resultScreen1.innerHTML = ``
    mainScreen.innerHTML = ``;
    saveResults = [false,false,false,false,false];

})

//- - - - - - - - - - - - - - - BOTON ENTER - - - - - - - - - - - - - - -//

const buttonENTER = document.querySelector(".button-enter");

addEventListener("keypress",()=>{
    calculate(actualValue[0],actualValue[1],actualValue[2]);
    mainScreen.innerHTML = ``;
    actualValue = [``,``,``];
})

buttonENTER.addEventListener("click",()=>{
    calculate(actualValue[0],actualValue[1],actualValue[2]);
    mainScreen.innerHTML = ``;
    actualValue = [``,``,``];
})

//- - - - - - - - - - - - - - - CALCULAR - - - - - - - - - - - - - - -//

let result

const calculate = (num1,op,num2) => {

    if (num1 == ``){
        num1 = 0;
    }

    else if(op == ``){
        op = `+`
        num2 = 0;
    }

    else if(num2 == ``){
        num2 = 0;
    }

    if (op == `+`){
        result = parseFloat(num1) + parseFloat(num2);
        putInScreen(result);
        saveResult(result);
    }
    else if (op == `-`){
        result = parseFloat(num1) - parseFloat(num2);
        putInScreen(result);
        saveResult(result);
    }
    else if (op == `x`){
        result = parseFloat(num1) * parseFloat(num2);
        putInScreen(result);
        saveResult(result);
    }
    else if (op == `/`){
        result = parseFloat(num1) / parseFloat(num2);
        putInScreen(result);
        saveResult(result);
    }
}

//- - - - - - - - - - - - - - - PUT IN SCREENS - - - - - - - - - - - - - - -//

const resultScreen1 = document.querySelector(".result1");
const resultScreen2 = document.querySelector(".result2");
const resultScreen3 = document.querySelector(".result3");
const resultScreen4 = document.querySelector(".result4");
const resultScreen5 = document.querySelector(".result5");

let screensInUse = [false,false,false,false,false];

// const putInScreen = (res) =>{

//     let resString = res.toString()

//     if (screensInUse[0] == false){
//         pullDownScreens();
//         for (let i = 0; i < resString.length; i++){
//             resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`;
//         }
//         screensInUse[0] = true;
//         screensInUse[4] = false;
//     }
//     else if (screensInUse[1] == false){
//         pullDownScreens();
//         for (let i = 0; i < resString.length; i++){
//             resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`;
//         }
//         screensInUse[1] = true;
//     }
//     else if (screensInUse[2] == false){
//         pullDownScreens();
//         for (let i = 0; i < resString.length; i++){
//             resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`;
//         }
//         screensInUse[2] = true;
//     }
//     else if (screensInUse[3] == false){
//         pullDownScreens();
//         for (let i = 0; i < resString.length; i++){
//             resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`;
//         }
//         screensInUse[3] = true;
//     }
//     else if (screensInUse[4] == false){
//         pullDownScreens();
//         for (let i = 0; i < resString.length; i++){
//             resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`;
//         }
//         screensInUse[4] = true;
//         screensInUse[0] = false;
//         screensInUse[1] = false;
//         screensInUse[2] = false;
//         screensInUse[3] = false;
//     }
// }






















                            
// resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`

// resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`

// resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`




const putInScreen = (res) =>{

    let resString = res.toString()

    if (screensInUse[0] == false){
        pullDownScreens();

        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }

        screensInUse[0] = true;
        screensInUse[4] = false;
    }
    else if (screensInUse[1] == false){
        pullDownScreens();

        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }


        screensInUse[1] = true;
    }
    else if (screensInUse[2] == false){
        pullDownScreens();

        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }


        screensInUse[2] = true;
    }
    else if (screensInUse[3] == false){
        pullDownScreens();

        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }


        screensInUse[3] = true;
    }
    else if (screensInUse[4] == false){
        pullDownScreens();

        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }


        screensInUse[4] = true;
        screensInUse[0] = false;
        screensInUse[1] = false;
        screensInUse[2] = false;
        screensInUse[3] = false;
    }
}






















































const pullDownScreens = ()=>{
    resultScreen5.innerHTML = resultScreen4.innerHTML;
    resultScreen4.innerHTML = ``;
    resultScreen4.innerHTML = resultScreen3.innerHTML;
    resultScreen3.innerHTML = ``;
    resultScreen3.innerHTML = resultScreen2.innerHTML;
    resultScreen2.innerHTML = ``;
    resultScreen2.innerHTML = resultScreen1.innerHTML;
    resultScreen1.innerHTML = ``;
}

//- - - - - - - - - - - - - - - SAVE RESULTS - - - - - - - - - - - - - - -//

let saveResults = [false,false,false,false,false];

const saveResult = (res)=>{
    pullDownResults();
    if (saveResults[0] == false){
        saveResults[0] = res;
    }
    else if (saveResults[1] == false){
    pullDownResults();
        saveResults[1] = saveResults[0];
        saveResults[1] = res;
    }
    else if (saveResults[2] == false){
    pullDownResults();
        saveResults[2] = saveResults[1];
        saveResults[2] = res;
    }
    else if (saveResults[3] == false){
    pullDownResults();
        saveResults[3] = saveResults[2];
        saveResults[3] = res;
    }
    else if (saveResults[4] == false){
    pullDownResults();
        saveResults[4] = saveResults[3];
        saveResults[4] = res;
    }
}

const pullDownResults = () =>{
    saveResults[4] = false;
    saveResults[4] = saveResults[3];
    saveResults[3] = false;
    saveResults[3] = saveResults[2];
    saveResults[2] = false;
    saveResults[2] = saveResults[1];
    saveResults[1] = false;
    saveResults[1] = saveResults[0];
    saveResults[0] = false;
}

//- - - - - - - - - - - - - - - BOTÓN DEL - - - - - - - - - - - - - - -//

const buttonDEL = document.querySelector(".button-delete");

buttonDEL.addEventListener("click",()=>{
    mainScreen.innerHTML = ``
    actualValue = [``,``,``];
})

//- - - - - - - - - - - - - - - BOTÓN TAKE - - - - - - - - - - - - - - -//

const takeButtons = document.querySelectorAll(".button-take");

takeButtons.forEach(buttonTK => {
    buttonTK.addEventListener("click",()=>{
        if (buttonTK.value == 1){
            let saveResultsString = saveResults[0].toString()
            actualValue[0] += saveResults[0]
            for (let i = 0; saveResultsString.length > i  ; i++){
                mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`;
            }
        }
        else if (buttonTK.value == 2){
            let saveResultsString = saveResults[1].toString()
            actualValue[0] += saveResults[1]
            for (let i = 0; saveResultsString.length > i  ; i++){
                mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`;
            }
        }
        else if (buttonTK.value == 3){
            let saveResultsString = saveResults[2].toString()
            actualValue[0] += saveResults[2]
            for (let i = 0; saveResultsString.length > i  ; i++){
                mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`;
            }
        }
        else if (buttonTK.value == 4){
            let saveResultsString = saveResults[3].toString()
            actualValue[0] += saveResults[3]
            for (let i = 0; saveResultsString.length > i  ; i++){
                mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`;
            }
        }
        else if (buttonTK.value == 5){
            let saveResultsString = saveResults[4].toString()
            actualValue[0] += saveResults[4]
            for (let i = 0; saveResultsString.length > i  ; i++){
                mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`;
            }
        }
    })
})