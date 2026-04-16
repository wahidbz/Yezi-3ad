# Yezi 3ad

Yezi 3ad is a production-ready, mobile-first prank soundboard web app with a Tunisian and Arabic identity.

## Highlights
- Arabic default with RTL layout
- English support with instant language toggle
- Offline-ready static deployment
- Original local sound assets in MP3 format
- Favorites, likes, search, prank modes, and mini games
- Ready for Netlify or GitHub Pages

## Project Structure
```text
yezi3ad/
│── index.html
│── app.js
│── style.css
│── lang.js
│── manifest.webmanifest
│── sw.js
│── assets/
│    ├── sounds/
│    ├── icons/
│    ├── images/
│── pages/
│    ├── home.html
│    ├── categories.html
│    ├── prank.html
│    ├── favorites.html
│    ├── profile.html
│── README.md
```

## Deploy
### Netlify
1. Drag and drop the project folder or ZIP contents into Netlify.
2. No build command is needed.
3. Publish as a static site.

### GitHub Pages
1. Upload all files to your repository root.
2. Enable GitHub Pages from the main branch.
3. Use `/index.html` as the entry page.

## Offline Notes
- All core pages and included MP3 files are local.
- A service worker caches assets after the first online load.
- The app also works as a local static bundle because all assets are bundled.

## Local Features Stored on Device
- Selected language
- Favorite sounds
- Community likes
- Game scores

## License Note
All included audio and visual assets in this package are synthetic/original placeholders generated for this app bundle, making the package easy to customize and deploy.
