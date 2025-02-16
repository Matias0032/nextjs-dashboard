export default function DashboardPage() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
      </div>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Total Customers</div>
          <div className="mt-2 text-3xl font-bold">123</div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Total Invoices</div>
          <div className="mt-2 text-3xl font-bold">45</div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Total Revenue</div>
          <div className="mt-2 text-3xl font-bold">$12,345</div>
        </div>
      </div>
      <div className="mt-6">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <div className="mt-4 text-sm text-gray-600">
            Welcome to your financial dashboard. Here you can monitor your business performance,
            manage customers, and handle invoices all in one place.
          </div>
        </div>
      </div>
    </div>
  );
} 