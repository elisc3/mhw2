function apertura(event){
    const listener = event.currentTarget;

    const nav_menu = document.querySelector("nav");
    const tendina = document.querySelector(".menu-content");
    const bottone=document.querySelectorAll("#menu_button div");

    if (nav_menu.classList.contains("menu-open")) {
        console.log("Chiusura menu");

        nav_menu.classList.remove("menu-open");

        tendina.classList.add("nascosto");
        for(let i of bottone){
            if(i.classList.contains("linea")){
                i.classList.remove("nascosto");
            }
            else{
                i.classList.add("nascosto");
            }
        }

        return;
    }
    else{
        nav_menu.classList.add("menu-open"); // Aggiungiamo la classe al <nav> per lo stile 

        for(let i of bottone){
            if(i.classList.contains("linea")){
                i.classList.add("nascosto");
            }
            else{
                i.classList.remove("nascosto");
            }
        }

        tendina.classList.remove("nascosto");
    }

}

function cambio(event) {
    let listener = event.currentTarget;
    console.log(listener);

    let lista=[{name: "Sala Antares", img : "mirador5.jpg"},
               {name: "Sala Sinfonia", img : "mirador7.jpg" },
               {name: "Sala Congressi", img : "mirador8.jpg"},
               {name: "Sala Luxury", img : "mirador9.jpg"}
              ];
    console.log( lista );

    let box= document.querySelector(".galleria-box");
    console.log(box.dataset.pos);
    
    let pos= box.dataset.pos;
    pos= ++pos%lista.length;
    console.log(pos);

    const div_box=document.createElement("div");
    div_box.classList.add("galleria-box");
    div_box.id="g1";
    div_box.dataset.pos=pos;
    console.log(div_box);

    const div_img=document.createElement("img");
    div_img.id="par2g";
    div_img.src=lista[pos].img;

    const div_testo=document.createElement("div");
    div_testo.classList.add("center");
    div_testo.textContent=lista[pos].name;

    div_box.appendChild(div_img);
    div_box.appendChild(div_testo);

    listener.innerHTML='';
    listener.appendChild(div_box);   
};


const menu=document.querySelector("#menu_button");
menu.addEventListener("click", apertura); 
const v_nav = document.querySelector("nav");


const galleria=document.querySelector("#galleria");
galleria.addEventListener("click", cambio);