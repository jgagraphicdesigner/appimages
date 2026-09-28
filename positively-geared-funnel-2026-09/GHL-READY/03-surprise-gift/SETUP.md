# Surprise gift — GHL placement

Published page path: /suprisegift

Create this as a funnel step under Sites → Funnels. Use full-width sections and one-column rows. Turn on Allow Rows to Take Entire Width where available, and set section, row, column and code-element padding/margins to 0. Use #ffffff as the page background.

1. Add a Custom HTML/JavaScript element and paste 01-PASTE-ABOVE-CHECKOUT.html.
2. Add a separate native GHL One Step Order or Two Step Order element below it. Use a yellow #ffca05 section with 24px bottom padding, and a centred row up to 760px wide. Keep the order form itself white.
3. Add another Custom HTML/JavaScript element and paste 03-PASTE-BELOW-CHECKOUT.html.
4. Attach products/prices to this funnel step in its Products tab, and connect the payment gateway.
5. Configure the native form’s successful-payment action to the next page: /strategycallwithlloyd. A button click alone must not trigger the next paid step.

Attach the $7 Positively Geared + Buy Now gift bundle. Require the recipient’s delivery address. Confirm and disclose any additional delivery/tax charge before payment. Configure gift fulfilment.

Optional styling: assign pg-native-checkout to the native checkout container and paste ../NATIVE-CHECKOUT-STYLES.css into the page’s Custom CSS setting. This CSS contains no style tags.

All internal step links in these kit files use the paths above on the current domain. To use different paths or full URLs, set them in ../START-HERE.html and use its Copy code buttons. Test navigation on your published or staging funnel domain; GHL editor preview URLs can differ.

These are HTML fragments, not complete HTML documents. Do not paste index.html from the preview folders. Do not iframe the whole page. Paste each complete fragment into its own code element. Styles and scripts are included in each fragment; do not also duplicate them in Tracking Code.

Code is ready to paste. The live GHL account, checkout, products and fulfilment must be configured and tested before launch.
