const cardList =[
    {
        spanColor: "#ad82fd",
        qualityTitle: "Inteligente",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus! Aspernatur est rem!",
    },

    {
        spanColor: "#f92855",
        qualityTitle: "Compacto",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus! Aspernatur est rem!",
    },

    {
        spanColor: "#66d9eb",
        qualityTitle: "Economico",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus! Aspernatur est rem!",
    },

    {
        spanColor: "#ad82fd",
        qualityTitle: "Transparente",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus! Aspernatur est rem!",
    },

    {
        spanColor: "#f92855",
        qualityTitle: "Opaco",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus! Aspernatur est rem!",
    },

    {
        spanColor: "#66d9eb",
        qualityTitle: "Sustentavel",
        content: "O Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est rem expedita a iusto et doloremque! Consequuntur, ex necessitatibus! Aspernatur est rem!",
    },
]


const qualityCard = document.querySelector(".Qualidade");


const addImages = (color, title, text) => {
    for (let i = 0; i < cardList.length; i++) {
        const div = document.createElement("div");
        div.classList.add("dynamic-div");
        div.innerHTML = `
        <div class="flex-span">
            <div class="col" style="background-color: ${cardList[i].spanColor}"></div>
            <h2>${cardList[i].qualityTitle}</h2>
        </div>
        <p>${cardList[i].content}</p>`;

        qualityCard.appendChild(div);
    }
}; 

addImages();

const sideBar = document.querySelector(".side-bar");
const closeBar = document.querySelector(".menu-close")
const menuIcon = document.querySelector(".menu-icon")
const openModal = document.querySelector(".modal")
const Body = document.querySelector(".all")

const closeSidebar = () => {
    sideBar.style.display = "none"
    openModal.style.display = "none"
}

const openSidebar = () => {
    sideBar.style.display = "block"
    openModal.style.display = 'block'
}

// const closeModal = () => {
//     sideBar.style.display = "none"
//     closeSidebar();
// }



sideBar.addEventListener('click', closeSidebar);
menuIcon.addEventListener('click', openSidebar);
// Body.addEventListener('click', closeModal);

