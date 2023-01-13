document.getElementById("change-language").addEventListener('click', (e) =>{
    if(document.getElementById("language").innerHTML === "En"){
      document.getElementById("language").innerHTML = "Ge";
    }else{
      document.getElementById("language").innerHTML = "En";
    }

    document.querySelectorAll(".en").forEach(paragraph => {
        paragraph.classList.toggle("container-hidden");
    });
    document.querySelectorAll(".ge").forEach(paragraph => {
        paragraph.classList.toggle("container-hidden");
    });
   
  });


