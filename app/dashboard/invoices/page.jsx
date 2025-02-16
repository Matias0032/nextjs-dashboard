export default function InvoicesPage() {
  const invoices = [
    { id: 'INV001', customer: "John Smith", amount: "$1,200.00", status: "Paid", date: "2024-02-15" },
    { id: 'INV002', customer: "Sarah Johnson", amount: "$850.00", status: "Pending", date: "2024-02-14" },
    { id: 'INV003', customer: "Michael Brown", amount: "$2,300.00", status: "Overdue", date: "2024-01-20" },
  ];

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Invoices</h1>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <div className="rounded-lg bg-gray-50 p-6">
          <div className="text-sm text-gray-500">
            Welcome to your invoice management dashboard
          </div>
          <div className="mt-2 text-lg font-semibold">
            Here you can view and manage all your invoices
          </div>
        </div>

        <div className="mt-6">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Invoice ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {invoice.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {invoice.customer}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {invoice.amount}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                        invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {invoice.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 