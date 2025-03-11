#!/usr/bin/env node

import { getInvoiceSummary } from "../index.js";
import fs from "fs";

const args = process.argv.slice(2);
const invoicesFile = args[0];

if (!invoicesFile) {
  console.error("❌ Debes proporcionar el archivo JSON con las facturas.");
  process.exit(1);
}

console.log("Leer archivo con facturas (simulado como JSON):");
const invoices = JSON.parse(fs.readFileSync(invoicesFile, "utf-8"));

console.log("Ejecutamos los cálculos:");
const summary = getInvoiceSummary(invoices);

console.log("📊 Resumen de Facturación:");
console.log(JSON.stringify(summary, null, 2));
