function myFunction(x) {
    x.classList.toggle("change");
  }


  function openNav() {
    document.getElementById("myMenu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("myMenu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }