# Tabla de Contenidos
1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Estructura del Proyecto](#estructura-del-proyecto)
   - [Aplicaciones y Paquetes](#aplicaciones-y-paquetes)
4. [Desarrollo](#desarrollo)
5. [Construcción](#construcción)
6. [Enlaces Públicos](#enlaces-públicos)
7. [Usuarios](#usuarios)
8. [Funcionalidades del Ecommerce](#funcionalidades-del-ecommerce)
   - [Gestión de Productos](#gestión-de-productos)
   - [Carrito de Compras y Facturación](#carrito-de-compras-y-facturación)
   - [Validación del Envío](#validación-del-envío)
   - [Roles y Autenticación](#roles-y-autenticación)
9. [Monorepo y Librerías](#monorepo-y-librerías)
   - [Estructura del Monorepo](#estructura-del-monorepo)
   - [Componentes en la Librería](#componentes-en-la-librería)
   - [Storybook](#storybook)
   - [Publicación en NPM](#publicación-en-npm)
10. [Segunda Librería con Binario](#segunda-librería-con-binario)
    - [Descripción](#descripción)
    - [Implementación](#implementación)
11. [Librería de Configuración de ESLint](#librería-de-configuración-de-eslint)
12. [Configuración de Lefthook y ESLint](#configuración-de-lefthook-y-eslint)
    - [Lefthook: Validación antes del Push](#lefthook-validación-antes-del-push)
    - [Creación de un paquete para la configuración de ESLint](#creación-de-un-paquete-para-la-configuración-de-eslint)
13. [Uso de HTML y CSS](#uso-de-html-y-css)
    - [Container Queries](#container-queries)
    - [Styled Components](#styled-components)
    - [CSS Modules](#css-modules)
    - [Media Queries](#media-queries)
14. [Manejo de Hooks](#manejo-de-hooks)
15. [Manejo de Estado con Zustand](#manejo-de-estado-con-zustand)
    - [Autenticación y Roles](#autenticación-y-roles)
    - [Gestión del Carrito de Compras](#gestión-del-carrito-de-compras)
    - [Gestión de Facturación](#gestión-de-facturación)
    - [Sistema de Notificaciones (Toasts)](#sistema-de-notificaciones-toasts)
16. [CI/CD: Deploy en AWS S3](#cicd-deploy-en-aws-s3)
17. [Sentry APM](#sentry-apm)
18. [Pruebas Unitarias y Cobertura](#pruebas-unitarias-y-cobertura)
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

## CI/CD - Deploy React App to AWS S3

Este flujo de trabajo ([`deploy.yml`](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/.github/workflows/deploy.yml)) automatiza el despliegue de nuestra aplicación React en un bucket de Amazon S3 cada vez que se realiza un push en la rama `release/production`. A continuación, se explican las etapas principales:

### Stages del proceso de CI/CD

1. **Checkout del repositorio**
   - Usa la acción `actions/checkout@v3` para clonar el código del repositorio en la máquina donde se ejecutará el flujo de trabajo.

2. **Configuración de Node.js**
   - Se usa `actions/setup-node@v3` para instalar la versión 22 de Node.js en el entorno de ejecución.

3. **Instalación de dependencias**
   - Se ejecuta `yarn install --frozen-lockfile` para asegurar que todas las dependencias se instalen según el archivo `yarn.lock`, garantizando consistencia en los paquetes.

4. **Construcción del proyecto**
   - Ejecuta `npm run build` para generar la versión optimizada de la aplicación en la carpeta de salida (`dist`).

5. **Ejecución de pruebas unitarias**
   - Corre `npm run test` para ejecutar las pruebas unitarias y asegurar que el código es funcional antes del despliegue.

6. **Despliegue a S3**
   - Se usa la acción `jakejarvis/s3-sync-action@master` para sincronizar los archivos de la carpeta `./app/web/dist` con el bucket S3, eliminando archivos antiguos que ya no existen en la nueva versión.
   - Se configuran las credenciales de AWS a través de `secrets` para garantizar la autenticación segura.

7. **Invalidación de la caché de CloudFront**
   - Después de actualizar el contenido en S3, se ejecuta un comando de AWS CLI para invalidar la caché de CloudFront y asegurar que los usuarios vean la última versión de la aplicación.

### Variables y Secretos de AWS
Para mantener la seguridad y evitar exponer credenciales, las siguientes variables se configuran en los secretos de GitHub (`Settings > Secrets and Variables > Actions`):
- `AWS_BUCKET_NAME`: Nombre del bucket S3.
- `AWS_ACCESS_KEY_ID`: Clave de acceso de AWS.
- `AWS_SECRET_ACCESS_KEY`: Clave secreta de AWS.
- `AWS_REGION`: Región de AWS donde está alojado el bucket.
- `CLOUDFRONT_DISTRIBUTION_ID`: ID de la distribución de CloudFront para la invalidación de caché.

Con este flujo de trabajo, la aplicación se despliega automáticamente en S3 y se garantiza que los usuarios siempre accedan a la última versión del sitio.

[`Histórico de pipelines`](https://github.com/edwinarroyolopez/ecommerce-smrtln/actions)


# Observabilidad con Sentry en la Aplicación

## Sentry APM

[Sentry](https://sentry.io) es una herramienta de monitoreo de aplicaciones (APM - *Application Performance Monitoring*) que permite detectar, diagnosticar y resolver errores en tiempo real. Se usa para rastrear excepciones, analizar tiempos de respuesta y mejorar la experiencia del usuario.

## Implementación en la Aplicación

En este proyecto, Sentry se ha integrado para capturar errores de la aplicación de React y proporcionar reportes detallados sobre fallos y problemas de rendimiento.

### 1. Instalación y Configuración

En el archivo `App.tsx`, Sentry se inicializa con el `DSN` (*Data Source Name*), que es la clave de conexión con el servicio de Sentry.

```tsx
import * as Sentry from "@sentry/react";
import { SENTRY_DNS } from "@/utils/constants";

Sentry.init({
  dsn: SENTRY_DNS,
});
```

El `SENTRY_DNS` se obtiene de las variables de entorno y permite que los errores sean enviados al proyecto correspondiente en Sentry.

### 2. Manejo de Errores con `Sentry.ErrorBoundary`

Sentry proporciona el componente `Sentry.ErrorBoundary`, el cual envuelve la aplicación y captura cualquier error que ocurra dentro de ella. Esto garantiza que la aplicación no se rompa completamente si se presenta un fallo inesperado.

```tsx
<Sentry.ErrorBoundary fallback={<h1>Something went wrong</h1>}>
  <Router>
    {/* Contenido de la aplicación */}
  </Router>
</Sentry.ErrorBoundary>
```


Aquí tienes el fragmento de documentación actualizado en formato Markdown:  

```md
### 2. Manejo de Errores con `Sentry.ErrorBoundary`

Sentry proporciona el componente `Sentry.ErrorBoundary`, el cual envuelve la aplicación y captura cualquier error que ocurra dentro de ella. Esto garantiza que la aplicación no se rompa completamente si se presenta un fallo inesperado.

```tsx
<Sentry.ErrorBoundary fallback={<h1>Something went wrong</h1>}>
  <Router>
    {/* Contenido de la aplicación */}
  </Router>
</Sentry.ErrorBoundary>
```

Puedes consultar los errores capturados en Sentry en el siguiente enlace:  
🔗 [Ver errores en Sentry](https://coder-developer.sentry.io/issues/)

![Captura de errores en Sentry](https://github.com/edwinarroyolopez/ecommerce-smrtln/blob/main/apps/web/src/assets/sentry-capture.png)


### 3. Beneficios de Usar Sentry

- **Detección temprana de errores:** Identifica problemas en la aplicación antes de que afecten a los usuarios finales.
- **Información detallada:** Captura el *stack trace* completo, el entorno y la versión en la que ocurrió el error.
- **Monitoreo de rendimiento:** Permite analizar tiempos de carga y problemas de latencia en la aplicación.
- **Integración con React:** Facilita la captura automática de errores en los componentes de la UI.

---

Con esta implementación, la aplicación tiene un monitoreo continuo que ayuda a mejorar su estabilidad y experiencia de usuario. 

## Pruebas unitarias y Cobertura

### Librerías utilizadas
Este proyecto utiliza las siguientes librerías para pruebas, calidad del código y ejecución:

| Librería                          | Descripción |
|-----------------------------------|-------------|
| `vitest`                          | Framework de pruebas unitarias basado en Jest. |
| `@testing-library/react`          | Utilidades para probar componentes de React. |
| `@testing-library/jest-dom`       | Extensiones para aserciones con Jest en el DOM. |
| `@testing-library/user-event`     | Simulación de interacciones del usuario en pruebas. |
| `jsdom`                           | Entorno de ejecución simulado para pruebas en Node.js. |
| `eslint`                          | Linter para mantener buenas prácticas en el código. |
| `typescript-eslint`               | Integración de ESLint con TypeScript. |
| `@repo/eslint-config`             | Configuración personalizada de ESLint para el repositorio. |

### Comandos para ejecutar las pruebas

| Comando              | Descripción |
|----------------------|-------------|
| `npm run test`      | Ejecuta todas las pruebas del proyecto. |
| `npm run test:watch` | Ejecuta las pruebas en modo de observación (watch mode). |
| `npm run test:coverage` | Genera un reporte de cobertura de código. |

### Reporte de Cobertura
A continuación, se muestra un resumen de la cobertura de pruebas en el proyecto:

File                                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------------------------------|---------|----------|---------|---------|-------------------
All files                                       |   42.14 |    73.87 |   59.09 |   42.14 |                   
 src                                            |       0 |        0 |       0 |       0 |                   
  App.tsx                                       |       0 |        0 |       0 |       0 | 1-50              
  main.tsx                                      |       0 |        0 |       0 |       0 | 1-10              
 src/components/admin/DashboardSkeleton         |     100 |      100 |     100 |     100 |                   
  DashboardSkeleton.tsx                         |     100 |      100 |     100 |     100 |                   
 src/components/admin/InvoicesTable             |       0 |        0 |       0 |       0 |                   
  InvoicesTable.tsx                             |       0 |        0 |       0 |       0 | 1-86              
 src/components/admin/ProductsSoldTable         |       0 |      100 |     100 |       0 |                   
  ProductsSoldTable.tsx                         |       0 |      100 |     100 |       0 | 2-58              
 src/components/admin/layouts/AdminLayout       |     100 |      100 |      50 |     100 |                   
  AdminLayout.tsx                               |     100 |      100 |      50 |     100 |                   
 src/components/common                          |     100 |      100 |     100 |     100 |                   
  ToastContainer.tsx                            |     100 |      100 |     100 |     100 |                   
 src/components/common/InvoiceModal             |       0 |        0 |       0 |       0 |                   
  InvoiceModal.tsx                              |       0 |        0 |       0 |       0 | 1-82              
 src/components/common/SelectCountry            |     100 |      100 |     100 |     100 |                   
  SelectCountry.tsx                             |     100 |      100 |     100 |     100 |                   
 src/components/common/Sidebar                  |     100 |    66.66 |     100 |     100 |                   
  Sidebar.tsx                                   |     100 |    66.66 |     100 |     100 | 16                
 src/components/common/Topbar                   |     100 |      100 |     100 |     100 |                   
  Topbar.tsx                                    |     100 |      100 |     100 |     100 |                   
 src/components/customer/CartSummary            |     100 |      100 |     100 |     100 |                   
  CartSummary.tsx                               |     100 |      100 |     100 |     100 |                   
 src/components/customer/CheckoutModal          |       0 |        0 |       0 |       0 |                   
  CheckoutModal.tsx                             |       0 |        0 |       0 |       0 | 1-113             
 src/components/customer/CheckoutSkeleton       |     100 |      100 |     100 |     100 |                   
  CheckoutSkeleton.tsx                          |     100 |      100 |     100 |     100 |                   
 src/components/customer/CustomerData           |       0 |        0 |       0 |       0 |                   
  CustomerData.tsx                              |       0 |        0 |       0 |       0 | 1-24              
 src/components/customer/FloatCart              |       0 |        0 |       0 |       0 |                   
  FloatCart.tsx                                 |       0 |        0 |       0 |       0 | 1-87              
 src/components/customer/InvoicesSkeleton       |     100 |      100 |     100 |     100 |                   
  InvoicesSkeleton.tsx                          |     100 |      100 |     100 |     100 |                   
 src/components/customer/ProductCard            |       0 |        0 |       0 |       0 |                   
  ProductCard.tsx                               |       0 |        0 |       0 |       0 | 1-55              
 src/components/customer/ProductSkeleton        |     100 |      100 |     100 |     100 |                   
  ProductSkeleton.tsx                           |     100 |      100 |     100 |     100 |                   
 src/components/customer/layouts/CustomerLayout |     100 |    66.66 |   33.33 |     100 |                   
  CustomerLayout.tsx                            |     100 |    66.66 |   33.33 |     100 | 21                
 src/components/routes                          |       0 |        0 |       0 |       0 |                   
  AdminRoutes.tsx                               |       0 |        0 |       0 |       0 | 1-29              
  CustomerRoutes.tsx                            |       0 |        0 |       0 |       0 | 1-35              
  ProtectedRoute.tsx                            |       0 |        0 |       0 |       0 | 1-10              
  RoleProtectedRoute.tsx                        |       0 |        0 |       0 |       0 | 1-19              
 src/data                                       |     100 |      100 |     100 |     100 |                   
  products.ts                                   |     100 |      100 |     100 |     100 |                   
 src/hooks                                      |   76.81 |    93.75 |    62.5 |   76.81 |                   
  useCountries.ts                               |       0 |        0 |       0 |       0 | 1-6               
  useField.tsx                                  |   57.69 |      100 |   33.33 |   57.69 | 21-25,28-33       
  useFormFields.tsx                             |     100 |      100 |     100 |     100 |                   
 src/lib                                        |       0 |        0 |       0 |       0 |                   
  http-client.ts                                |       0 |        0 |       0 |       0 | 1-15              
 src/pages                                      |   84.21 |      100 |      50 |   84.21 |                   
  Login.tsx                                     |   84.21 |      100 |      50 |   84.21 | 14-21             
 src/pages/admin                                |       0 |        0 |       0 |       0 |                   
  dashboard.tsx                                 |       0 |        0 |       0 |       0 | 1-116             
 src/pages/customer                             |       0 |        0 |       0 |       0 |                   
  checkout.tsx                                  |       0 |        0 |       0 |       0 | 1-155             
  confirmation.tsx                              |       0 |        0 |       0 |       0 | 1-19              
  invoices.tsx                                  |       0 |        0 |       0 |       0 | 1-83              
  products.tsx                                  |       0 |        0 |       0 |       0 | 1-40              
 src/store                                      |   96.15 |    89.65 |     100 |   96.15 |                   
  useAuthStore.ts                               |     100 |      100 |     100 |     100 |                   
  useCartStore.ts                               |      92 |    83.33 |     100 |      92 | 32-34,46          
  useInvoiceStore.ts                            |     100 |      100 |     100 |     100 |                   
  useToastStore.tsx                             |     100 |      100 |     100 |     100 |                   
 src/test                                       |       0 |        0 |       0 |       0 |                   
  matchers.ts                                   |       0 |        0 |       0 |       0 | 1-16              
 src/types                                      |       0 |        0 |       0 |       0 |                   
  auth.ts                                       |       0 |        0 |       0 |       0 |                   
  cart.ts                                       |       0 |        0 |       0 |       0 |                   
  invoice.ts                                    |       0 |        0 |       0 |       0 |                   
  product.ts                                    |       0 |        0 |       0 |       0 |                   
  routes.ts                                     |       0 |        0 |       0 |       0 |                   
  toast.ts                                      |       0 |        0 |       0 |       0 |                   
 src/utils                                      |   81.13 |    55.55 |   83.33 |   81.13 |                   
  constants.ts                                  |     100 |      100 |     100 |     100 |                   
  localStorageUtil.ts                           |   69.56 |    42.85 |     100 |   69.56 | 6-8,15-16,23-24   
  logger.ts                                     |   84.21 |      100 |   66.66 |   84.21 | 26-28             
------------------------------------------------|---------|----------|---------|---------|-------------------

> **Nota:** La cobertura general es del **42.14% de declaraciones, 73.87% de branches, 59.09% de funciones y 42.14% de líneas de código**. Se recomienda aumentar la cobertura de pruebas en los archivos con 0% de cobertura.

