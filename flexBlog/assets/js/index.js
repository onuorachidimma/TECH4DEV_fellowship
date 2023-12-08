const cardList =[
    {
        spanColor: "#ad82fd",
        qualityTitle: "Inteligente",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus!",
    },

    {
        spanColor: "#f92855",
        qualityTitle: "Compacto",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus!",
    },

    {
        spanColor: "#66d9eb",
        qualityTitle: "Economico",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus!",
    },

    {
        spanColor: "#ad82fd",
        qualityTitle: "Transparente",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus!",
    },

    {
        spanColor: "#f92855",
        qualityTitle: "Opaco",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus!",
    },

    {
        spanColor: "#66d9eb",
        qualityTitle: "Sustentavel",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus!",
    },
]


const qualityCard = document.querySelector(".Qualidade");


const addImages = (color, title, text) => {
    for (let i = 0; i < cardList.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex-span">
            <span style="background-color: ${cardList[i].spanColor}"></span><h2>${cardList[i].qualityTitle}</h2>
        </div>
        <p>${cardList[i].content}</p>`;

        qualityCard.appendChild(div);
    }
}; 

const mainThree = document.querySelector(".mainThree");
console.log("i am running");
if (mainThree) {
    mainThree.style.display = "flex";
    console.log("mainThree is set to display:flex");
}

// const mainThree = document.querySelector(".mainThree");
//     if (mainThree) {
//         mainThree.classList.add("mainThreeFlex");
//     }


addImages();


