# Mutara Grocery

Mutara Grocery is a modern, fast, and user-friendly e-commerce web application built with Next.js and TypeScript. It provides a seamless shopping experience for customers looking to purchase groceries online.

## Features

*   **Product Catalog:** Browse a wide range of grocery products.
*   **Product Details:** View detailed information for each product.
*   **Shopping Cart:** Add products to a shopping cart (or an order form in this case).
*   **Order Placement:** Place orders directly through the website.
*   **Responsive Design:** The application is fully responsive and works on all devices.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (based on Radix UI)
*   **Form Management:** [React Hook Form](https://react-hook-form.com/)
*   **Schema Validation:** [Zod](https://zod.dev/)
*   **Linting:** [ESLint](https://eslint.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or later)
*   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/mutara-grocery.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

Run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project is organized as follows:

*   `src/app`: Contains the main application pages and routes.
*   `src/components`: Contains the reusable React components.
*   `src/data`: Contains the product data.
*   `src/lib`: Contains utility functions.
*   `src/app/api`: Contains the API routes.
*   `public`: Contains the static assets.

## API Endpoints

*   `POST /api/order`: Creates a new order.

## Deployment

This app is ready to be deployed on [Vercel](https://vercel.com/), the platform from the creators of Next.js.