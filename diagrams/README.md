# Rendering diagrams

The slides use the editable SVG files in this directory directly. Each SVG also has a PNG copy for applications that cannot display SVGs.

Install Node.js, npm and Google Chrome. From the repository root, install the renderer's dependency and regenerate the PNGs:

```sh
npm install --no-save --package-lock=false puppeteer-core
node scripts/render-diagrams.cjs
```

The script uses Chrome at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` by default. On other systems, or with Chrome installed elsewhere, set `CHROME_PATH` to its executable:

```sh
CHROME_PATH=/path/to/chrome node scripts/render-diagrams.cjs
```

If `puppeteer-core` is already installed elsewhere, set `PUPPETEER_MODULE` to its absolute directory instead of installing it again. A local installation needs no environment variable.

The script loads each SVG in headless Chrome at 1600 by 900 pixels and waits for its embedded Inter font to load. It overwrites the matching PNGs in this directory, so check the resulting images after changing labels or geometry.

The SVGs embed Inter so rendering does not depend on an installed font or a network connection. The SBOM diagram also embeds IBM Plex Mono for its JSON. Font files and their licenses are in [`assets/fonts/`](../assets/fonts/).
