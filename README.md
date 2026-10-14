# The Questions Before

Interactive mathematics history built with React, Tailwind CSS, Lucide React, and Vite.

## Upload to GitHub

1. Extract this ZIP on your computer.
2. Create a public GitHub repository named `the-questions-before`. Initialize with a README so the upload menu is visible. Public repositories allow free GitHub Pages hosting.
3. Choose Add file → Upload files. Upload the CONTENTS of the extracted folder, not the ZIP or enclosing folder. Preserve the src, public, and .github folders. package.json and index.html must be in the repository root.
4. Commit to main. Confirm .github/workflows/deploy.yml was uploaded. If skipped, use Add file → Create new file, name it .github/workflows/deploy.yml, paste the contents of the included file, and commit.
5. Go to Settings → Pages → Build and deployment → Source → GitHub Actions.
6. Open Actions → Deploy website to GitHub Pages → Run workflow. After success, Settings → Pages shows your live URL.

Expected URL: https://YOUR-USERNAME.github.io/the-questions-before/
Uploading the source alone does not publish the website. Complete the Pages steps. A public repository and Pages site are visible to everyone.

## Local development

Install Node.js 22. In this folder, run:

```sh
npm ci
npm run dev
```

Run `npm run build` to generate the static `dist` folder. Relative asset paths support GitHub Pages project URLs. No backend or secret keys are required.

## Content and credits

Concept and design direction: Giorgi Aplakov. Implementation and initial educational text developed with AI assistance. Review educational content and test with readers before sharing widely.

Portraits load from Wikimedia Commons and require internet access. Image credits and biography references appear in each profile. Early figures are shown in historical paintings rather than photographs.

## Included features

Three visual explorations, hands-on challenges with hints, six mathematician profiles, a surprise question picker, and browser-local discovery progress.

This portable export excludes original hosting configuration, Git history, credentials, node_modules, and compiled output.
