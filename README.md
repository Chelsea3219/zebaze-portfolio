# Chelsea Zebaze — Portfolio

My personal portfolio site, showcasing my work as a full-stack software engineer. It includes case studies of my projects, my background, and my resume.

**Live site:** [zebaze-portfolio.vercel.app](https://zebaze-portfolio.vercel.app) <!-- update with your final URL -->

## Featured Projects

- **PrepForward:** an adaptive SAT learning platform with an OCR/ETL pipeline for 500+ questions, a layered PostgreSQL warehouse, and analytics that personalize practice. Built with Next.js, FastAPI, PostgreSQL (Supabase), Apache Airflow, and Cloudinary.
- **MapsModes:** a city-scale mobility analytics platform that scores walkability, bikeability, and transit access across Cleveland. I led the 7-factor Bike Score model. Built with Python, GeoPandas, FastAPI, AWS Lambda, React, and Mapbox GL JS.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with a custom theme
- **Fonts:** Heebo via `next/font`
- **Icons:** CoreUI Icons, Lucide React
- **Images:** `next/image`
- **Hosting:** Vercel

## Pages

| Route | Description |
| --- | --- |
| `/` | Introduction, resume download, and project previews |
| `/about` | My background, strengths, and interests |
| `/projects/prepforward` | PrepForward case study |
| `/projects/mapsmodes` | MapsModes case study |

## Project Structure

```
├── app/            # Routes, layouts, and global styles
├── components/     # Reusable UI components (Navbar, Footer, CircularImage, ...)
├── public/         # Images, project screenshots, and resume PDF
└── utils/          # Shared data and helpers
```

## Running Locally

Requires Node.js 20 or later.

```bash
git clone https://github.com/Chelsea3219/zebaze-portfolio.git
cd zebaze-portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm start
```

## Deployment

The site deploys automatically to Vercel on every push to `main`. No environment variables are required.

## Contact

- **Email:** [chelseadonchi@gmail.com](mailto:chelseadonchi@gmail.com)
- **LinkedIn:** [linkedin.com/in/chelsea-zebaze](https://www.linkedin.com/in/chelsea-zebaze/)
- **GitHub:** [github.com/Chelsea3219](https://github.com/Chelsea3219)
