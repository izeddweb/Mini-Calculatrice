// ************set var
const myRslt = document.querySelector(".rslt");
const myText = document.querySelector(".text");
const myBtn = document.querySelectorAll(".btn");
let rslt = 0;
let arrRslt = [];
let arrDel ;


// *************event

myBtn.forEach(function (ele) {
  ele.onclick = function () {
      let Value = ele.getAttribute("alt");
      arrRslt.push(Value)
      myText.innerHTML += Value;
      rslt += Value;
      console.log(rslt);
      if (Value === "DEL") {
        arrDel = arrRslt.pop(arrRslt.slice(arrRslt.length - 2,arrRslt.length - 1))
      myText.innerHTML = arrDel;
    } else if (Value === "AC") {
      myText.innerHTML = "";
    }
    else if (Value === "*" && Value === "="&& Value  > 1) {
        myRslt.innerHTML += rslt;
      return rslt *= Value;
    }
  };
});

// test
// let arrRslt = [1,2,3,'f'];
// console.log(arrRslt);
// arrDel = arrRslt.pop(arrRslt.slice(length - 1))
// console.log(arrDel );
// console.log(arrRslt);


// ok bro this will b changed




