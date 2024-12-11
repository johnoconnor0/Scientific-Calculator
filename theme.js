// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById('theme-button');

    // Set initial theme based on saved preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
    themeButton.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    // Function to toggle the theme
    function toggleTheme() {
        const currentTheme = document.body.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.dataset.theme = newTheme;
        themeButton.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

        // Save theme preference in localStorage
        localStorage.setItem('theme', newTheme);
    }

    // Attach event listener to the button
    themeButton.addEventListener('click', toggleTheme);
});
