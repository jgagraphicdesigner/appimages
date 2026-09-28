# Optional editable source

The finished HTML files work without installing anything. These files are for future design changes.

- **build.cjs**: page copy, structure, links, offers and GHL fragment generation.
- **build-ghl-kit.cjs**: deployment snippets and the GHL copy-and-paste installer.
- **campaign.css**: styles before campaign scoping.
- **campaign.js**: animations, internal links and the calendar event handler.
- **assets.json**: hosted images and fonts.
- **previous-content.json**: media, awards and client review markup carried over from the previous APP landing page.

To rebuild, open a terminal in this folder and run `npm install`, then `npm run build`. The build writes the page HTML, image maps and setup instructions to the parent campaign folder. It does not upload files to GitHub, alter GHL or submit payments. Edit offer text and configuration together so the page copy, totals and native GHL products remain consistent.
