import './Notifications.css';

const dummyNotifications = [
  { id: 1, message: 'Fee payment due by 30th Sep.' },
  { id: 2, message: 'Exam schedule released.' },
  { id: 3, message: 'Library book return deadline: 10th Oct.' },
];

const Notifications = () => (
  <div className="notifications">
    <h4>Notifications</h4>
    <ul>
      {dummyNotifications.map(n => (
        <li key={n.id}>{n.message}</li>
      ))}
    </ul>
  </div>
);

export default Notifications;
