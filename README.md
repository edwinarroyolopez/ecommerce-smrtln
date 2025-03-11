# Ecommerce Smrtln

This is a technical test


## Install

Run the following command:

```sh
yarn install
```


### Build

To build all apps and packages, run the following command:

```
cd ecommerce-smrtln
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd ecommerce-smrtln
npm run start:dev
```

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `web`: a [Vite - react-ts](https://vite.dev/guide/) app
- `@repo/ui`: a stub React component library shared by both `web` application
- `@repo/calculations`: a binary library shared by  `web` application
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).


# Publics Links
Puedes acceder al link público aqui [Ecommerce Smrtln - AWS](http://ecommerce-smrtln.s3-website.us-east-2.amazonaws.com/) 
Puedes acceder al link público aqui [Ecommerce Smrtln - Netlify](https://ecommerce-smrtln.netlify.app/) 


# Usuarios
``` role: ADMIN
    username: admin
    pass: anywords
    admin -> con este usuario puedes acceder al dashboard: todas las métricas
```

``` role: CUSTOMER 
    username: anyword -> puedes colocar cualquier nombre de usuario ej: leonel.messi
    pass: anywords
    customer -> con este usuario puedes hacer compras y ver facturas
```

# Features
- ` auth

# UI Library
[Ecommerce UI Library](https://ecommerce-smrtln-ui-library.netlify.app)

[Npm:  Ecommerce UI Library](https://www.npmjs.com/package/ecommerce-smrtln-ui)

# UI Calculations
[Npm:  Ecommerce UI Library](https://www.npmjs.com/package/calculations-ecommerce-smrtln)


# 📦 Funcionalidades del Ecommerce  

## 1️⃣ Gestión de Productos  
La aplicación carga un conjunto de productos simulados en el `localStorage` y mantiene actualizado su stock.  

- **Carga inicial de productos (mock de 10 productos)**  
  - Implementado en: [`useAuthStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useAuthStore.ts)  
- **Actualización del stock en tiempo real** al realizar compras.  

---

## 2️⃣ Carrito de Compras y Facturación  

### 🛒 Carrito de Compras  
Los clientes pueden agregar y eliminar productos de su carrito de compras.  

- **Gestión del carrito:** [`useCartStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useCartStore.ts)  
- **Visualización de productos y carga desde `localStorage`:** [`products.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/products.tsx)  

### 🧾 Facturación  
Cuando un cliente finaliza una compra, se generan y almacenan facturas en el `localStorage`.  

- **Generación y almacenamiento de facturas:** [`useInvoiceStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useInvoiceStore.ts)  
- **Pantalla de confirmación de compra:** [`confirmation.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/confirmation.tsx)  
- **Visualización de facturas generadas:** [`invoices.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/invoices.tsx)  

---

## 3️⃣ Validación del Envío  
Antes de finalizar la compra, se solicita al usuario su dirección de envío.  

- **Validación del país:** Se usa `fetch` para consumir una API de países de América y verificar que el país ingresado esté dentro del continente.  
- Implementado en:  
  - **Checkout Page:** [`checkout.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/checkout.tsx)  
  - **Checkout Modal:** [`CheckoutModal.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/components/customer/CheckoutModal/CheckoutModal.tsx)  
  - **Selector de País:** [`SelectCountry.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/components/common/SelectCountry/SelectCountry.tsx)  
  - **Hook para obtener países:** [`useCountries.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/hooks/useCountries.ts)  

---

# 🔐 4️⃣ Roles y Autenticación  

## 🏷 Implementación de Roles  
Los usuarios tienen uno de los siguientes roles:  

- **`admin` (Administrador)** → Accede al panel de administración.  
- **`customer` (Cliente)** → Usa la plataforma para comprar productos.  

- **Gestión de autenticación y roles:** [`useAuthStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useAuthStore.ts)  
- **Página de login:** [`Login.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/Login.tsx)  

---

## ⚠️ Restricción del Panel de Administración  
Solo los administradores pueden acceder al panel donde se gestionan facturas y detalles de compra.  

- **Verificación de rol antes de cargar el dashboard.**  
- **Redirección a la página principal si el usuario no es admin.**  
- Implementado en:  
  - **Dashboard de administración:** [`dashboard.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/admin/dashboard.tsx)  

---

# 📂 Archivos Clave  

- **Gestión de autenticación y roles:**  
  [`useAuthStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useAuthStore.ts)  

- **Página de inicio de sesión:**  
  [`Login.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/Login.tsx)  

- **Panel de administración:**  
  [`dashboard.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/admin/dashboard.tsx)  


