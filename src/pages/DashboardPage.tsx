


import { studentUsers, staffUsers } from '../data/users';

export default function DashboardPage() {
  // Dummy data for summary cards
  const totalStudents = studentUsers.length;
  const totalStaff = staffUsers.length;
  const totalFees = 30620; // Monthly fees collection (INR)
  const totalExpenses = 1650; // Monthly expenses (INR)

  // Dummy data for attendance
  const attendanceData = [245, 260, 230, 240, 265, 250, 260, 255, 248, 270, 265, 268];
  const totalPresent = 345;
  const totalAbsent = 10;

  // Generate 30 dummy transactions
  const transactions = Array.from({ length: 30 }, (_, i) => {
    const isPayment = Math.random() > 0.3;
    return {
      id: `#${10000 + i}`,
      type: isPayment ? 'Payment' : 'Refund',
      amount: Math.floor(Math.random() * 5000 + 1000),
      status: isPayment ? 'Completed' : 'Processed',
      date: `Sep ${Math.floor(Math.random() * 27) + 1}, 2025`,
      positive: isPayment,
    };
  });

  // 40 realistic dummy student names
  const dummyNames = [
    'Aarav Sharma', 'Vivaan Patel', 'Aditya Singh', 'Vihaan Gupta', 'Arjun Mehra',
    'Sai Reddy', 'Reyansh Nair', 'Ayaan Das', 'Krishna Joshi', 'Ishaan Choudhary',
    'Dhruv Sinha', 'Kabir Bansal', 'Rudra Kapoor', 'Yash Malhotra', 'Anaya Jain',
    'Diya Agarwal', 'Myra Verma', 'Aadhya Shah', 'Anika Rao', 'Sara Pillai',
    'Pari Desai', 'Ira Menon', 'Saanvi Iyer', 'Navya Shetty', 'Aarohi Kulkarni',
    'Ishita Ghosh', 'Meera Dutta', 'Prisha Paul', 'Riya Sengupta', 'Aanya Bhatt',
    'Aarav Mishra', 'Advait Chauhan', 'Atharv Yadav', 'Aryan Pandey', 'Laksh Jain',
    'Samarth Tripathi', 'Shaurya Dubey', 'Tanishq Saxena', 'Vedant Solanki', 'Yuvraj Rawat'
  ];
  const customers = dummyNames.map((name, i) => ({
    name,
    id: `ID#${20000 + i}`,
  }));

  // Generate 25 dummy real-time fee collections
  const sales = Array.from({ length: 25 }, (_, i) => {
    const value = Math.floor(Math.random() * 100000 + 10000);
    const change = (Math.random() * 4 - 2).toFixed(2); // -2% to +2%
    return {
      label: `Day ${i + 1}`,
      value,
      change: parseFloat(change),
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-2">
      {/* Topbar */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto mb-6 gap-4">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">Welcome to Government Engineering College Bilaspur</h1>
          <div className="text-xs text-blue-600 font-semibold mt-1 uppercase tracking-wider">Snapshot</div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100">Email</button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100">Print</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Generate Report</button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-7">
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">Students</span>
            <span className="text-green-500 text-xs font-semibold flex items-center gap-1">+1.2%</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">{totalStudents}</span>
          <div className="w-full h-6">
            <svg width="100%" height="100%" viewBox="0 0 80 24">
              <polyline fill="none" stroke="#22c55e" strokeWidth="2" points="0,20 10,18 20,19 30,15 40,16 50,12 60,13 70,10 80,8" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">Staff Members</span>
            <span className="text-red-500 text-xs font-semibold flex items-center gap-1">-0.7%</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">{totalStaff}</span>
          <div className="w-full h-6">
            <svg width="100%" height="100%" viewBox="0 0 80 24">
              <polyline fill="none" stroke="#ef4444" strokeWidth="2" points="0,8 10,10 20,13 30,12 40,16 50,15 60,19 70,18 80,20" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">Monthly Fees Collection</span>
            <span className="text-red-500 text-xs font-semibold flex items-center gap-1">-0.3%</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">INR {totalFees.toLocaleString()}</span>
          <div className="w-full h-6">
            <svg width="100%" height="100%" viewBox="0 0 80 24">
              <polyline fill="none" stroke="#ef4444" strokeWidth="2" points="0,20 10,18 20,19 30,15 40,16 50,12 60,13 70,10 80,8" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">Monthly Expenses</span>
            <span className="text-green-500 text-xs font-semibold flex items-center gap-1">+2.1%</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">INR {totalExpenses.toLocaleString()}</span>
          <div className="w-full h-6">
            <svg width="100%" height="100%" viewBox="0 0 80 24">
              <polyline fill="none" stroke="#22c55e" strokeWidth="2" points="0,8 10,10 20,13 30,12 40,16 50,15 60,19 70,18 80,20" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main section: Fees Collection & Attendance */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mb-7">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-2 lg:col-span-2">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-700">Fees Collection</span>
            <div className="flex gap-2 text-xs">
              <span className="text-blue-600 font-semibold">Growth Actual</span>
              <span className="text-gray-400">Actual</span>
              <span className="text-gray-400">Plan</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              <div className="flex gap-8 mb-2">
                <div>
                  <div className="text-2xl font-bold text-gray-900">INR 3,67,440</div>
                  <div className="text-xs text-gray-500">This year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">INR {totalFees.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">This month</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-2">Monthly recurring revenue from student fees. <a href="#" className="text-blue-600 underline">Learn More</a></div>
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
          <span className="text-xs text-gray-500 mb-2">Number of students present each month.</span>
          <div className="w-full h-32 bg-blue-50 rounded flex items-end gap-1 mb-2">
            {attendanceData.map((val, i) => (
              <div key={i} className="bg-blue-500 rounded" style={{height:val/3, width:16}}></div>
            ))}
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-blue-700 font-bold">{totalPresent} <span className="font-normal text-gray-500">Total Present</span></span>
            <span className="text-red-500 font-bold">{totalAbsent} <span className="font-normal text-gray-500">Total Absent</span></span>
          </div>
        </div>
      </div>

      {/* Bottom section: Transaction, Customers, Sales as scrollable lists */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Transactions List */}
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
        {/* New Students List */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-2">
          <div className="font-semibold text-gray-700 mb-2">New Students</div>
          <div className="flex flex-col gap-2 text-sm max-h-72 overflow-y-auto pr-1">
            {customers.map((c, i) => (
              <div key={i} className="flex items-center gap-2 border-b last:border-b-0 py-1"><span className="font-bold text-gray-800">{c.name}</span> <span className="ml-auto text-gray-500">{c.id}</span></div>
            ))}
          </div>
        </div>
        {/* Real-Time Fees Collection List */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-2">
          <div className="font-semibold text-gray-700 mb-2">Real-Time Fees Collection</div>
          <div className="flex flex-col gap-2 text-sm max-h-72 overflow-y-auto pr-1">
            {sales.map((s, i) => (
              <div key={i} className="flex items-center gap-2 border-b last:border-b-0 py-1">
                <span className="font-bold text-gray-800">INR {s.value.toLocaleString()}</span>
                <span className={"ml-2 " + (s.change > 0 ? "text-green-600" : "text-red-500")}>{s.change > 0 ? `+${s.change}%` : `${s.change}%`}</span>
                <span className="ml-auto text-gray-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
