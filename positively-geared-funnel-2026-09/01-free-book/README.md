# 01 — Free book

Get Positively Geared Free | Just $9 Postage

## Files

- **index.html**: full browser preview, with a preview navigator.
- **GHL-before-checkout.html**: paste into the first Custom HTML/JavaScript element.
- **GHL-after-checkout.html**: paste into a second Custom HTML/JavaScript element below the native checkout.
- **IMAGE-MAP.json**: every image used on this page and its public GitHub URL.
- **assets/**: page-specific assets; common assets are in **../shared-assets/**.

## GHL path

Use **/freebestsellingbook** on **www.auspropertyprofessionals-invest.com.au**. Links between the live HTML files use these five existing paths. Local preview files use relative links. If deploying to another domain or paths, replace the campaign links in all five pages before launch.

## Installation

Use full-width sections and one-column rows with zero padding/margins and no fixed maximum width. Set page background to #fffdf7 and set the page title to “Get Positively Geared Free | Just $9 Postage”. Do not paste index.html into GHL; it includes preview-only controls.

1. Add the BEFORE HTML block.
2. Add a native GHL order form in the next full-width section (yellow #ffca05 background; row max-width about 760px).
3. Add the AFTER HTML block beneath it. Both HTML blocks are complete markup; do not open a div in one block and close it in another.
4. Add the custom class **pg-native-checkout** to the native checkout container. The optional styling file is ../GHL-NATIVE-CHECKOUT.css.
5. Configure the product, payment gateway, tax/shipping treatment, receipt, fulfilment and redirect in GHL.

**Book order:** one Positively Geared printed book at $0 with a $9 postage charge (AUD). Do not accidentally retain the old two-book main product. The proposed companion document is the 2026 APP Property Intelligence Guide. Its price is awaiting the user's answer; confirm price and product before enabling the order bump. Leave the bump unchecked by default. Deliver the PDF through the authorised post-purchase workflow; the paid PDF itself is not in the public image repository. Redirect a successful book order to /discoverycallwithlloyd.

The preview does not process payments, store card details, submit contacts or simulate successful orders. A static HTML code block cannot recreate GHL's secure order-form backend. Never use the disabled preview form as a live payment form. Test each completed native GHL checkout with the payment provider's test mode before launching.


## Original reference

https://www.auspropertyprofessionals-invest.com.au/freebestsellingbook

## Next page

../02-discovery-call/index.html
