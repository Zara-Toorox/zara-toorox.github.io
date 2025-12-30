/**
 * Theme Toggle Module
 * Handles Dark/Light mode switching with localStorage persistence
 */

const THEME_KEY = 'sfml-theme';

/**
 * Get the current theme preference
 * Priority: localStorage > system preference > dark (default)
 */
function getThemePreference() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) {
        return stored;
    }

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }

    return 'dark';
}

/**
 * Apply theme to document
 */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update toggle button icons
    const toggleBtns = document.querySelectorAll('.theme-toggle');
    toggleBtns.forEach(btn => {
        const sunIcon = btn.querySelector('.icon-sun');
        const moonIcon = btn.querySelector('.icon-moon');
        if (sunIcon && moonIcon) {
            sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
            moonIcon.style.display = theme === 'light' ? 'block' : 'none';
        }
    });
}

/**
 * Toggle between dark and light theme
 */
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || getThemePreference();
    const newTheme = current === 'dark' ? 'light' : 'dark';

    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
}

/**
 * Initialize theme functionality
 */
export function initTheme() {
    // Apply initial theme (before page fully loads to prevent flash)
    const theme = getThemePreference();
    applyTheme(theme);

    // Add click handlers to toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? 'light' : 'dark');
        }
    });
}

// Apply theme immediately to prevent flash of wrong theme
const initialTheme = getThemePreference();
document.documentElement.setAttribute('data-theme', initialTheme);
