/**
 * Main Entry Point
 * Solar Forecast ML Website
 */

// Import styles
import './styles/variables.css'
import './styles/reset.css'
import './styles/layout.css'
import './styles/components.css'

// Import page-specific styles based on current page
const currentPath = window.location.pathname;
if (currentPath.includes('wissensbasis')) {
    import('./styles/wissensbasis.css');
} else {
    import('./styles/home.css');
}

// Import modules
import { initTheme } from './js/theme.js'
import { initNavigation, initSmoothScroll } from './js/navigation.js'

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initSmoothScroll();
});
