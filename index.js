const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnEl = document.getElementById("btn-el");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");


btnEl.onclick = function btnClick (){
     let a =  Math.floor(Math.random() * characters.length)
     let b = Math.floor(Math.random() * characters.length) 
     let c =  Math.floor(Math.random() * characters.length)
     let d =  Math.floor(Math.random() * characters.length)
     let e =  Math.floor(Math.random() * characters.length)
     let f =  Math.floor(Math.random() * characters.length)
     let g =  Math.floor(Math.random() * characters.length)
     let h =  Math.floor(Math.random() * characters.length)
     let i =  Math.floor(Math.random() * characters.length)
     let j =  Math.floor(Math.random() * characters.length)
     let k =  Math.floor(Math.random() * characters.length)
     let l =  Math.floor(Math.random() * characters.length)
     let m =  Math.floor(Math.random() * characters.length)
     let n =  Math.floor(Math.random() * characters.length)
     let o =  Math.floor(Math.random() * characters.length)
    
     password1.textContent = characters[a] + characters[b] + characters[c] + characters[d] + characters[e] + characters[f] + characters[g] + characters[h] + characters[i] + characters[j] + characters[k] + characters[l] + characters[m] + characters[n] + characters[o]

     let p =  Math.floor(Math.random() * characters.length)
     let q = Math.floor(Math.random() * characters.length) 
     let r =  Math.floor(Math.random() * characters.length)
     let s =  Math.floor(Math.random() * characters.length)
     let t =  Math.floor(Math.random() * characters.length)
     let v =  Math.floor(Math.random() * characters.length)
     let w =  Math.floor(Math.random() * characters.length)
     let x =  Math.floor(Math.random() * characters.length)
     let y =  Math.floor(Math.random() * characters.length)
     let z =  Math.floor(Math.random() * characters.length)
     let aa =  Math.floor(Math.random() * characters.length)
     let bb =  Math.floor(Math.random() * characters.length)
     let cc =  Math.floor(Math.random() * characters.length)
     let dd =  Math.floor(Math.random() * characters.length)
     let ee =  Math.floor(Math.random() * characters.length)

     password2.textContent = characters[p] + characters[q] + characters[r] + characters[s] + characters[t] + characters[v] + characters[w] + characters[x] + characters[y] + characters[z] + characters[aa] + characters[bb] + characters[cc] + characters[dd] + characters[ee]

}

