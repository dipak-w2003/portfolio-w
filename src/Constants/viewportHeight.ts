export const setViewportHeight = (): void => {
    // Calculate 1% of the viewport height
    const vh: number = window.innerHeight * 0.01;

    // Set it as a custom CSS variable
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Initialize on load
setViewportHeight();

// Recalculate on window resize
window.addEventListener('resize', setViewportHeight);
