
  # DealoAgent.ai - Landing Page

  AI-powered CRM platform for modern B2B sales teams.

  This is the landing page for DealoAgent.ai. The original project is available at https://www.figma.com/design/N2hJtGMJsAbI6gd445px81/AI-CRM-Logo-and-Website.

  ## 🚀 Quick Start

  ### Development

  1. Install dependencies:
  ```bash
  npm install
  ```

  2. Start the development server:
  ```bash
  npm run dev
  ```

  The site will be available at `http://localhost:3000` and should open automatically in your browser.

  ### Production Build

  Build the static site for production:
  ```bash
  npm run build
  ```

  The production files will be generated in the `build/` directory.

  ## 📦 GitHub Pages Deployment

  This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

  ### Setup Instructions

  1. **Push to GitHub:**
  ```bash
  git add .
  git commit -m "Initial commit"
  git push origin main
  ```

  2. **Enable GitHub Pages:**
     - Go to your repository Settings
     - Navigate to "Pages" section
     - Under "Source", select "GitHub Actions"
     - Save the changes

  3. **Automatic Deployment:**
     - Every push to the `main` branch will automatically trigger a deployment
     - The workflow is defined in `.github/workflows/deploy.yml`
     - You can monitor the deployment progress in the "Actions" tab

  4. **Custom Domain (Optional):**
     - If using a custom domain, update the `base` in `vite.config.ts`:
       ```ts
       base: '/',  // Keep this for custom domains
       ```
     - Add a CNAME file in the `public/` directory with your domain
     - Configure your DNS settings to point to GitHub Pages

  ### Manual Deployment

  You can also trigger deployment manually:
  - Go to the "Actions" tab in your repository
  - Select "Deploy to GitHub Pages" workflow
  - Click "Run workflow"

  ## 🛠️ Tech Stack

  - **Framework:** React 18 + TypeScript
  - **Build Tool:** Vite 6
  - **Styling:** Tailwind CSS 3
  - **UI Components:** Radix UI
  - **Icons:** Lucide React

  ## 📁 Project Structure

  ```
  ├── .github/
  │   └── workflows/
  │       └── deploy.yml        # GitHub Actions deployment workflow
  ├── src/
  │   ├── components/           # React components
  │   ├── assets/               # Images and static assets
  │   ├── styles/               # Global styles
  │   ├── App.tsx               # Main application component
  │   ├── main.tsx              # Application entry point
  │   └── index.css             # Global CSS with Tailwind directives
  ├── build/                    # Production build output (auto-generated)
  ├── index.html                # HTML template
  ├── package.json              # Dependencies and scripts
  ├── vite.config.ts            # Vite configuration
  ├── tsconfig.json             # TypeScript configuration
  ├── tailwind.config.js        # Tailwind CSS configuration
  └── postcss.config.js         # PostCSS configuration
  ```

  ## 🎨 Features

  - Responsive design (mobile, tablet, desktop)
  - Modern UI with gradient effects
  - Smooth animations
  - SEO-friendly structure
  - Fast loading times
  - Automated deployment

  ## 📝 License

  © 2025 DealoAgent. All rights reserved.
  