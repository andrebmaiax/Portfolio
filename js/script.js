const body=document.querySelector("body"),
      logo=body.querySelector(".logo"),
      back=body.querySelector(".back")
 
      logo.addEventListener("click",()=>{
        back.classList.toggle("close");
      })
