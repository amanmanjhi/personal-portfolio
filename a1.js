var tablinks=document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu =document.querySelector("#sidemenu");
let openmenu = () => {
    sidemenu.style.right = "0";
    sidemenu.style.display="flex";
}

let closemenu = () => {
    
    sidemenu.style.right = "-200px";
    sidemenu.style.display="none";
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbzo30FSZVvmvfINJauEvAY0Xfxn6wHm3Nm8-p3a6hok7eQki7fR_xaRwDsMwdy2aRIg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerText=`Your Contact details are recieved Successfully!!. Thankyou for visting on my Page`;
        setTimeout(function(){
            msg.innerHTML="";
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

const msg = document.getElementById("msg");


