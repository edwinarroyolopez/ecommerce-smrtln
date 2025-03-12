```
# Ecommerce Smrtln

This is a technical test for an e-commerce application built using modern web technologies. Below, you will find detailed information about the project structure, features, installation, and development instructions.

---

## Table of Contents

1. [Installation](#install)
2. [Building the Project](#build)
3. [Development](#develop)
4. [What's Inside?](#whats-inside)
5. [Public Links](#public-links)
6. [User Roles](#usuarios)
7. [Features](#features)
8. [UI Library](#ui-library)
9. [UI Calculations](#ui-calculations)
10. [Functionality Details](#funcionalidades-del-ecommerce)
11. [Monorepo Structure](#monorepo-y-librerías-en-ecommerce-smrtln)
12. [ESLint Configuration](#librería-de-configuración-de-eslint)
13. [State Management with Zustand](#manejo-de-estado-con-zustand)
14. [Hooks Usage](#manejo-de-hooks)
15. [HTML and CSS Techniques](#explicación-del-uso-de-html-y-css)
16. [Lefthook and ESLint](#configuración-de-lefthook-y-eslint)

---

## Install

To install dependencies, run the following command:

```sh
yarn install
```

---

## Build

To build all apps and packages, run the following commands:

```sh
cd ecommerce-smrtln
npm run build
```

---

## Develop

To start the development server, run the following commands:

```sh
cd ecommerce-smrtln
npm run start:dev
```

---

## What's Inside?

This repository includes the following packages and applications:

### Apps and Packages

- **`web`**: A [Vite - React TypeScript](https://vite.dev/guide/) application.
- **`@repo/ui`**: A shared React component library used by the `web` application.
- **`@repo/calculations`**: A binary library used by the `web` application for calculations.
- **`@repo/eslint-config`**: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`).

Each package and app is written entirely in [TypeScript](https://www.typescriptlang.org/).

---

## Public Links

- [Ecommerce Smrtln - AWS](http://ecommerce-smrtln.s3-website.us-east-2.amazonaws.com/)
- [Ecommerce Smrtln - Netlify](https://ecommerce-smrtln.netlify.app/)

---

## Usuarios

### Role: ADMIN
- **Username**: `admin`
- **Password**: `anywords`
- **Access**: Dashboard with all metrics.

### Role: CUSTOMER
- **Username**: Any word (e.g., `leonel.messi`)
- **Password**: `anywords`
- **Access**: Shopping and invoice viewing.

---

## Features

- Authentication (`auth`)
- Product management
- Shopping cart and billing
- Shipping validation
- Role-based access control

---

## UI Library

- [Ecommerce UI Library](https://ecommerce-smrtln-ui-library.netlify.app)
- [NPM: Ecommerce UI Library](https://www.npmjs.com/package/ecommerce-smrtln-ui)

---

## UI Calculations

- [NPM: Ecommerce UI Library](https://www.npmjs.com/package/calculations-ecommerce-smrtln)

---

## Funcionalidades del Ecommerce

### 1. Gestión de Productos

The application loads a set of simulated products into `localStorage` and updates stock in real time.

- **Initial product load (mock of 10 products)**:
  - Implemented in: [`useAuthStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useAuthStore.ts)
- **Real-time stock updates** during purchases.

---

### 2. Carrito de Compras y Facturación

#### Carrito de Compras
Customers can add and remove products from their shopping cart.

- **Cart management**: [`useCartStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useCartStore.ts)
- **Product visualization and loading from `localStorage`**: [`products.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/products.tsx)

#### Facturación
When a customer completes a purchase, invoices are generated and stored in `localStorage`.

- **Invoice generation and storage**: [`useInvoiceStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useInvoiceStore.ts)
- **Purchase confirmation screen**: [`confirmation.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/confirmation.tsx)
- **Invoice visualization**: [`invoices.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/invoices.tsx)

---

### 3. Validación del Envío

Before completing a purchase, the user is prompted to enter their shipping address.

- **Country validation**: Uses `fetch` to consume an API of American countries and verify that the entered country is valid.
- Implemented in:
  - **Checkout Page**: [`checkout.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/checkout.tsx)
  - **Checkout Modal**: [`CheckoutModal.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/components/customer/CheckoutModal/CheckoutModal.tsx)
  - **Country Selector**: [`SelectCountry.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/components/common/SelectCountry/SelectCountry.tsx)
  - **Hook for fetching countries**: [`useCountries.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/hooks/useCountries.ts)

---

### 4. Roles y Autenticación

#### Implementación de Roles
Users have one of the following roles:
- **`admin` (Administrator)**: Accesses the admin dashboard.
- **`customer` (Customer)**: Uses the platform to purchase products.

- **Authentication and role management**: [`useAuthStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useAuthStore.ts)
- **Login page**: [`Login.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/Login.tsx)

#### Restricción del Panel de Administración
Only administrators can access the panel where invoices and purchase details are managed.

- **Dashboard verification**: [`dashboard.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/admin/dashboard.tsx)

---

## Monorepo y Librerías en `ecommerce-smrtln`

### Estructura del Monorepo

The monorepo `ecommerce-smrtln` contains at least one library (`packages/ui`) and the application (`apps/web`). The library provides reusable utilities and components for the application.

### Ubicación de la Librería

- **Path**: [`ecommerce-smrtln/packages/ui`](https://github.com/edwinarroyolopez/ecommerce-smrtln/tree/main/packages/ui)
- **Colors and styles**: [`ecommerce-smrtln/packages/ui/src/styles.css`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/packages/ui/src/styles.css)

### Componentes en la Librería

#### Componentes principales:
```typescript
export { default as Button } from "./components/button";
export { default as CloseButton } from "./components/close-button";
export { default as Input } from "./components/input";
export { default as Drawer } from "./components/drawer";
export { default as Loading } from "./components/loading";
export { default as Toast } from "./components/toast";
export { default as Backdrop } from "./components/backdrop";
export { default as StickerCard } from "./components/sticker-card";
```

#### Íconos:
```typescript
export { default as NavbarIdcon } from "./icons/navbar-icon";
export { default as MinusIcon } from "./icons/minus-icon";
export { default as PlusIcon } from "./icons/plus-icon";
export { default as CalendarIcon } from "./icons/calendar-icon";
export { default as EyeIcon } from "./icons/eye-icon";
export { default as EaringIcon } from "./icons/earing-icon";
export { default as ShoppingIcon } from "./icons/shopping-icon";
export { default as CustomerIcon } from "./icons/customer-icon";
export { default as OrderProcessedIcon } from "./icons/order-processed-icon";
```

#### Otros componentes:
```typescript
export { default as Skeleton } from "./components/skeleton";
export { DashboardWrapper, SummaryCard, Header, Title, ContentGrid } from "./components/dashboard-wrapper";
export { TableContainer, Table, Th, Td } from "./components/table";
```

### Storybook

The library includes Storybook for isolated component testing and visualization.

- **Storybook Deploy**: [`ecommerce-smrtln-ui-library`](https://ecommerce-smrtln-ui-library.netlify.app/?path=/docs/configure-your-project--docs)

### Publicación en NPM

The library is published on npm for use in other projects.

- **NPM**: [`ecommerce-smrtln-ui`](https://www.npmjs.com/package/ecommerce-smrtln-ui)

---

## Segunda Librería con Binario en el Monorepo

### Descripción

A second library named `calculations` has been implemented within the monorepo. It provides functionalities for calculating billing summaries in the application.

- **NPM**: [calculations-ecommerce-smrtln](https://www.npmjs.com/package/calculations-ecommerce-smrtln)

### Ubicación en el Monorepo

- **Path**: `ecommerce-smrtln/packages/calculations/`
- **Main file**: `ecommerce-smrtln/packages/calculations/index.ts`

### Implementación

The `index.ts` file defines the `getInvoiceSummary` function, which performs necessary calculations for rendering the application's dashboard.

```typescript
export function getInvoiceSummary(invoices: any[]) {
    // Function implementation...
}
```

### Uso del Binario en un Script de `package.json`

A script has been created in `package.json` to execute this library as a binary:

```json
"scripts": {
  "calculate": "calculate ./data/invoices.json"
}
```

---

## Librería de Configuración de ESLint

- **Path**: `ecommerce-smrtln/packages/eslint-config/eslint.config.mjs`
- **Usage**: Standardizes linting rules across the monorepo.

---

## Manejo de Estado con Zustand

Zustand is the only state management library used in the application. It allows efficient and straightforward global state management without the complexity of Redux.

### Key Stores

- **Authentication**: [`useAuthStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useAuthStore.ts)
- **Shopping Cart**: [`useCartStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useCartStore.ts)
- **Invoices**: [`useInvoiceStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useInvoiceStore.ts)
- **Toasts**: [`useToastStore.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useToastStore.tsx)

---

## Manejo de Hooks

Hooks like `useState`, `useEffect`, `useMemo`, `useCallback`, and `useNavigate` are used extensively to demonstrate understanding and practical implementation.

---

## Explicación del uso de HTML y CSS

Modern techniques such as **Container Queries**, **Styled Components**, **CSS Modules**, and **Media Queries** are used to create responsive, modular, and maintainable interfaces.

---

## Configuración de Lefthook y ESLint

[Lefthook](https://github.com/evilmartians/lefthook) ensures code quality by running ESLint before every `git push`.

- **Configuration file**: [`lefthook.yml`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/lefthook.yml)

---
```