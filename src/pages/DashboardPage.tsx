



import { useState } from 'react';

const summary = [
  { label: 'STUDENTS', value: 1500, change: '+1.2%', color: 'text-green-600', chart: true },
  { label: 'STAFF MEMBERS', value: 150, change: '-0.7%', color: 'text-red-500', chart: true },
  { label: 'MONTLY FEES COLLECTION', value: 0, change: '-0.3%', color: 'text-red-500', chart: true },
  { label: 'MONTLY EXPENSES', value: 0, change: '+2.1%', color: 'text-green-600', chart: true },
];

const feesCollection = {
  year: 620076,
  month: 1200,
};

const attendance = {
  present: 345,
  absent: 10,
  data: [30, 32, 28, 34, 31, 29, 33, 30, 32, 28, 34, 31],
};

const transactions = Array.from({ length: 8 }, (_, i) => ({
  id: `#${10000 + i}`,
  type: i % 2 === 0 ? 'Payment' : 'Refund',
  amount: Math.floor(Math.random() * 5000 + 1000),
  status: i % 2 === 0 ? 'Completed' : 'Processed',
  date: `Sep ${Math.floor(Math.random() * 27) + 1}, 2025`,
  positive: i % 2 === 0,
}));

const customers = [
  { name: 'Aarav Sharma', id: 'ID#20001' },
  { name: 'Vivaan Patel', id: 'ID#20002' },
  { name: 'Aditya Singh', id: 'ID#20003' },
  { name: 'Vihaan Gupta', id: 'ID#20004' },
];

const sales = [
  { label: 'Today', value: 1200 },
  { label: 'Yesterday', value: 1100 },
];

export default function DashboardPage() {
  const [salesTab, setSalesTab] = useState('Today');
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-6 gap-4">
          <div className="flex-1">
            <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">SNAPSHOT</div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">Welcome to Demo Institute</h1>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100">EMAIL</button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100">PRINT</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">GENERATE REPORT</button>
          </div>
        </div>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-7">
          {summary.map((item, idx) => (
            <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className={`${item.color} text-xs font-semibold flex items-center gap-1`}>{item.change}</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">{item.label.includes('FEES') || item.label.includes('EXPENSES') ? `₹${item.value}` : item.value}</span>
              {/* Mini chart placeholder */}
              <div className="w-full h-6">
                <svg width="100%" height="100%" viewBox="0 0 80 24">
                  <polyline fill="none" stroke="#22c55e" strokeWidth="2" points="0,20 10,18 20,19 30,15 40,16 50,12 60,13 70,10 80,8" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Fees Collection & Attendance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-7">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-2 lg:col-span-2">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-700">Fees Collection</span>
              <div className="flex gap-2 text-xs">
                <span className="text-blue-600 font-semibold">GROWTH ACTUAL</span>
                <span className="text-gray-400">ACTUAL</span>
                <span className="text-gray-400">PLAN</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div className="flex-1">
                <div className="flex gap-8 mb-2">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">${feesCollection.year.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">THIS YEAR</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">${feesCollection.month.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">THIS MONTH</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-2">Measure How Fast You're Growing Monthly Recurring Revenue. <a href="#" className="text-blue-600 underline">Learn More</a></div>
              </div>
              <div className="w-full md:w-2/3 h-28 bg-blue-50 rounded flex items-end">
                <svg width="100%" height="100%" viewBox="0 0 300 60">
                  <polyline fill="#c7e0fc" stroke="#2196f3" strokeWidth="2" points="0,50 30,40 60,45 90,30 120,35 150,20 180,25 210,15 240,30 270,20 300,10" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-2">
            <span className="font-semibold text-gray-700 mb-2">Daily Attendance</span>
            <span className="text-xs text-gray-500 mb-2">Number of customers who have active subscription with you.</span>
            <div className="w-full h-32 bg-blue-50 rounded flex items-end gap-1 mb-2">
              {attendance.data.map((val, i) => (
                <div key={i} className="bg-blue-500 rounded" style={{height:val*3, width:16}}></div>
              ))}
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-blue-700 font-bold">{attendance.present} <span className="font-normal text-gray-500">TOTAL PRESENT</span></span>
              <span className="text-red-500 font-bold">{attendance.absent} <span className="font-normal text-gray-500">TOTAL ABSENT</span></span>
            </div>
          </div>
        </div>
        {/* Transaction, Customers, Sales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-2">
            <div className="font-semibold text-gray-700 mb-2">Transaction History</div>
            <div className="flex flex-col gap-2 text-sm max-h-72 overflow-y-auto pr-1">
              {transactions.map((t, i) => (
                <div key={i} className="flex items-center gap-2 border-b last:border-b-0 py-1">
                  <span className={(t.positive ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700") + " rounded-full px-2 py-1 text-xs"}>
                    {t.type} {t.positive ? 'from' : 'to'} {t.id}
                  </span>
                  <span className={"ml-auto font-bold " + (t.positive ? "text-green-600" : "text-yellow-600")}>{t.positive ? '+ ' : '- '}INR {t.amount.toLocaleString()}</span>
                  <span className="ml-2 text-gray-400 text-xs">{t.date}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-2">
            <div className="font-semibold text-gray-700 mb-2">New Customers</div>
            <div className="flex flex-col gap-2 text-sm max-h-72 overflow-y-auto pr-1">
              {customers.map((c, i) => (
                <div key={i} className="flex items-center gap-2 border-b last:border-b-0 py-1"><span className="font-bold text-gray-800">{c.name}</span> <span className="ml-auto text-gray-500">{c.id}</span></div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-2">
            <div className="font-semibold text-gray-700 mb-2">Real-Time Sales</div>
            <div className="flex gap-2 mb-2">
              {sales.map((s) => (
                <button
                  key={s.label}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${salesTab === s.label ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-gray-700 border-gray-200'}`}
                  onClick={() => setSalesTab(s.label)}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className="text-2xl font-bold text-blue-700 mb-1">${sales.find(s => s.label === salesTab)?.value.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Revenue generated per account on a {salesTab.toLowerCase()} basis.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
