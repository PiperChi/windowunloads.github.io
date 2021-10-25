function saveName(){
  var fieldValue= document.getElementById('textfield').vaule;
  localStorage.setItem('userName', fieldValue);
  window.location.href =  "page2.html";  
  }