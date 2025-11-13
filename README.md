# alx-project-0x00-setup

ALX Pro-frontend Next.js starter scaffold.

This repository contains a Next.js starter app inside the `alx-project-0x00` folder. The root of the workspace holds a small wrapper and project metadata; the actual Next.js application (including `package.json`) lives in the `alx-project-0x00` directory.

**Contents**
- `alx-project-0x00/` — Next.js app source (pages, public, styles, and `package.json`).

**Prerequisites**
- Node.js (v16+ recommended) and npm installed on Windows.

**Common tasks**

- Install dependencies (from the app folder):

```powershell
cd alx-project-0x00
npm install
```

- Start the development server (option A — change directory):

```powershell
cd alx-project-0x00
npm run dev -- -p 3000
```

- Start the development server (option B — run from repository root using `--prefix`):

```powershell
npm --prefix ./alx-project-0x00 install
npm --prefix ./alx-project-0x00 run dev -- -p 3000
```

**Build for production**

```powershell
cd alx-project-0x00
npm run build
npm run start
```

**Notes**
- If you see an `ENOENT` error referencing `package.json` when running `npm` from the repository root, make sure to either `cd` into `alx-project-0x00` or use the `--prefix` option as shown above.
- If you'd like the project to be runnable from the repository root without `--prefix`, you can add a root `package.json` that proxies scripts into the subfolder.

If you'd like, I can also:
- add a root `package.json` with convenience scripts,
- create a short CONTRIBUTING guide, or
- open a commit with this README update.

---
Updated README to include usage and run instructions for the Next.js app.
