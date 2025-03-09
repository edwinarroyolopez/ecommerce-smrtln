import { create } from "zustand";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorageUtil";
import { Invoice, InvoiceState } from "@src/types/invoice";
import logger from "@/utils/logger";

export const useInvoiceStore = create<InvoiceState>((set) => {
    const storedInvoices = getLocalStorageItem<Invoice[]>("invoices", []);

    return {
        invoices: storedInvoices,

        addInvoice: (invoice: Invoice) => {
            const updatedInvoices = [...storedInvoices, invoice];
            setLocalStorageItem("invoices", updatedInvoices);
            set({ invoices: updatedInvoices });
            logger.log(`Nueva factura creada: #${invoice.id}`);
        }
    };
});
