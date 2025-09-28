import { useState } from 'react';

const integrations = [
  { id: 1, name: 'Google Workspace', desc: 'Connected for email, calendar, and drive sync.', status: 'Active' },
  { id: 2, name: 'SMS Gateway', desc: 'Automated SMS alerts for students and staff.', status: 'Active' },
  { id: 3, name: 'Payment Gateway', desc: 'Online fee collection and reconciliation.', status: 'Pending' },
  { id: 4, name: 'Library API', desc: 'Automated book inventory and issue tracking.', status: 'Active' },
];

export default function IntegrationAutomationPage() {
  const [search, setSearch] = useState('');
  const filtered = integrations.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.desc.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Integration & Automation</h2>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <input
              type="text"
              placeholder="Search integrations..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow hover:bg-blue-700 transition">Add Integration</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map(i => (
              <div key={i.id} className="bg-blue-50 rounded-xl p-4 flex flex-col gap-2 border border-blue-100">
                <div className="font-bold text-blue-700">{i.name}</div>
                <div className="text-gray-700 text-sm">{i.desc}</div>
                <button className={`px-3 py-1 rounded text-xs font-semibold w-max ${i.status === 'Active' ? 'bg-green-600 text-white' : 'bg-yellow-500 text-white'}`}>{i.status}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Connect and manage third-party integrations</li>
            <li>Automate notifications, payments, and data sync</li>
            <li>Monitor integration status and add new services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
