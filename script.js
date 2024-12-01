const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const galleryImages = document.querySelectorAll(".gallery img");
    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modal.style.display = "block";
        modalImg.src = galleryImages[currentIndex].src;
        captionText.innerHTML = galleryImages[currentIndex].alt || '';
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImg.src = galleryImages[currentIndex].src;
        captionText.innerHTML = galleryImages[currentIndex].alt || '';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        modalImg.src = galleryImages[currentIndex].src;
        captionText.innerHTML = galleryImages[currentIndex].alt || '';
    }

    galleryImages.forEach((img, index) => {
        img.onclick = function () {
            openModal(index);
        }
    });

    document.querySelector(".close").onclick = closeModal;

    document.addEventListener("keydown", (event) => {
        if (modal.style.display === "block") {
            if (event.key === "ArrowLeft") {
                prevImage();
            } else if (event.key === "ArrowRight") {
                nextImage();
            } else if (event.key === "Escape") {
                closeModal();
            }
        }
    });