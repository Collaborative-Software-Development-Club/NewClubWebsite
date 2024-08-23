## Getting Started

-   clone from GitHub
-   run `npm install` to install dependencies
-   run `npm run dev` to run on localhost
-   Open http://localhost:3000 with your browser to see the result.

## About the project

-   Framework: Next.js
-   Styling: CSS Modules and some react inline styles (I plan to streamline this later)

### Folder Structure

-   App directory: how nextjs routing works, see nextjs app directory documentation
    -   Each page in this directory should reference a layout in the layouts folder. There shouldn't be a lot of logic in the page.
-   Components directory: Shold be used for components that will be used thoughout the app (components specific to this website)
-   hooks: for custom hooks that are used thought the app
-   layouts: basically for the ui of different "pages" or other layouts (a broad definition)
-   ui library: for reusable ui components that will later be exported for future projects (components not specific to this website)

### Component structure

-   Each component should have its own folder with a capitalized name
-   Each component folder has an index.tsx file that corresponts to the component
-   can have a Component.module.css file
-   Can have other subcomponents that are used only by this component and follow the same component structure

> This project includes a ui_components folder that includes reusable UI components. I plan to export these into a library that can be used for our project throught the semester.

## How to Contribute

1. Create a new branch for the new feature with a descriptive name (do not commit directly to main!)
2. As you work on the project, commit your changes to this branch
3. When the feature is done, create a pull request for the branch
   Clone the repository to your local machine:
4. The project maintainer will review the PR and merge it

## How to deploy

We are currently using Vercel for hosting the website.
Since we can't deploy from a GitHub organization on Vercel in the free plan, we have to use the vercel CLI.

1. Run `vercel login` in the csdc-website-v2 directory. Log in with the club GitHub account.
2. Run `vercel build` to create a local build of the website.
3. Run `vercel deploy --prebuilt` to deploy a preview.
4. Run `vercel --prod` to deploy to production.

## Learn More about Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
