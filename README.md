# Simple React Test Site

This site is built for learning purposes and for studying React structure.

# Features

- Displays a "Hello World" message.
- The user can enter their name to receive a personalized greeting.

# Tech Stack

- Node v24.18.0
- React
- Vite
- CSS
- HTML
- TypeScript
- Playwright

## Installation & Setup

```
git clone https://github.com/DraG0nCaster/project-2026.git

cd project-2026

npm install

npm run dev
```

# Project Structure

```
src/                # application source code
├── assets/          
├── components/      
│   └── NameInput.tsx # component for entering the user name
├── pages/           
│   └── Home.tsx     # main page of the app
├── App.tsx          # root application component
└── main.tsx         # Vite/React entry point
```

# Commands for developers

Linter

```
npm run lint
```

Run component tests

```
npm run test-ct
```

Run E2E tests

```
npm run test-ct
```