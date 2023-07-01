const addClassOnMouseOver = (mouse, newdiv) => {
     const element = document.getElementById(mouse);

     element.addEventListener("mouseover", () => {
          element.classList.add(newdiv);

           setTimeout(() => {
             element.classList.remove(newdiv);
           }, 1500);

     });

    
}
addClassOnMouseOver("mouse", "active");


