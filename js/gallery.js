document.addEventListener("DOMContentLoaded", function () {
    // Generate an array of filenames from photo1.jpeg to photo45.jpeg and photo46.jpg to photo62.jpg
    const imageFiles = [];
    for (let i = 1; i <= 62; i++) {
        if (i <= 45 && i!=12) {
            imageFiles.push(`photo${i}.jpeg`); // Use .jpeg for photos 1 to 45
        } else if(i!=12){
            imageFiles.push(`photo${i}.jpg`); // Use .jpg for photos 46 to 62
        }
    }

    // Shuffle the array to randomize the order
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Get the gallery grid container
    const galleryGrid = document.getElementById("gallery-grid");

    // Shuffle the images
    const shuffledImages = shuffleArray(imageFiles);

    // Append images to the gallery
    shuffledImages.forEach(imageFile => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = `assets/images/gallery/${imageFile}`;
        img.alt = "Gallery Image";

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const caption = document.createElement("p");
        caption.textContent = imageFile.split(".")[0].replace(/_/g, " "); // Use filename as caption
        overlay.appendChild(caption);

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);
        galleryGrid.appendChild(galleryItem);
    });

    // Lightbox functionality
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);

    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×"; // Close button (X symbol)
    closeBtn.id = "close-lightbox";
    lightbox.appendChild(closeBtn);

    galleryGrid.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            const imgSrc = e.target.src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = "flex";
        }
    });

    // Close lightbox when clicking the close button or outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.style.display = "none";
        }
    });
});