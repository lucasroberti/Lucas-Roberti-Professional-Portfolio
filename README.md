# 👨‍💻 Lucas Roberti — Personal Portfolio

A modern, responsive, and dark-themed web portfolio built to showcase my projects, skills, and contact information. The layout was designed with a focus on usability, featuring a *scroll-snap* effect for smooth navigation between sections on desktop, while adapting perfectly to a free-scrolling experience on mobile devices.

## ✨ Features

* **Responsive Design:** Mobile-friendly layout ensuring great readability and usability across all devices.
* **Interactive Navigation (Scroll-Snap):** Smooth transitions and snap-to-screen sections on desktop, complete with floating navigation buttons.
* **Accessibility:** Implementation of *skip-links* to jump straight to the main content and `aria` attributes for better screen reader support.
* **UI/UX:** Minimalist color palette (dark background with `#e63946` red accents) and the use of CSS masks for profile image styling.

## 🛠️ Technologies & Tools

* **HTML5:** Semantic content structure.
* **CSS3:** Native variables (Custom Properties), Flexbox, CSS Grid, media queries, and mask effects (`mask-image`).
* **JavaScript (Vanilla):** Logic to identify the currently visible section on the screen and dynamically update the floating navigation buttons.
* **Devicon:** Icon library used for the tech stack section (C, Java, Spring Boot, PostgreSQL, etc.).

## 📂 Project Structure

* `index.html`: Main structure divided into sections (`#home`, `#about`, `#stack`, `#projects`, `#contact`).
* `style.css`: Global page styling, theme variables, and responsiveness rules.
* `script.js`: Script responsible for calculating page scroll and toggling the display of the navigation buttons based on the user's position.
* `/images`: Directory containing the profile picture (`my-photo.png`) and the dynamic background (`home-bg.jpg`).

## 🚀 How to Run

Since this is a static web project, there is no need for build tools or dependency installations.

1. Clone this repository:
   ```bash
   git clone [https://github.com/lucasroberti/your-repo-name.git](https://github.com/lucasroberti/your-repo-name.git)
