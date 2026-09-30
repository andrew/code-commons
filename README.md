# CodeCommons presentation

My presentation, *Unified Data Model and Knowledge Graph*, for CodeCommons on 28 September 2026. I cover how ecosyste.ms package identities and metadata connect to source archived by Software Heritage.

- [View the slides as a PDF](slides.pdf)
- [Download the PowerPoint deck](slides.pptx)
- [Read or edit the Markdown source](slides.md), including speaker notes

## Build the slides

Install Node.js, npm and Google Chrome, then install [Marp CLI](https://github.com/marp-team/marp-cli):

```sh
npm install --global @marp-team/marp-cli
```

Run these commands from the repository root to replace the PDF and PowerPoint exports:

```sh
marp slides.md --pdf --allow-local-files -o slides.pdf
marp slides.md --pptx --allow-local-files -o slides.pptx
```

Marp loads the custom theme in `themes/codecommons.css` through `.marprc.yml`. The `--allow-local-files` flag lets it include the diagrams and logos stored in the repository. If Chrome is not detected, pass `--browser-path` with the path to its executable.

Edit `slides.md` to change the deck; the PowerPoint export contains rendered slide images and speaker notes. The SVG files in `diagrams/` are editable sources, and the slides use them directly. See the [diagram rendering instructions](diagrams/README.md) to regenerate their PNG copies.

## License

Copyright 2026 Andrew Nesbitt. Original presentation content, diagrams and documentation are licensed under [CC BY 4.0](LICENSE). Code in `scripts/` and `themes/` is licensed under the [MIT License](LICENSE-CODE).

Bundled fonts retain their own licenses: [Inter](assets/fonts/Inter-LICENSE.txt) and [IBM Plex Mono](assets/fonts/IBMPlexMono-LICENSE.txt), including copies embedded in SVGs and CSS. Third-party logos and the supplied `slides-codecommons-template.pptx` are excluded from the licenses above.
