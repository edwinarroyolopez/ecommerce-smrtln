export function getInvoiceSummary(invoices: any[]) {
    const totalIncome = invoices.reduce((sum, invoice) => sum + (invoice.total ?? 0), 0);
    const totalInvoices = invoices.length;
    const uniqueUsers = new Set(invoices.map((invoice) => invoice.username)).size;
    const totalProductsSold = invoices.reduce((total, invoice) => total + invoice.items.length, 0);

    // // Calcular los productos más vendidos
    const productSalesMap = new Map<
        string,
        { name: string; quantity: number; thumbnail?: string }
    >();

    invoices.forEach((invoice) => {
        invoice.items.forEach((item:any) => {
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
