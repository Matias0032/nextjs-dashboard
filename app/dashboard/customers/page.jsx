export default function CustomersPage() {
  const customers = [
    { id: 1, name: "John Smith", email: "john@example.com", status: "Active" },
    { id: 2, name: "Sarah Johnson", email: "sarah@example.com", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", status: "Inactive" },
  ];

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <div className="rounded-lg bg-gray-50 p-6">
          <div className="text-sm text-gray-500">
            Welcome to your customer management dashboard
          </div>
          <div className="mt-2 text-lg font-semibold">
            Here you can view and manage all your customers
          </div>
        </div>

        <div className="mt-6">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {customer.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {customer.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        customer.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {customer.status}
                      </span>
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