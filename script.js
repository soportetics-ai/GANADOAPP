// Datos de ejemplo
const data = {
  ternerosM: {
    title: "Terneros Machos",
    animals: [
      { code: "T TR M 001", img: "img/ternero1.jpg", estado: "Disponible", comentario: "Sano" },
      { code: "T TR M 002", img: "img/ternero2.jpg", estado: "Vendido", comentario: "Sano" },
      { code: "T TR M 003", img: "img/ternero3.jpg", estado: "Disponible", comentario: "Enfermo" },
    ]
  },
  ternerasH: {
    title: "Terneras Hembras",
    animals: [
      { code: "T TR H 001", img: "img/ternera1.jpg", estado: "Disponible", comentario: "Sano" },
      { code: "T TR H 002", img: "img/ternera2.jpg", estado: "Vendido", comentario: "Sano" }
    ]
  },
  toro: {
    title: "Toros",
    animals: [
      { code: "TORO 001", img: "img/toro1.jpg", estado: "Disponible", comentario: "Sano" }
    ]
  },
  vaca: {
    title: "Vacas",
    animals: [
      { code: "VACA 001", img: "img/vaca1.jpg", estado: "Disponible", comentario: "Enfermo" },
      { code: "VACA 002", img: "img/vaca2.jpg", estado: "Vendido", comentario: "Sano" }
    ]
  }
};

// Función para abrir pestañas
function openTab(category) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  
  event.target.classList.add("active");

  const content = document.getElementById("content");
  content.innerHTML = "";

  data[category].animals.forEach(animal => {
    const div = document.createElement("div");
    div.classList.add("animal-item");

    const estadoClass = animal.estado.toLowerCase();
    const comentarioClass = animal.comentario.toLowerCase();

    div.innerHTML = `
      <img src="${animal.img}" alt="${animal.code}" onclick="openModal('${animal.img}')">
      <div class="animal-info">
        <span class="animal-code">${animal.code}</span>
      </div>
      <div class="animal-status">
        <span class="estado ${estadoClass}">${animal.estado}</span>
        <small class="comentario ${comentarioClass}">${animal.comentario}</small>
      </div>
    `;
    content.appendChild(div);
  });
}

// Modal
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Mostrar primera pestaña por defecto
window.onload = () => openTab('ternerosM');
