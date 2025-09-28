
export default function CentralizedDatabasePage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-extrabold mb-4">Centralized Student Database</h1>
        <p className="text-gray-700 mb-6">
          The heart of the ERP system is a unified, cloud-based student database. All admissions, fee, hostel, library, and examination records are stored in a single, secure source of truth. This eliminates redundant manual entries, reduces errors, and ensures that every department works with up-to-date information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Real-time updates from admissions, fees, hostel, library, and exams</li>
              <li>Role-based access for students, staff, and administrators</li>
              <li>Automated data validation and duplicate prevention</li>
              <li>Integration with Google Sheets, Forms, and other cloud tools</li>
              <li>Automated daily backups and audit logs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">How It Works</h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-1">
              <li>Admission forms feed directly into the central database</li>
              <li>Fee payments update student financial records instantly</li>
              <li>Hostel and library allocations are reflected in real time</li>
              <li>Dashboards and reports pull live data for administrators</li>
            </ol>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="font-semibold mb-2">Why This Matters</h3>
          <p className="text-gray-700">
            By connecting familiar cloud office tools, colleges can achieve the benefits of a modern ERP without expensive proprietary software. Staff use the spreadsheet and form tools they already know, while administrators gain a real-time institutional overview.
          </p>
        </div>
      </div>
    </div>
  );
}
