# FeedAI - Feedback Intelligence System (Frontend)

Modern React-based dashboard for submitting, viewing, filtering, and managing user feedback with AI-powered insights.

**FeedAI Frontend** connects to the intelligent backend API to let users:
- Submit feedback easily
- View paginated list of feedbacks with powerful filtering & search
- See real-time statistics (by category, priority, sentiment, team)
- Delete feedback entries 
- Enjoy a clean, responsive, and accessible UI

## Project Overview

- **Purpose**: Provide an intuitive interface for users and admins to interact with AI-analyzed feedback
- **Live Site**: https://feedback-intelligence-client.vercel.app/
- **Backend API**: https://feedback-intelligence-server.vercel.app/
- **API Documentation (Swagger)**: https://feedback-intelligence-server.vercel.app/api-docs/#/

### Key Features

- Beautiful form for submitting feedback (with validation)
- Paginated & filterable feedback table
- Dashboard with stats (category, priority, sentiment, team distribution)
- Type-safe API calls with RTK Query
- Form handling & validation using React Hook Form + Zod

## Tech Stack

| Category              | Technologies                                      |
|-----------------------|---------------------------------------------------|
| Framework             | React 18 + Vite                                   |
| Language              | TypeScript                                        |
| State & Data Fetching | Redux Toolkit + RTK Query                         |
| UI Components         | shadcn/ui (radix-ui based)                        |
| Styling               | Tailwind CSS                                      |
| Forms & Validation    | React Hook Form + Zod                             |
| Icons                 | lucide-react                                      |
| Deployment            | Vercel                                            |
| Build Tool            | Vite                                              |
| Linting & Formatting  | ESLint + Prettier                                 |

## Installation & Local Development

1. Clone the repository

   ```bash
   git clone <your-frontend-repo-url>
   cd feedback-intelligence-client

2. Install dependencies

    ```bash
    npm install

3. Create and configure the .env file

   ```bash
    VITE_API_URL=backend_api****

4. Start the development server
   
   ```bash
    npm run dev
