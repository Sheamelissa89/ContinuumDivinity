# Continuum Divinity

A sacred space for healing, accountability, self-discovery, spiritual awakening, and personal transformation.

Continuum Divinity was created from lived experience and the belief that healing can lead us back to our own truth, voice, and personal power.

**Visit the website:** [continuumdivinity.com](https://continuumdivinity.com)

## Return to Yourself

The five-volume series takes readers from awareness through transformation. Each volume combines a guide and self-paced workbook reflections in one downloadable PDF. *Becoming Yourself* is part of Volume 2, *I Choose*.

| Volume | Focus | Price (USD) |
| --- | --- | ---: |
| 1. [I See](https://payhip.com/b/J2A14) | Awareness | $17.99 |
| 2. [I Choose](https://payhip.com/b/2jsL1) | Discernment | $17.99 |
| 3. [I Embody](https://payhip.com/b/2xu9H) | Embodiment | $17.99 |
| 4. [I Integrate](https://payhip.com/b/1yG0b) | Integration | $17.99 |
| 5. [I Am Becoming](https://payhip.com/b/JXATS) | Transformation | $17.99 |
| [Complete Return to Yourself Collection](https://payhip.com/b/sRk3P) | All five volumes in one downloadable PDF | $69.99 |

The five volumes total $89.95 when purchased individually. The complete collection saves $19.96. The current offerings are digital downloads.

## Website Features

- Responsive purple-and-gold design for desktop, tablet, and mobile, with fixed navigation and a mobile menu.
- Interactive journey wheel that switches between five product panels. Previous and Next wrap through the series, and Return to Wheel scrolls back to the selector.
- Pause and resume controls for the wheel animation, system reduced-motion support, and visible keyboard focus indicators.
- [Collection previews](https://continuumdivinity.com/previews.html) with five embedded sample PDFs, direct links to open each full sample, and links to the corresponding Payhip listings.
- Expandable FAQs, a [founder page](https://continuumdivinity.com/about.html), an [information and policies page](https://continuumdivinity.com/policies.html), and email, phone, and GitHub contact links.

## Architecture and Checkout

The storefront is a static, multi-page site built with HTML5, CSS3, and vanilla JavaScript. The pages share `style.css` and `script.js`. CSS handles layout, responsive styles, and animation. JavaScript controls mobile navigation, product selection, rotation, and the footer year. Cormorant Garamond and Montserrat are loaded from Google Fonts.

Purchase links send visitors to the corresponding Payhip product page. Payhip hosts checkout, processes payments, and provides access to the purchased PDF. The storefront requires no backend, database, payment credentials, or build step.

## Project Files

| File or folder | Purpose |
| --- | --- |
| `index.html` | Homepage, journey wheel, volume details, complete collection, FAQ, and contact links. |
| `about.html` | Founder story, mission, and series overview. |
| `previews.html` | Volume summaries, sample PDF embeds, and purchase links. |
| `policies.html` | Digital products, checkout and delivery, and order support. |
| `style.css` | Shared styling, responsive layouts, and animation. |
| `script.js` | Shared site interactions. |
| `images/` | Product covers and other visual assets. |
| `previews/` | Five public sample PDFs. |
| `CNAME` | GitHub Pages custom domain configuration. |
| `LICENSE` | Repository license terms. |
| `README.md` | Project overview and setup instructions. |

## Local Preview

Clone the repository and start a local server from the project root using Python 3.

```bash
git clone https://github.com/Sheamelissa89/ContinuumDivinity.git
cd ContinuumDivinity
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser. Use `python3` if that is the Python 3 command on your system. Press **Ctrl+C** to stop the server. Google Fonts and Payhip require internet access.

## Deployment and Maintenance

GitHub Pages serves the static site at [continuumdivinity.com](https://continuumdivinity.com). The root `CNAME` file records the custom domain.

1. Update prices, product descriptions, and Payhip links in both `index.html` and `previews.html` as applicable, and keep this README in sync.
2. Put cover images in `images/` and public sample PDFs in `previews/`. Match filename capitalization in the HTML references.
3. Preview locally on desktop and mobile. Check navigation, the journey wheel, PDF previews, and the Payhip listing links.
4. Commit and push the changes to the GitHub Pages publishing branch. Verify the live site after Pages publishes.

## Creator

Created by **Shea Mullin**, founder of Continuum Divinity.

- **Website:** [continuumdivinity.com](https://continuumdivinity.com)
- **Email:** [Shea_melissa89@yahoo.com](mailto:Shea_melissa89@yahoo.com)
- **GitHub:** [Sheamelissa89](https://github.com/Sheamelissa89)

## License

See the [LICENSE](LICENSE) file for repository license terms.
