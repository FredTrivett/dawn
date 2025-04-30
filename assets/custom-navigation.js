// JavaScript to forcibly apply bold font weight to current page menu items
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        // Function to apply bold weight to current page menu items
        function applyCurrentPageStyles() {
            // Find all elements with aria-current="page" attribute
            const currentPageItems = document.querySelectorAll('[aria-current="page"]');

            // Apply styles to each element
            currentPageItems.forEach(function (item) {
                item.style.fontWeight = '600';
                item.style.fontVariationSettings = "'wght' 600";

                // Also apply to span children
                const spans = item.querySelectorAll('span');
                spans.forEach(function (span) {
                    span.style.fontWeight = '600';
                    span.style.fontVariationSettings = "'wght' 600";
                });
            });

            // Find elements with .header__active-menu-item class
            const activeItems = document.querySelectorAll('.header__active-menu-item');
            activeItems.forEach(function (item) {
                item.style.fontWeight = '600';
                item.style.fontVariationSettings = "'wght' 600";

                // Also apply to parent elements
                let parent = item.parentNode;
                if (parent) {
                    parent.style.fontWeight = '600';
                    parent.style.fontVariationSettings = "'wght' 600";
                }
            });
        }

        // Run once on page load
        applyCurrentPageStyles();

        // Use a more efficient mutation observer configuration
        const observer = new MutationObserver(function (mutations) {
            let shouldApply = false;
            // Check if any relevant mutations occurred
            for (let i = 0; i < mutations.length; i++) {
                if (mutations[i].type === 'childList' ||
                    (mutations[i].type === 'attributes' &&
                        (mutations[i].attributeName === 'aria-current' ||
                            mutations[i].attributeName === 'class'))) {
                    shouldApply = true;
                    break;
                }
            }

            if (shouldApply) {
                applyCurrentPageStyles();
            }
        });

        // Observe only what we need
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['aria-current', 'class']
        });
    });
})(); 