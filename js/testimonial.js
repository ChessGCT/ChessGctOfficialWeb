document.addEventListener("DOMContentLoaded", function () {
    // Define the base path for testimonials
    const basePath = "assets/images/testimonials/";

    // Array of testimonials grouped by year
    const testimonials = {
        "2025": [
            {
                name: "Vishal N",
                dept: "CSE",
                quote: "The GCT Chess team is not just a team —it’s a family. From funny moments to epic wins, every moment is special.",
                role: "Men's Captain",
                year: "2025",
                image: "assets/images/testimonials/2025/vishal.webp"
            },
            {
                name: "Suba V",
                dept: "Civil",
                quote: "Grateful for the memories and moments we’ve shared. It’s been an unforgettable journey together.",
                role: "Women's Captain",
                year: "2025",
                image: "assets/images/testimonials/2025/suba.webp"
            },
            {
                name: "Abhinav K",
                dept: "EIE",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2025",
                image: "assets/images/testimonials/2025/abhinav.webp"
            },
            {
                name: "Charchil V",
                dept: "Mech",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2025",
                image: "assets/images/testimonials/2025/charchil.webp"
            },
            {
                name: "Hariharan S",
                dept: "CSE",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2025",
                image: "assets/images/testimonials/2025/hariharan.webp"
            },
            {
                name: "Marieswaran P",
                dept: "CSE",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2025",
                image: "assets/images/testimonials/2025/marieswaran.webp"
            },
            {
                name: "Soundarya",
                dept: "EEE",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2025",
                image: "assets/images/testimonials/2025/soundarya.webp"
            },
            {
                name: "Surya B",
                dept: "IBT",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2025",
                image: "assets/images/testimonials/2025/surya.webp"
            },
            {
                name: "Tamilan G",
                dept: "Mech",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2025",
                image: "assets/images/testimonials/2025/tamilan.webp"
            }
        ],
        "2024": [
            {
                name: "Yugesh Maithreyan",
                dept: "Civil",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Men's Captain",
                year: "2024",
                image: "assets/images/testimonials/2024/yugesh.webp"
            },
            {
                name: "Swethaa S",
                dept: "CSE",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Women's Captain",
                year: "2024",
                image: "assets/images/testimonials/2024/swethaa.webp"
            },
            {
                name: "Akshaya",
                dept: "Civil",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2024",
                image: "assets/images/testimonials/2024/akshaya.webp"
            },
            {
                name: "Dinesh",
                dept: "Civil",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2024",
                image: "assets/images/testimonials/2024/dinesh.webp"
            },
            {
                name: "John Bright",
                dept: "Civil",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2024",
                image: "assets/images/testimonials/2024/john_bright.webp"
            },
            {
                name: "Kishore",
                dept: "Civil",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2024",
                image: "assets/images/testimonials/2024/kishore.webp"
            },
        ],
        "2023": [
            {
                name: "Chinnasamy",
                dept: "Civil",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Men's Captain",
                year: "2024",
                image: "assets/images/testimonials/2023/member1.webp"
            },
            {
                name: "Narmatha",
                dept: "CSE",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Women's Captain",
                year: "2024",
                image: "assets/images/testimonials/2023/member1.webp"
            },
            {
                name: "Surya Prakash",
                dept: "Civil",
                quote: "Chess GCT has helped me grow as a person and a player.",
                role: "Member",
                year: "2025",
                image: "assets/images/testimonials/2023/member1.webp"
            },
        ]
    };

    // Function to create a testimonial card
    function createTestimonialCard(testimonial) {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");

        const img = document.createElement("img");
        img.src = testimonial.image;
        img.alt = testimonial.name;
        img.classList.add("testimonial-image");

        const quote = document.createElement("p");
        quote.textContent = `"${testimonial.quote}"`;

        const cite = document.createElement("cite");

        // Name
        const name = document.createElement("div");
        name.textContent = "- "+testimonial.name;
        name.classList.add("name");

        // Department
        const dept = document.createElement("div");
        dept.textContent = testimonial.dept;
        dept.classList.add("dept");

        // Role
        const role = document.createElement("div");
        role.textContent = testimonial.role;
        role.classList.add("role");

        // Append elements to the cite container
        cite.appendChild(name);
        cite.appendChild(dept);
        cite.appendChild(role);

        // Append all elements to the card
        card.appendChild(img);
        card.appendChild(quote);
        card.appendChild(cite);

        return card;
    }

    // Load testimonials dynamically into their respective year containers
    Object.keys(testimonials).forEach(year => {
        const containerId = `testimonial-grid-${year}`;
        const container = document.getElementById(containerId);

        if (container) {
            // Use Promise.all to handle image loading for all testimonials in the year
            const promises = testimonials[year].map(testimonial => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = testimonial.image;

                    img.onload = () => {
                        resolve(createTestimonialCard(testimonial));
                    };

                    img.onerror = () => {
                        console.warn(`Image not found: ${testimonial.image}`);
                        resolve(createTestimonialCard(testimonial)); // Still resolve with the card, even if image fails
                    };
                });
            });

            // Wait for all promises to resolve, then append cards in order
            Promise.all(promises).then(cards => {
                cards.forEach(card => {
                    container.appendChild(card); // Append cards in the order they were resolved
                });
            });
        }
    });
});