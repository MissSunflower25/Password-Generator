const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnEl = document.getElementById("btn-el");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");


btnEl.addEventListener("click", ()=>{
     let password1Storage = [];
     let password2Storage = [];

for (let i=0; i < 30; i++){
     
     if (password1Storage.length < 15){
          password1Storage += characters[Math.floor(Math.random()*characters.length)]
     }else{
          password2Storage += characters[Math.floor(Math.random()*characters.length)]
     }

//     console.log(password1Storage)
password1.textContent = password1Storage;
password2.textContent = password2Storage;

}})
