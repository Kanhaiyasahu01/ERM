import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark-mode' : '';
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} style={{ marginLeft: 16 }}>
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
