export type InvoiceItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail?: string;
  };
  
  export type Invoice = {
    id: number;
    date: string;
    items: InvoiceItem[];
    total: number;
    username: string;
    customer: {
      name: string;
      email: string;
      country: string;
      contact: string;
      shippingAddress: string;
      orderNote?: string;
      deliveryTime: string;
    };
  };
  
  export type InvoiceState = {
    invoices: Invoice[];
    addInvoice: (invoice: Invoice) => void;
  };
  