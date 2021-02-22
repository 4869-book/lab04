function change(){
    const cell = document.querySelectorAll("td");
    cell.forEach(element => {
        if(element.classList.contains("clicked")){
            element.classList.remove("clicked");
            element.classList.add("click");
        }
        else{
            element.classList.remove("click");
            element.classList.add("clicked");
        }
    });
}

const click = document.querySelector("table");
click.addEventListener('click',change);