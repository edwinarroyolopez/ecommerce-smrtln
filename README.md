# Tabla de Contenidos

1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Construcción](#construcción)
4. [Desarrollo](#desarrollo)
5. [Estructura del Proyecto](#estructura-del-proyecto)
   - [Aplicaciones y Paquetes](#aplicaciones-y-paquetes)
6. [Enlaces Públicos](#enlaces-públicos)
7. [Usuarios](#usuarios)
8. [Características](#características)
9. [Librería de UI](#librería-de-ui)
10. [Librería de Cálculos](#librería-de-cálculos)
11. [Funcionalidades del Ecommerce](#funcionalidades-del-ecommerce)
    - [Gestión de Productos](#gestión-de-productos)
    - [Carrito de Compras y Facturación](#carrito-de-compras-y-facturación)
    - [Validación del Envío](#validación-del-envío)
    - [Roles y Autenticación](#roles-y-autenticación)
12. [Monorepo y Librerías](#monorepo-y-librerías)
    - [Estructura del Monorepo](#estructura-del-monorepo)
    - [Componentes en la Librería](#componentes-en-la-librería)
    - [Storybook](#storybook)
    - [Publicación en NPM](#publicación-en-npm)
13. [Segunda Librería con Binario](#segunda-librería-con-binario)
    - [Descripción](#descripción)
    - [Implementación](#implementación)
14. [Librería de Configuración de ESLint](#librería-de-configuración-de-eslint)
15. [Referencias de Archivos](#referencias-de-archivos)
16. [Uso de HTML y CSS](#uso-de-html-y-css)
    - [Container Queries](#container-queries)
    - [Styled Components](#styled-components)
    - [CSS Modules](#css-modules)
    - [Media Queries](#media-queries)
17. [Manejo de Hooks](#manejo-de-hooks)
18. [Manejo de Estado con Zustand](#manejo-de-estado-con-zustand)
    - [Autenticación y Roles](#autenticación-y-roles)
    - [Gestión del Carrito de Compras](#gestión-del-carrito-de-compras)
    - [Gestión de Facturación](#gestión-de-facturación)
    - [Sistema de Notificaciones (Toasts)](#sistema-de-notificaciones-toasts)
19. [Configuración de Lefthook y ESLint](#configuración-de-lefthook-y-eslint)
    - [Lefthook: Validación antes del Push](#lefthook-validación-antes-del-push)
    - [Creación de un paquete para la configuración de ESLint](#creación-de-un-paquete-para-la-configuración-de-eslint)

---

# Ecommerce Smrtln

Este es un test técnico.

## Instalación

Ejecuta el siguiente comando:

```sh
yarn install
```

## Construcción

Para construir todas las aplicaciones y paquetes, ejecuta el siguiente comando:

```sh
cd ecommerce-smrtln
npm run build
```

## Desarrollo

Para desarrollar todas las aplicaciones y paquetes, ejecuta el siguiente comando:

```sh
cd ecommerce-smrtln
npm run start:dev
```

## Estructura del Proyecto

Este repositorio incluye los siguientes paquetes/aplicaciones:

### Aplicaciones y Paquetes

- `web`: una aplicación [Vite - react-ts](https://vite.dev/guide/)
- `@repo/ui`: una librería de componentes React compartida por la aplicación `web`
- `@repo/calculations`: una librería binaria compartida por la aplicación `web`
- `@repo/eslint-config`: configuraciones de `eslint` (incluye `eslint-config-next` y `eslint-config-prettier`)

Cada paquete/aplicación está 100% en [TypeScript](https://www.typescriptlang.org/).

## Enlaces Públicos

Puedes acceder al enlace público aquí [Ecommerce Smrtln - AWS](http://ecommerce-smrtln.s3-website.us-east-2.amazonaws.com/)  
Puedes acceder al enlace público aquí [Ecommerce Smrtln - Netlify](https://ecommerce-smrtln.netlify.app/)

## Usuarios

```role: ADMIN
    username: admin
    pass: anywords
    admin -> con este usuario puedes acceder al dashboard: todas las métricas
```

```role: CUSTOMER 
    username: anyword -> puedes colocar cualquier nombre de usuario ej: leonel.messi
    pass: anywords
    customer -> con este usuario puedes hacer compras y ver facturas
```

## Características

- `auth`

## Librería de UI

[Ecommerce UI Library](https://ecommerce-smrtln-ui-library.netlify.app)

[Npm: Ecommerce UI Library](https://www.npmjs.com/package/ecommerce-smrtln-ui)

## Librería de Cálculos

[Npm: Ecommerce UI Library](https://www.npmjs.com/package/calculations-ecommerce-smrtln)

## Funcionalidades del Ecommerce

### Gestión de Productos

La aplicación carga un conjunto de productos simulados en el `localStorage` y mantiene actualizado su stock.

- **Carga inicial de productos (mock de 10 productos)**  
  - Implementado en: [`useAuthStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useAuthStore.ts)  
- **Actualización del stock en tiempo real** al realizar compras.

### Carrito de Compras y Facturación

#### Carrito de Compras

Los clientes pueden agregar y eliminar productos de su carrito de compras.

- **Gestión del carrito:** [`useCartStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useCartStore.ts)  
- **Visualización de productos y carga desde `localStorage`:** [`products.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/products.tsx)  

#### Facturación

Cuando un cliente finaliza una compra, se generan y almacenan facturas en el `localStorage`.

- **Generación y almacenamiento de facturas:** [`useInvoiceStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useInvoiceStore.ts)  
- **Pantalla de confirmación de compra:** [`confirmation.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/confirmation.tsx)  
- **Visualización de facturas generadas:** [`invoices.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/invoices.tsx)  

### Validación del Envío

Antes de finalizar la compra, se solicita al usuario su dirección de envío.

- **Validación del país:** Se usa `fetch` para consumir una API de países de América y verificar que el país ingresado esté dentro del continente.  
- Implementado en:  
  - **Checkout Page:** [`checkout.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/checkout.tsx)  
  - **Checkout Modal:** [`CheckoutModal.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/components/customer/CheckoutModal/CheckoutModal.tsx)  
  - **Selector de País:** [`SelectCountry.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/components/common/SelectCountry/SelectCountry.tsx)  
  - **Hook para obtener países:** [`useCountries.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/hooks/useCountries.ts)  

### Roles y Autenticación

#### Implementación de Roles

Los usuarios tienen uno de los siguientes roles:

- **`admin` (Administrador)** → Accede al panel de administración.  
- **`customer` (Cliente)** → Usa la plataforma para comprar productos.  

- **Gestión de autenticación y roles:** [`useAuthStore.ts`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/store/useAuthStore.ts)  
- **Página de login:** [`Login.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/Login.tsx)  

#### Restricción del Panel de Administración

Solo los administradores pueden acceder al panel donde se gestionan facturas y detalles de compra.

- **Verificación de rol antes de cargar el dashboard.**  
- **Redirección a la página principal si el usuario no es admin.**  
- Implementado en:  
  - **Dashboard de administración:** [`dashboard.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/admin/dashboard.tsx)  

## Monorepo y Librerías

### Estructura del Monorepo

El monorepo `ecommerce-smrtln` contiene al menos una librería (`packages/ui`) y la aplicación (`apps/web`). La librería proporciona utilidades y componentes reutilizables para la aplicación.

### Componentes en la Librería

Estos son los componentes exportados por la librería y utilizados en la aplicación:

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

La librería incluye Storybook para visualizar y probar los componentes de forma aislada.

- **Storybook Deploy:** [`ecommerce-smrtln-ui-library`](https://ecommerce-smrtln-ui-library.netlify.app/?path=/docs/configure-your-project--docs)

### Publicación en NPM

La librería está publicada en npm para su uso en otros proyectos.

- **NPM:** [`ecommerce-smrtln-ui`](https://www.npmjs.com/package/ecommerce-smrtln-ui)

## Segunda Librería con Binario

### Descripción

Se ha implementado una segunda librería dentro del monorepo llamada `calculations`, que proporciona funcionalidades para calcular resúmenes de facturación en la aplicación.

Esta librería está publicada en npm:
[calculations-ecommerce-smrtln](https://www.npmjs.com/package/calculations-ecommerce-smrtln)

### Implementación

El archivo `index.ts` define la función `getInvoiceSummary`, que realiza los cálculos necesarios para renderizar la página del dashboard de la aplicación.

```typescript
export function getInvoiceSummary(invoices: any[]) {

    if (invoices.length === 0) {
        return {
            totalIncome: 0,
            totalInvoices: 0,
            uniqueUsers: 0,
            totalProductsSold: 0,
            topSellingProducts: []
        };
    }

    const totalIncome = invoices.reduce((sum, invoice) => sum + (invoice.total ?? 0), 0);
    const totalInvoices = invoices.length;
    const uniqueUsers = new Set(invoices.map((invoice) => invoice.username)).size;
    const totalProductsSold = invoices.reduce((total, invoice) => total + invoice.items.length, 0);

    const productSalesMap = new Map<
        string,
        { name: string; quantity: number; thumbnail?: string }
    >();

    invoices.forEach((invoice) => {
        invoice.items.forEach((item: any) => {
            if (productSalesMap.has(item.id.toString())) {
                productSalesMap.get(item.id.toString())!.quantity += item.quantity;
            } else {
                productSalesMap.set(item.id.toString(), {
                    name: item.name,
                    quantity: item.quantity,
                    thumbnail: item.thumbnail,
                });
            }
        });
    });
    
    const topSellingProducts = Array.from(productSalesMap.values())
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 5); // Tomamos los 5 más vendidos

    return {
        totalIncome,
        totalInvoices,
        uniqueUsers,
        totalProductsSold,
        topSellingProducts
    };
}
```

### Uso del Binario en un Script de `package.json`

Para integrar esta librería en el monorepo, se ha creado un script en `package.json` que permite ejecutarla como un binario:

```json
"scripts": {
  "calculate": "calculate ./data/invoices.json"
}
```

Este script permite ejecutar la funcionalidad desde la terminal mediante:

```sh
npm run generate-invoice-summary
```

## Librería de Configuración de ESLint

📌 Ubicación:

`ecommerce-smrtln/packages/eslint-config/eslint.config.mjs`

📌 Uso en la Aplicación

Esta librería no está publicada en NPM, pero es utilizada en los siguientes proyectos para estandarizar reglas de linting:

- `ecommerce-smrtln/apps/web`
- `ecommerce-smrtln/packages/ui`

Se importa en los proyectos para garantizar una configuración consistente de ESLint en el monorepo.

## Referencias de Archivos

- [`checkout.module.css`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/checkout.module.css)  
- [`button.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/packages/ui/src/components/button.tsx)  
- [`dashboard-wrapper.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/packages/ui/src/components/dashboard-wrapper.tsx)  

## Uso de HTML y CSS

### Container Queries

En [`checkout.module.css`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/checkout.module.css), se usan **container queries** para ajustar el diseño basado en el tamaño del contenedor en lugar del tamaño de la ventana del navegador.

```css
@container checkout (max-width: 320px) {
  .bottonCheckout {
    width: 100%;
  }
}
```

### Styled Components

En [`button.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/packages/ui/src/components/button.tsx) y [`dashboard-wrapper.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/packages/ui/src/components/dashboard-wrapper.tsx), se usa **styled-components**, una librería que permite escribir estilos CSS dentro de archivos TypeScript o JavaScript.

```tsx
const StyledButton = styled.button<ButtonProps>`
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 16px;
  background: ${(props) => props.variant === "secondary" ? "transparent" : "var(--primary-color)"};
  color: ${(props) => props.variant === "secondary" ? "var(--primary-color)" : "white"};
  border: 1px solid ${(props) => props.variant === "secondary" ? "var(--primary-color)" : "var(--primary-text-color)"};
  
  &:hover {
    background: ${(props) => props.variant === "secondary" ? "var(--primary-color)" : "var(--primary-text-color)"};
    color: ${(props) => props.variant === "secondary" ? "white" : "var(--primary-color)"};
  }
`;
```

### CSS Modules

En [`checkout.module.css`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/checkout.module.css), se usan **CSS Modules**, lo que permite que los estilos sean **locales** y no afecten otros componentes.

```css
.checkoutContainer {
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
```

### Media Queries

En [`dashboard-wrapper.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/packages/ui/src/components/dashboard-wrapper.tsx), se utilizan **media queries** para adaptar la disposición del contenido según el tamaño de la pantalla.

```tsx
const DashboardWrapper = styled.div`
  display: grid;
  gap: 1.75rem;
  max-width: 680px;
  
  @media (max-width: 440px) {
    max-width: 320px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1536px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;
```

## Manejo de Hooks

✅ Se debe hacer uso de la mayor cantidad de hooks nativos con el objetivo de demostrar que se entiende para qué sirve cada uno y cómo se implementan en la práctica.

### Hooks Utilizados

- `useState`: Para manejar el estado de carga y modales.
- `useEffect`: Para sincronizar el estado con datos externos y manejar efectos secundarios.
- `useMemo`: Para evitar cálculos innecesarios en el total y validación de campos.
- `useCallback`: Para definir funciones optimizadas sin recrearlas en cada render.
- `useNavigate`: Para manejar la navegación programática.

[`checkout.tsx`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/pages/customer/checkout.tsx)  

## Manejo de Estado con Zustand

En la aplicación, **Zustand** es la única librería utilizada para el manejo de estado. Esto permite una gestión más eficiente y sencilla del estado global sin la complejidad de otros enfoques como Redux.

### Autenticación y Roles

**Ubicación:** `apps/web/src/store/useAuthStore.ts`

```tsx
export const useAuthStore = create<AuthState>((set) => ({
    user: getLocalStorageItem("user", null),
    isAuthenticated: !!getLocalStorageItem<User | null>("user", null),
    customerData: getLocalStorageItem<CustomerData | null>("customerData", null),

    login: (credentials: UserCredentials) => { /* ... */ },
    logout: () => { /* ... */ },
    setCustomerData: (customerData: CustomerData) => { /* ... */ },
}));
```

### Gestión del Carrito de Compras

**Ubicación:** `apps/web/src/store/useCartStore.ts`

```tsx
export const useCartStore = create<CartState>()((set, get) => ({
    cart: getLocalStorageItem<CartItem[]>("cart", []),

    addToCart: (productId, showToast) => { /* ... */ },
    removeOneToCart: (productId) => { /* ... */ },
    removeFromCart: (productId) => { /* ... */ },
    clearCart: () => { /* ... */ },
}));
```

### Gestión de Facturación

**Ubicación:** `apps/web/src/store/useInvoiceStore.ts`

```tsx
export const useInvoiceStore = create<InvoiceState>((set) => ({
    invoices: getLocalStorageItem<Invoice[]>("invoices", []),

    addInvoice: (invoice) => { /* ... */ },
}));
```

### Sistema de Notificaciones (Toasts)

**Ubicación:** `apps/web/src/store/useToastStore.tsx`

```tsx
export const useToastStore = create<ToastState>((set) => ({
  toast: null,
  showToast: (message, type) => {
    set({ toast: { message, type } });
    setTimeout(() => set({ toast: null }), 3000);
  },
}));
```

## Configuración de Lefthook y ESLint

### Lefthook: Validación antes del Push

[Lefthook](https://github.com/evilmartians/lefthook) se ha configurado para ejecutar **ESLint** antes de realizar `git push`, asegurando que el código cumpla con las reglas establecidas.

📌 **Ubicación del archivo de configuración:**  
[`lefthook.yml`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/lefthook.yml)  

### Creación de un paquete para la configuración de ESLint

Se ha creado un paquete de configuración de ESLint para mantener reglas consistentes en la aplicación y en las librerías del monorepo.

📌 **Ubicación de la configuración:**  
[`packages/eslint-config`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/packages/eslint-config)  

🔧 **Beneficios de usar una configuración centralizada:**  
- Mantiene reglas uniformes en toda la base de código.  
- Facilita actualizaciones de reglas sin modificar múltiples archivos de configuración.  
- Mejora la mantenibilidad del proyecto.  

---