// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return; // prevent errors if button missing

    // Check for saved preference or system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark-theme');
        themeToggle.textContent = 'Light-mode'; // sun icon for light mode toggle
    } else {
        themeToggle.textContent = 'Dark-mode'; // moon icon for dark mode toggle
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        console.log('Button clicked');
        document.documentElement.classList.toggle('dark-theme');
        
        // Update icon and save preference
        if (document.documentElement.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light-mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = 'Dark-mode';
            localStorage.setItem('theme', 'light');
        }
    });
});