# Positively Geared — September 2026 campaign

Five separately organised landing pages, based on the existing APP landing-page style and the supplied Positively Geared cover palette. Prepared 28 September 2026.

## Start here

Open **index.html** for a five-page preview directory. Every page folder has its own browser preview, GHL paste-ready file(s), page-specific assets folder and image map. Preview navigation is excluded from the GHL files.

| Folder | Purpose | Existing live path |
|---|---|---|
| 01-free-book | Free book | /freebestsellingbook |
| 02-discovery-call | Free discovery call | /discoverycallwithlloyd |
| 03-surprise-gift | Surprise gift | /suprisegift |
| 04-strategy-session | Strategy session | /strategycallwithlloyd |
| 05-congratulations | Congratulations | /congratulations-page |

## GHL installation

- Pages 02 and 05 use one **GHL.html** Custom HTML/JavaScript block.
- Pages 01, 03 and 04 use **GHL-before-checkout.html**, a native GHL order form, then **GHL-after-checkout.html**. Read the page's README for products and redirects. This retains GHL's secure payment processing, order bumps and fulfilment.
- Use full-width sections/rows with zero outer padding. CSS, font names, IDs, animations and JavaScript are scoped to this campaign.
- Configure each page's SEO title from its README; disable indexing while previewing.
- This task has not changed your live GHL funnel, products, workflows or payment account.

## Offer decisions

- Main offer: one free printed Positively Geared book, fully updated and revised, with $9 postage.
- Optional document bump: 2026 APP Property Intelligence Guide (37-page guide); price requires confirmation. The cover is included; the paid document is not publicly uploaded.
- Free discovery call: existing Calendly URL retained; approximately 30 minutes, with team coordination as described in the original funnel.
- Gift: existing $7 two-book bundle (Positively Geared + Buy Now). Confirm delivery/tax settings in the actual order summary.
- Paid strategy: existing $1,697 Your Next Move service, distinct from the complimentary call.
- Offer amounts were read from the supplied old funnel on 28 September 2026. They must match the actual GHL product settings before launch.

## Assets and GitHub

Public repository: https://github.com/jgagraphicdesigner/appimages/tree/main/positively-geared-funnel-2026-09

All design images load from direct public raw.githubusercontent.com URLs in this campaign folder. Source images were supplied by the user or carried over from the previous APP landing page. Each page's IMAGE-MAP.json identifies the exact image file.

- **shared-assets/brand/**: supplied APP logo and book illustration.
- **shared-assets/books/**: Positively Geared cover.
- **shared-assets/people/**: supplied Lloyd portrait.
- **shared-assets/media/**: the 46 media logos/programme artworks.
- **shared-assets/awards/**: seven existing award badges.
- **shared-assets/fonts/**: Manrope, Inter and DM Mono from the existing site.
- **01-free-book/assets/**: Property Intelligence Guide cover.
- **03-surprise-gift/assets/**: Buy Now book cover.
- **02-discovery-call/assets/**, **04-strategy-session/assets/** and **05-congratulations/assets/**: still frames from the corresponding Lloyd videos.
- **_source/**: optional editable source and build instructions; not needed for GHL installation.

The main book page uses the Morning Show YouTube interview already selected for the current APP landing page. It avoids the old two-book sales video because this page now offers one book. Other videos stream from the original funnel's public media hosting using its smaller 720p encodes (approximately 18 MB each instead of 200–400 MB originals). The reused discovery, strategy and thank-you recordings include graphics for the old two-book offer. Replace or re-record these introductions for the new one-book campaign before launch. Their existing content has not been edited. Video players require an HTTP/HTTPS page; when opened as a file, the YouTube area shows a linked thumbnail instead of an Error 153 player. The thumbnail is hosted in GitHub.

## Design and behaviour

Book yellow #ffca05, charcoal #211e20, white and light paper backgrounds. Original APP logo colours are preserved. Actual supplied book/portrait images are used. Two media-logo rows and the award strip move continuously, pause on hover/focus, and become manually scrollable for reduced motion. Entrance animations progressively enhance already-visible content. Native video controls support inline/mobile playback. No invented scarcity, unverified investment guarantees or fabricated book reviews are added. The client testimonial section is clearly labelled as service reviews.

## Sources

- https://www.auspropertyprofessionals-invest.com.au/freebestsellingbook
- https://www.auspropertyprofessionals-invest.com.au/discoverycallwithlloyd
- https://www.auspropertyprofessionals-invest.com.au/suprisegift
- https://www.auspropertyprofessionals-invest.com.au/strategycallwithlloyd
- https://www.auspropertyprofessionals-invest.com.au/congratulations-page
- https://www.auspropertyprofessionals.com.au/positivelygeared/
- https://www.auspropertyprofessionals.com.au/about-us/awards-testimonials/
- https://www.auspropertyprofessionals.com.au/news/media/
- User-supplied book, APP logo and Lloyd portrait files.
- User's existing APP_Property_Intelligence_Guide_v4_updated.pdf for the proposed bump.

## Launch checks

Confirm the bump price/document; insert the three native GHL order forms; confirm products, fulfilment and final totals; verify the existing calendar; review legacy videos for offer consistency; run test-mode purchases and redirects. HTML and visual checks do not constitute payment/fulfilment testing.
