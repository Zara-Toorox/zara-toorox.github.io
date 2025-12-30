/**
 * Main Entry Point
 * Solar Forecast ML Website
 */

// Import modules
import { initTheme } from './js/theme.js'
import { initNavigation, initSmoothScroll } from './js/navigation.js'

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initSmoothScroll();
});
