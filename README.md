# VOO Website

Static website for the University of Western Ontario chapter of the Kappa Alpha Literary Society, also known as VOO.

This project uses plain HTML, CSS, and minimal JavaScript with Vite for local development and production builds. It is intentionally simple so a human developer can work on it without learning a specialized framework.

## Project Structure

```txt
public/
  images/              Static images and logos
src/
  scripts/             Shared JavaScript, if needed
  styles/              Main stylesheet
index.html             Homepage
about.html             About VOO
events.html            Events and ticket/RSVP concept
join.html              Join / Rush
alumni.html            Alumni
support.html           Support VOO
lodge.html             The Lodge
leadership.html        Leadership
news.html              News / Chapter Letters
contact.html           Contact / Questions
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Vercel Settings

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Notes

The Events page includes a front-end ticket and RSVP checkout concept. It shows prices, QR code confirmation language, email confirmation language, and guest-list language, but it does not connect to a payment processor, database, or backend.
