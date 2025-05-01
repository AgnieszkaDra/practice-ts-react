import React, { useEffect, useState } from 'react';
import { fetchIp } from './fetchIp'

const Footer: React.FC = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchIp()
      .then(setIp)
      .catch(() => setError('Nie udało się pobrać adresu IP.'));
  }, []);

  return (
    <footer style={{ textAlign: 'center', padding: '1rem' }}>
      {error ? <p>{error}</p> : <p>Twój adres IP: {ip ?? 'Ładowanie...'}</p>}
    </footer>
  );
};

export default Footer;