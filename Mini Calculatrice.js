// ************set var
const myRslt = document.querySelector('.rslt');
const myText = document.querySelector('.text');
const myBtn = document.querySelectorAll('.btn');
let rslt = 0;

// *************event

myBtn.forEach(function(ele) {
    ele.onclick = function() {
        let Value = ele.getAttribute('alt')
        myText.innerHTML+= Value;
        rslt += Value 
        console.log(rslt);

    }
})



























