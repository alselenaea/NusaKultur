# NusaKultur

A responsive front-end prototype for NusaKultur, a platform for discovering Indonesian cultural experiences and connecting with heritage communities.

## Tech stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Vanilla CSS
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to GitHub and Vercel

1. Create a new repository on GitHub, for example `nusakultur`.
2. Extract this project ZIP and upload the project files to the repository root, or push them with Git.
3. Open [Vercel](https://vercel.com), sign in with GitHub, and choose **Add New → Project**.
4. Import the `nusakultur` repository.
5. Keep the framework preset as **Next.js** and leave the build settings at their defaults.
6. Select **Deploy**. Vercel will build and host the site. Future pushes to the connected branch will trigger new deployments.

No environment variables are required for this prototype.

## Prototype notes

The current version includes:
- Discover and Connect views
- Search and category filters
- Save experience interactions
- Community join interactions
- Cultural passport and booking preview notices
- Responsive desktop and mobile layouts

The content is sample content for demonstration. Booking, authentication, payments, live maps, AI cultural assistance, host verification, community chat, and database persistence are not connected yet. Before launch, replace sample content with verified information approved by local cultural partners and connect the required services.

## Suggested next development phase
- Supabase or another database for users, experiences, events and communities
- Authentication and user profiles
- Booking and payment integration (QRIS/payment gateway)
- Map provider and geolocation permissions
- Admin dashboard for host verification and community moderation
- Multilingual content and reviewed AI assistant
