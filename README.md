<div align="center">

# anilcandev

**A terminal-themed personal portfolio website built with Next.js 15 & React 19.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Live Site](https://anilcan.dev) · [GitHub](https://github.com/anilcanipsalali)

</div>

---

## Overview

`anilcandev` is a browser-based terminal emulator that serves as my personal portfolio. Instead of a traditional layout, visitors interact with the site through terminal commands — asking for my bio, projects, resume, and more.

## Features

- **Terminal UI** — fully functional command-line interface in the browser
- **Command history** — navigate past commands with ↑ / ↓ arrow keys
- **Tab completion** — auto-complete available commands with `Tab`
- **Keyboard shortcuts** — `Ctrl+L` to clear, `Ctrl+C` to cancel
- **GitHub integration** — live project list pulled from the GitHub API
- **Weather** — real-time weather for any city via `wttr.in`
- **Quotes** — random inspirational quotes via a server-side proxy
- **Theme system** — multiple color themes (Nord, Dracula, Gruvbox, Monokai, Solarized…)
- **Dark/Light mode** — automatically follows your system preference
- **Responsive** — works on mobile and desktop
- **Docker-ready** — multi-stage optimized production image

## Available Commands

| Command | Description |
|---|---|
| `help` | List all available commands |
| `about` | Short bio |
| `sumfetch` | Display summary (neofetch-style) |
| `projects` | List public GitHub repositories |
| `resume` | Open resume / LinkedIn |
| `email` | Open mail client |
| `github` | Open GitHub profile |
| `linkedin` | Open LinkedIn profile |
| `google <query>` | Search Google |
| `weather <city>` | Show weather for a city |
| `quote` | Display a random quote |
| `whoami` | Display current user |
| `echo <text>` | Print text |
| `ls` | List (fake) directories |
| `cd` | Change directory (you can't 😄) |
| `date` | Show current date/time |
| `repo` | Open this repository |
| `clear` / `cls` | Clear the terminal |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Linting | ESLint 9 (flat config) |
| Formatting | Prettier 3 |
| Container | Docker (node:22-alpine, multi-stage) |

## Getting Started

### Prerequisites

- Node.js `>=20`
- npm `>=10`

### Installation

```bash
# Clone the repository
git clone https://github.com/anilcanipsalali/anilcandev.git
cd anilcandev

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Configuration

All personal information is managed through [`config.json`](./config.json):

```jsonc
{
  "title": "anilcandev",
  "name": "Your Name",
  "ps1_username": "guest",
  "ps1_hostname": "yoursite",
  "email": "you@example.com",
  "resume_url": "https://...",
  "repo": "https://github.com/yourusername",
  "readmeUrl": "https://raw.githubusercontent.com/...",
  "social": {
    "github": "yourusername",
    "linkedin": "yourusername"
  },
  "colors": { ... }   // theme colors
}
```

### Themes

Additional themes are available in [`themes.json`](./themes.json):
`default` · `gruvbox` · `dracula` · `Nord` · `Monokai` · `Mocha` · `Solarized` · `Paraiso`

To apply a theme, copy the desired color palette into the `colors` field of `config.json`.

## Docker

```bash
# Build
docker build -t anilcandev .

# Run
docker run -p 3000:3000 anilcandev
```

Or with Docker Compose:

```bash
docker-compose up
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── quote/        # Server-side quote proxy (GET /api/quote)
│   │       └── route.ts
│   ├── layout.tsx        # Root layout, metadata, global CSS
│   ├── page.tsx          # Main terminal page ('use client')
│   └── not-found.tsx     # 404 redirect
├── components/
│   ├── Ps1.tsx           # Prompt display (user@host:$)
│   ├── input.tsx         # Terminal input with keyboard handling
│   └── history/
│       ├── History.tsx   # Rendered command history
│       ├── hook.ts       # useHistory state management
│       └── interface.ts  # History type definition
├── utils/
│   ├── api.ts            # External API calls (GitHub, weather, quotes)
│   ├── shell.ts          # Command dispatcher
│   ├── commandExists.ts  # Command validation
│   ├── tabCompletion.ts  # Tab autocomplete logic
│   └── bin/
│       ├── commands.ts   # Built-in commands
│       ├── api_commands.ts # API-backed commands
│       ├── sumfetch.ts   # Summary display
│       └── index.ts      # Re-exports
└── styles/
    └── global.css        # Global styles + Tailwind directives
```

## License

[MIT](./LICENSE) © [Anılcan İpsalalı](https://anilcan.dev)
