// ELEMENTS
const modalTitle = document.getElementById("modalTitle");
const images = document.querySelectorAll(".slide-track img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

// DESCRIPTION DATA (single source of truth)
const imageData = {
  "pic.jpg":{
    title: "Shared Laughter",
    desc:
    "This image captures a group of friends descending the stairs, engaged in conversation. The smiles on their faces reflect the joy of being together, even as their attention momentarily shifts to carefully navigating each step. It is a simple, fleeting moment that reveals both connection and mindfulness in everyday life.",
  },
  "pic1.jpg":{
    title: "Shared Space",
    desc:
    "The image shows a group of male students walking together in a covered school hallway. They are wearing school uniforms and carrying backpacks. While walking side by side, all of them are looking down at their cellphones instead of fully paying attention to where they are going.",
  },
  "pic2.jpg":{
    title: "Class Whisper",
    desc:
    "This image shows what some students do in the middle of a class. The student on the left is listening to the lesson while also paying attention to his seatmate. In the photo, he is facing the front where a monitor shows the lesson of the day, but his eyes were captured looking at his seatmate. The student on the right is talking to him, which causes him to divide his attention. Even though he is listening to his seatmate, he can still fulfill his responsibility as a student, as he is still able to understand the lesson.",
  },
  "pic3.jpg":{
    title: "Peer Gathering",
  desc:
    "This image shows a group of students seated in a straight line behind a long table, inspired by The Last Supper, with one student at the center and others on both sides creating balance. In front of them are sliced green mangoes, cups, and dipping sauce, showing they are sharing food in a casual school setting, while some students talk or look at each other. This connects to intertextuality because the image copies the arrangement of a famous artwork and presents it in a modern situation, helping viewers recognize the reference and understand its deeper meaning.",
  },
  "pic4.jpg":{
    title: "In Their Element",
    desc:
    "The photo shows a group of students gathered in one place, doing different things like talking, walking, taking pictures, and sitting. Because of the way the people are arranged and the presence of the columns, it can remind viewers of The School of Athens, where many individuals are also grouped together in a shared space, each doing their own thing but still part of the scene.",
  }
  };

// OPEN MODAL (used by BOTH images and buttons)

 function openModal(imageSrc) {
  modalImg.src = imageSrc;

  // 🔥 RESET first (important!)
  modalImg.classList.remove("full-image");

  // ✅ ONLY pic3.png shows full image
  if (imageSrc === "pic3.jpg") {
    modalImg.classList.add("full-image");
  }

  if (imageData[imageSrc]) {
    modalTitle.textContent = imageData[imageSrc].title;
    modalDesc.textContent = imageData[imageSrc].desc;
  } else {
    modalTitle.textContent = "Campus Moment";
    modalDesc.textContent = "Campus moment captured beautifully.";
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// IMAGE CLICK → MODAL (KEEP THIS)
images.forEach(image => {
  image.addEventListener("click", () => {
    openModal(image.getAttribute("src"));
  });
});

// BUTTON CLICK → MODAL (KEEP THIS)
function openDefinition(imageSrc) {
  openModal(imageSrc);
}

// CLOSE MODAL
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}