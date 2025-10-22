// src/modules.ts
// Central place to manage the mega-menu structure

export type MegaItem = {
  label: string;
  to: string; // route (or "#")
};

export type MegaGroup = {
  title: string;
  items: MegaItem[];
};

export const MODULE_GROUPS: MegaGroup[] = [
  {
    title: "Sales",
    items: [
      // --- Quotations ---
      { label: "Create Quotation", to: "/sales/quotations/new" },
      { label: "Quotation List", to: "/sales/quotations" },

      // --- Orders ---
      { label: "Create Sales Order", to: "/sales/orders/new" },
      { label: "Sales Order List", to: "/sales/orders" },
      //-----end of orders---

      //------Delivery
      { label: "Create Delivery", to: "/delivery/new" },
      { label: "Sales Delivery List", to: "/delivery" },
      //------End of Delivery

      // --- Other sales flows (placeholders for now) ---
      { label: "A/R Invoice List", to: "/sales/invoices" },
      { label: "Create A/R Invoice", to: "/sales/invoices/new" },

      // ---returns
      { label: "Sales Returns List", to: "/returns" },
      { label: "Create Return(s)", to: "/returns/new" },
    ],
  },
  {
    title: "Purchasing",
    items: [
      { label: "Create Purchase Order", to: "/po/new" },
      { label: "Purchase Order List", to: "/po" },
      { label: "Create GRPO", to: "grpo/new" },
      { label: "GRPO List", to: "/grpo" },
      { label: "Suppliers", to: "/purchasing/suppliers" },
    ],
  },
  {
    title: "Business Partners",
    items: [
      { label: "Create Business Partner", to: "/bp/new" },
      { label: "Business Partners List", to: "/bp" },
    ],
  },
  {
    title: "Inventory",
    items: [
      { label: "Items", to: "/inventory/items" },
      { label: "Stock Ledger", to: "#" },
      { label: "Warehouse", to: "#" },
      { label: "Batch Masters", to: "/tracking/batches" },
      { label: "Serial Masters", to: "/tracking/serials" },
      { label: "Batch Allocations", to: "/tracking/batch-allocs" },
      { label: "Serial Allocations", to: "/tracking/serial-allocs" },
    ],
  },
  {
    title: "Reports",
    items: [
      { label: "Reports", to: "/reports" },
      { label: "Others", to: "#" },
      { label: "Stock Reports", to: "#" },
    ],
  },
];
