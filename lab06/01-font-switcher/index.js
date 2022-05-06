let currFont = 1.5

const makeBigger = () => {
   currFont += 0.2;
   setFont();
};

const makeSmaller = () => {
   currFont -= 0.2;
   setFont();
};

const setFont = () => {
   document.querySelector("p").style.fontSize = `${currFont}em`;
   document.querySelector("h1").style.fontSize = `${currFont}em`;
}

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

