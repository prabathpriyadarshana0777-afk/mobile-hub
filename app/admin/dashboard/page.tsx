// app/admin/dashboard/page.tsx
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Dashboard Header */}
        <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Owner Dashboard</h1>
            <p className="text-gray-500 text-sm">Welcome back! Here is your shop overview.</p>
          </div>
          <Link href="/admin" className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition">
            Logout
          </Link>
        </div>

        {/* Action Cards (Stock, Repair etc.) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-gray-700">Manage Stock</h3>
            <p className="text-gray-500 text-sm mt-2 mb-4">Add new phones, update prices, or remove sold items.</p>
            <button className="text-blue-600 font-semibold text-sm hover:underline">View Stock →</button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <h3 className="text-lg font-bold text-gray-700">Repair Requests</h3>
            <p className="text-gray-500 text-sm mt-2 mb-4">Check new repair requests sent by customers.</p>
            <button className="text-yellow-600 font-semibold text-sm hover:underline">View Requests →</button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-gray-700">Messages</h3>
            <p className="text-gray-500 text-sm mt-2 mb-4">Read messages from the Contact Us page.</p>
            <button className="text-green-600 font-semibold text-sm hover:underline">View Messages →</button>
          </div>
        </div>

      </div>
    </div>
  );
}