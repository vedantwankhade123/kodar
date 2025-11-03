Modern Sliding Authentication Page

This is a single-page, fully responsive, animated sign-in/sign-up form built with only HTML, Tailwind CSS, and vanilla JavaScript.

It features a beautiful sliding animation that transitions between the "Sign In" and "Sign Up" forms without any page reloads.

This project is perfect for:

Learning advanced CSS transform and transition properties.

Understanding how to manage UI states with JavaScript and CSS classes.

A "drop-in" authentication page for any modern web project.

[Demo GIF]

(Recommended: Record a short GIF of the animation and place it here. For example: ![Auth Page Demo](demo.gif))

Features

Smooth Sliding Animation: The overlay panel slides left or right to reveal the correct form.

Single Page, No Reload: Both forms exist in the same HTML file, managed entirely by CSS and JavaScript.

Fully Responsive: Looks great on both desktop and mobile devices.

Built with Tailwind CSS: Utility-first classes make it easy to style and customize.

Minimal JavaScript: The entire effect is powered by toggling a single CSS class.

Social Logins: Includes icons for Google, Facebook, and GitHub (UI only).

Technologies Used

HTML5: For the core semantic structure and content.

CSS3 (via Tailwind CSS & Custom CSS): For all styling, layout, and animations.

Tailwind CSS: Used for utility classes (e.g., flex, rounded-2xl, bg-white).

Custom CSS (in <style>): Used for the complex animation logic, transforms, and z-index stacking.

Vanilla JavaScript (in <script>): To listen for click events and toggle the animation class.

How to Use

Since this project is self-contained in a single auth.html file, there's no build step required.

Clone the repository:

git clone [https://github.com/vedantwankhade123/kodar.git](https://github.com/vedantwankhade123/kodar.git)


Navigate to the folder:

cd kodar


Open the file:
Just double-click the auth.html file to open it in your favorite web browser.

Code & Animation Explained

This project uses a single-file approach, but it can be understood as three separate parts: HTML, CSS, and JavaScript.

1. Project Structure (auth.html)

The entire source code is in auth.html. Here's a breakdown of its main parts:

<head>:

Loads the "Inter" font from Google Fonts.

Loads the Tailwind CSS library via a <script> tag.

Contains the <style> tag, which holds all the custom CSS for the layout and animation.

<body>:

Uses Tailwind's flexbox utilities (flex, items-center, justify-center) to center the main container on the page.

<div id="main-container" ...>:

This is the main white, rounded card.

position: relative and overflow: hidden are the two most important properties. They establish the container as the "anchor" for all the moving parts and ensure that anything sliding "off-screen" is clipped and hidden.

The Form & Overlay divs:

.sign-in-container & .sign-up-container: These two divs hold the forms. They are positioned absolutely and stacked on top of each other.

.overlay-container: This div holds the sliding gradient panel. It's positioned on the right side by default.

<script> Tag:

Located at the bottom of the <body>.

This contains the JavaScript that finds the buttons and adds click listeners to toggle the animation.

2. The Animation Logic: How It Works

The entire animation is controlled by a single CSS class, .right-panel-active, which is added to or removed from the main container (#main-container) by JavaScript.

A. Default State (Sign In Visible)

Sign In Form: Is visible (z-index: 2) and sits on the left half (left: 0, width: 50%).

Sign Up Form: Is hidden (opacity: 0) and underneath the Sign In form (z-index: 1).

Overlay Panel: Is visible (z-index: 100) and sits on the right half (left: 50%, width: 50%).

B. Active State (.right-panel-active)
When the "Sign Up" button is clicked, the .right-panel-active class is added.

Forms Slide:

The Sign In Form is told to transform: translateX(100%), sliding it off-screen to the right.

The Sign Up Form is also told to transform: translateX(100%), sliding it from its hidden position on the left into the visible right-hand slot. Its opacity is set to 1 and z-index to 5 so it appears on top.

Overlay Slides:

The Overlay Panel is told to transform: translateX(-100%), sliding it from its position on the right all the way to the left.

The transition: all 0.6s ease-in-out property on the containers is what makes this change animate smoothly instead of just "snapping" into place.