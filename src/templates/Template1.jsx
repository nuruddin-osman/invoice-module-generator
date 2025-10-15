import React from "react";

export default function Template1({ invoiceData }) {
  const colors = {
    background: "#F5EFE6",
    secondary: "#E8DFCA",
    primary: "#6D94C5",
    accent: "#CBDCEB",
  };

  return (
    <div className="p-4" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="flex justify-between items-center mb-4 p-4 rounded-lg"
          style={{ backgroundColor: colors.secondary }}
        >
          <div>
            <h1
              className="text-3xl font-bold"
              style={{ color: colors.primary }}
            >
              {invoiceData.invoiceTitle}
            </h1>
            <p className="text-lg" style={{ color: colors.primary }}>
              #{invoiceData.invoiceNumber}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">Date: {invoiceData.date}</p>
          </div>
        </div>

        {/* From/To Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.accent }}
          >
            <h3 className="font-bold mb-2" style={{ color: colors.primary }}>
              From:
            </h3>
            <p className="font-semibold">{invoiceData.from.companyName}</p>
            <p>{invoiceData.from.address}</p>
            <p>{invoiceData.from.email}</p>
            <p>{invoiceData.from.phone}</p>
          </div>
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.accent }}
          >
            <h3 className="font-bold mb-2" style={{ color: colors.primary }}>
              To:
            </h3>
            <p className="font-semibold">{invoiceData.to.clientName}</p>
            <p>{invoiceData.to.address}</p>
            <p>{invoiceData.to.email}</p>
            <p>{invoiceData.to.phone}</p>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: colors.primary }}>
                <th className="text-white p-3 text-left">Item</th>
                <th className="text-white p-3 text-center">Quantity</th>
                <th className="text-white p-3 text-right">Unit Price</th>
                <th className="text-white p-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? "" : ""}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? colors.accent : colors.secondary,
                  }}
                >
                  <td className="p-3">{item.name}</td>
                  <td className="p-3 text-center">{item.quantity}</td>
                  <td className="p-3 text-right">${item.unitPrice}</td>
                  <td className="p-3 text-right">
                    ${item.quantity * item.unitPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-64">
            <div className="flex justify-between p-2">
              <span>Subtotal:</span>
              <span>${invoiceData.subtotal}</span>
            </div>
            <div className="flex justify-between p-2">
              <span>Tax ({invoiceData.taxRate}%):</span>
              <span>${invoiceData.taxAmount.toFixed(2)}</span>
            </div>
            <div
              className="flex justify-between p-3 font-bold text-lg"
              style={{ backgroundColor: colors.primary, color: "white" }}
            >
              <span>Total:</span>
              <span>${invoiceData.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {invoiceData.notes && (
          <div
            className="mt-4 p-2 rounded-lg"
            style={{ backgroundColor: colors.secondary }}
          >
            <h4 className="font-bold mb-2" style={{ color: colors.primary }}>
              Notes:
            </h4>
            <p>{invoiceData.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
