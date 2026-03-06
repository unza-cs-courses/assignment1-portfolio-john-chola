# CSC4035 Assignment 1: Responsive Portfolio Website

## Student Information
 **Name:** John Chola
 **Computer number:** 2021422054
 **Design Theme:** Modern Professional with Earth Tones ; a clean, accessible portfolio using a forest green and warm amber palette to convey trust and creativity. Includes dark/light mode toggle.

## CSS Techniques Used
 **CSS Custom Properties**  Defined color scheme, spacing, and typography in `:root` for easy maintenance.
 **Flexbox**  Used for navigation bar layout, skills list, and project card links.
 **CSS Grid** Used for the about section (image + text) and the projects grid (adapts from 1 to 4 columns).
 **Media Queries** Implemented mobile-first design with breakpoints at 768px, 1024px, and 1200px.
 **Responsive Design**  All elements scale gracefully; images are fluid, and typography adjusts at each breakpoint.
 **Accessibility Features**  Semantic HTML, alt text for images, form labels, and sufficient color contrast.

## Bonus Features Implemented (+10%)

### Dark/Light Mode Toggle (+3%)
 Added a theme toggle button in the header that switches between light and dark color schemes.
 Uses CSS custom properties to redefine colors when `.dark-theme` class is applied to the `html` element.
 Saves user preference in `localStorage` and respects system preference on first visit.
 Button icon changes  to indicate current mode.

###  CSS-Only Hamburger Menu (+2%)
 Implemented a responsive hamburger menu for mobile devices using the "checkbox hack"  **no JavaScript**.
 On screens smaller than 768px, the navigation links are hidden behind a hamburger icon.
 Clicking the icon toggles the menu with a smooth slide-in animation.
 Menu links are styled for easy tapping.

### CSS Animations/Transitions (+3%)
   Added subtle animations throughout for a polished feel:
   Sections fade in on page load.
   Project cards have hover effects (scale and shadow).
   Skill badges scale slightly on hover.
   Buttons have a ripple effect on hover.
   Navigation links have a smooth underline animation.
  Respects user motion preferences with `prefers-reduced-motion` media query.

###  Print Stylesheet (+2%)
 Created a print-friendly version of the portfolio that can double as a `resume`
Hides navigation, buttons, forms, and social links when printing.
 Displays URLs after links and ensures text is black on white for readability.
 Project cards appear with borders and skill badges as plain text.
 Includes a "References available upon request" note at the end.

## Challenges & Solutions

### 1. Fixed Header Overlapping Section Content
 **Challenge:** When clicking navigation links, the fixed header covered the top part of each section (e.g., "About Me" heading was hidden behind the header).
 **Solution:** Added `scroll-padding-top: 80px;` to the `html` element in CSS, which offsets the scroll position by the header's height.

### 2. Responsive Project Card Grid
 **Challenge:** Ensuring the project cards displayed in 1, 2, 3, and 4 columns across different screen sizes without breaking.
 **Solution:** Used a mobile-first CSS Grid approach: `grid-template-columns: 1fr` for mobile, then overrode with `repeat(2, 1fr)` at `768px`, `repeat(3, 1fr)` at `1024px`, and `repeat(4, 1fr)` at `1200px`.

### 3. Dark Mode Toggle Implementation
 **Challenge:** Making the theme switch smoothly and persist across page reloads.
 **Solution:** Used JavaScript to toggle a class on the `html` element, and stored the user's preference in `localStorage`. Also checked `prefers-color-scheme` for initial theme.

### 4. Hamburger Menu Without JavaScript
 **Challenge:** Creating a mobile menu that toggles without using JavaScript (as required for the bonus).
 **Solution:** Used the "checkbox hack"   a hidden checkbox controls the menu visibility via the `:checked` pseudo-class, with CSS transitions for smooth animation.

### 5. Print Stylesheet Conflicts
 **Challenge:** Ensuring the print version looked clean without breaking the layout.
 **Solution:** Added a dedicated `@media print` block that resets colors, hides unnecessary elements, and displays URLs after links.