// JavaScript to add the "Essayer Zils" button to the header
// DISABLED: Now using Liquid snippet instead
/*
document.addEventListener('DOMContentLoaded', function () {
    // Find the header icons container
    const headerIcons = document.querySelector('.header__icons');

    if (headerIcons) {
        // Create the button
        const tryZilsButton = document.createElement('a');
        tryZilsButton.href = '/pages/try-zils'; // Adjust URL as needed
        tryZilsButton.className = 'try-zils-button';
        
        // Apply styles directly to ensure they take effect
        tryZilsButton.style.fontWeight = '400';
        tryZilsButton.style.letterSpacing = '0.04em';

        // Create a span for the text to better control its styling
        const textSpan = document.createElement('span');
        textSpan.textContent = 'Essayer Zils';
        textSpan.style.fontWeight = '400';
        textSpan.style.letterSpacing = '0.04em';
        
        // Add the text span to the button
        tryZilsButton.appendChild(textSpan);

        // Add the arrow icon
        const arrowIcon = document.createElement('span');
        arrowIcon.className = 'arrow-icon';
        tryZilsButton.appendChild(arrowIcon);

        // Insert the button at the beginning of the icons container
        headerIcons.insertBefore(tryZilsButton, headerIcons.firstChild);
    }
});
*/ 