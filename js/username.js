let userName = prompt("Lütfen Adınızı Giriniz")
let text1 = document.querySelector("#myName")
text1.innerHTML  = `${text1.innerHTML}  ${userName}`