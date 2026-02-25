// ELEMENTS
const images = document.querySelectorAll(".slide-track img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

// DESCRIPTION DATA (single source of truth)
const descriptions = {
  "pic.png":
    "This image captures a group of friends descending the stairs, engaged in conversation. The smiles on their faces reflect the joy of being together, even as their attention momentarily shifts to carefully navigating each step. It is a simple, fleeting moment that reveals both connection and mindfulness in everyday life.",

  "pic1.png":
    "The image shows a group of male students walking together in a covered school hallway. They are wearing school uniforms and carrying backpacks. While walking side by side, all of them are looking down at their cellphones instead of fully paying attention to where they are going.",

  "pic2.png":
    "The main focus of the image is the student, completely immersed in his book. Though there are people beside him and having the noisy environment, he remains undisturbed. This scene highlights the theme of concentration amidst distraction emphasizing his dedication and seriousness toward learning.",

  "pic3.png":
    "The image captures the front entrance of the campus filled with movement and everyday activity. Students and visitors are seen arriving and leaving at the same time. Some are getting off motorcycles, others are about to ride, while a few are walking or driving past the gate. The guard stands attentively, checking those who enter the school. This scene highlights the rhythm of campus life, showing a space where different paths, purposes, and moments intersect all at once.",

  "pic4.png":
    "This photo captures a vibrant, candid scene within a university pavilion. The space is crowded with students involved in various activities, ranging from socializing and sharing laughs to browsing on their phones and capturing photographs.
"
};

// OPEN MODAL (used by BOTH images and buttons)
function openModal(imageSrc) {
  modalImg.src = imageSrc;
  modalDesc.textContent =
    descriptions[imageSrc] || "Campus moment captured beautifully.";
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