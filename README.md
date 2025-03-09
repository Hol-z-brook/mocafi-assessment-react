# Mocafi Assessment

CRUD web app using GoRestApi.

**[View Live Demo](https://holzbrook-mocafi-assessment.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/be99b8e3-4b6d-4eea-93a3-e22258bb05bc/deploy-status)](https://app.netlify.com/sites/holzbrook-mocafi-assessment/deploys)

Built by [Andrew Hol(z)brook](https://holzbrook.dev)

## Project Overview

This project is meant to demonstrate that I'm able to build a CRUD app with cutting edge technology, that I'm able to quickly organize code in such a way that things remain maintainable, and that I can work with new technology as needed.

## Tech Stack

- **Framework**: Next.js
- **Styling**: TailwindCSS + ShadCN/UI
- **Validation**: React Hook Form + Zod
- **API**: Go REST API + Next.js Server Actions
- **Hosting**: Netlify

## Getting Started

```bash
# Install dependencies and start dev server
pnpm install
pnpm dev

# Required env var
GOREST_API_KEY=your_token_here
```

### Technical Decisions

#### Framework & State Management

For this project, I chose to implement it with NextJS + Server Actions for API State Management

I'm a big fan of React Query when using React proper, because it allows you to abstract away a ton of API logic without sacrificing on the performance or developer experience. These days in NextJS, you can abstract things even further without exposing anything to the client using Client/Server components. With this, most or even all of the API data logic doesn't need to exist on the client at all. It's abstracted cleanly away from the client and the browser doesn't need to load very much JavaScript at all to keep things working.

#### UI Library

I went with TailwindCSS because it is both performant and easy to understand if you know CSS and how to make utility classes. It's both easy to understand and there are many tools wrapping it now that make it even nicer to work with.

I chose to try out ShadCN on this project because I had never used it before and I wanted to get the UI up and running really fast. In using it, I found that it is indeed fast to work with and I really like that it's not a core dependency. It just shares code on the website, the CLI installs it much like npm/pnpm/yarn, and the underlying primitive, RadixUI, is depended upon.

#### Hosting

While Vercel is an obvious choice for Next.js apps, I specifically chose Netlify to demonstrate that modern Next.js features like Server Actions can work smoothly on other platforms. This decision proves that the app isn't tightly coupled to Vercel's infrastructure and can be deployed anywhere with the right configuration.

### Design Philosophy

The application follows a clear hierarchical structure:

- **Entry Point**: A minimal home page that serves as the initial touchpoint
- **Authentication Flow**:
  - Consistent layout across login/signup/forgot-password pages
  - While non-functional, these pages demonstrate proper auth UX patterns
- **Dashboard Experience**:
  - Features a professional layout with sidebar navigation
  - Includes breadcrumbs and back buttons for easy navigation
  - Structured for future expansion of admin functionality

The design prioritizes user orientation - ensuring users always know where they are and what actions they can take.

### Challenges & Solutions

1. **Server Actions with External APIs**

   - Challenge: Implementing CRUD operations with Go REST API using Server Actions
   - Solution: Created type-safe wrapper functions around fetch calls, handling both success and error states server-side

2. **Form Validation Architecture**

   - Challenge: Balancing client-side UX with server-side validation
   - Solution: Utilized React Hook Form with Zod for type-safe schemas, providing immediate feedback while ensuring data integrity

3. **State Management Without Client Cache**

   - Challenge: Managing UI state without traditional client-side caching
   - Solution: Leveraged NextJS's server components and streaming features to handle data fetching and mutations without complex client-state
   - Note: The Users list page, being server-rendered, could potentially impact server load and bandwidth as it refetches on each visit. A future optimization could move this to client-side fetching with React Query to benefit from client caching while maintaining good UX.

4. **Dynamic Route Parameters Type Safety**

   - Challenge: Next.js was throwing server-side errors in `/dashboard/users/[userId]` route because the params were being accessed before the Promise resolved
   - Solution: Added proper Promise typing and await to the params object, which resolved the server-side errors while maintaining type safety throughout the data flow

5. **Netlify Deployment**
   - Challenge: Deploying a Next.js app on Netlify instead of Vercel
   - Solution: Configured build settings to properly handle Server Actions and routing, proving the app's portability

## Future Improvements

- Implement real authentication flow with JWT/OAuth
- Add client-side caching for frequently accessed list data
- Add search functionality to users list
- Implement sorting and filtering
- Add more comprehensive error handling
- Add end to end tests

## Deployment

Hosted on Netlify with Server Actions support enabled.

## Tasks

- [x] Add sample data
- [x] Implement user authentication interface
  - [x] `/login` - Login page with hardcoded credentials
  - [x] `/signup` - User registration page
  - [x] `/forgot-password` - Password reset page
- [x] Implement CRUD operations with Go REST public API
  - [x] User listing and navigation
    - [x] `/` - Home page
    - [x] `/users` - Display list of users
    - [x] Add pagination support (`/users?page=N`)
    - [x] `/users/[id]` - Display specific user details
      - [x] - Display user details in a card
      - [x] - Allow user deletion
      - [x] - Update user details
  - [x] Form validations
  - [x] API integration
