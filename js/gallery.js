document.addEventListener("DOMContentLoaded", function () {
    // Define the base path for gallery images
    const basePath = "assets/images/gallery/";

    // Define image ranges for each year
    const imagesByYear = {
        "2025": Array.from({ length: 13 }, (_, i) => `photo${i + 1}.jpg`), // photo1.jpg to photo13.jpg
        "2024": Array.from({ length: 47 }, (_, i) => `photo${i + 1}.jpg`), // photo1.jpg to photo47.jpg
        "2023": Array.from({ length: 10 }, (_, i) => `photo${i + 1}.jpg`)  // photo1.jpg to photo10.jpg
    };

    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to create a gallery item
    function createGalleryItem(imageFile, year) {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = `${basePath}${year}/${imageFile}`;
        img.alt = `Gallery Image: ${imageFile.split(".")[0].replace(/_/g, " ")}`;
        img.onerror = function () {
            console.warn(`Image not found: ${imageFile}`);
            img.src = `${basePath}placeholder.jpg`; // Fallback placeholder image
        };

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const caption = document.createElement("p");
        caption.textContent = imageFile.split(".")[0].replace(/_/g, " "); // Use filename as caption
        overlay.appendChild(caption);

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);

        return galleryItem;
    }

    // Populate gallery grids for each year
    Object.keys(imagesByYear).forEach((year) => {
        const containerId = `gallery-grid-${year}`;
        const container = document.getElementById(containerId);

        if (container) {
            const shuffledImages = shuffleArray([...imagesByYear[year]]); // Shuffle images within the year
            shuffledImages.forEach((imageFile) => {
                const galleryItem = createGalleryItem(imageFile, year);
                container.appendChild(galleryItem);
            });
        }
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

    // Open lightbox when an image is clicked
    document.querySelectorAll(".gallery-item img").forEach((img) => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    // Close lightbox when clicking the close button or outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.style.display = "none";
        }
    });

    // Close lightbox with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.style.display === "flex") {
            lightbox.style.display = "none";
        }
    });
});