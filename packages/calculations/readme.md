# 📦 calculations

**calculations** es una librería para realizar cálculos matemáticos y estadísticas a partir de datos de facturación. Incluye un binario para ejecutar operaciones desde la línea de comandos.

## 🚀 Instalación

Puedes instalar esta librería usando npm:

```sh
npm install calculations-ecommerce-smrtln
```

Si deseas instalarla globalmente:

```sh
npm install -g calculations-ecommerce-smrtln
```

## 📌 Uso

### Como módulo en Node.js

```ts
import { calcularIngresosTotales, calcularProductosMasVendidos } from "calculations-ecommerce-smrtln";

const facturas = [
  { total: 100, items: [{ id: 1, name: "Producto A", quantity: 2 }] },
  { total: 200, items: [{ id: 2, name: "Producto B", quantity: 1 }] },
];

console.log("Ingresos totales:", calcularIngresosTotales(facturas));
console.log("Productos más vendidos:", calcularProductosMasVendidos(facturas));
```

### Uso desde CLI

El paquete incluye un binario que puedes ejecutar directamente desde la terminal:

```sh
calculate --data ./facturas.json
```

## 📜 API

### `calcularIngresosTotales(facturas: Invoice[]): number`
Calcula la suma de todos los ingresos generados por las facturas.

### `calcularProductosMasVendidos(facturas: Invoice[]): ProductoVendidos[]`
Devuelve una lista de los productos más vendidos.

## 📄 Scripts

Puedes ejecutar el binario desde un script en `package.json`:

```json
{
  "scripts": {
    "calcular": "calculate --data ./facturas.json"
  }
}
```

## 📦 Publicación

Para publicar una nueva versión de la librería:

```sh
npm publish --access public
```



Para probar el binario:

```sh
node bin/calculate.js
```

## 📄 Licencia

MIT

