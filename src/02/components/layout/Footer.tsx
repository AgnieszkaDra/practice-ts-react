import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIpAddress } from '../../store/slices/ipSlice';
import { RootState, AppDispatch } from '../../store/store';

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { ip, loading, error } = useSelector((state: RootState) => state.ip);

  useEffect(() => {
    dispatch(fetchIpAddress());
  }, [dispatch]);

  return (
    <footer style={{ textAlign: 'center', padding: '1rem' }}>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Ładowanie...</p>
      ) : (
        <p>Twój adres IP: {ip}</p>
      )}
    </footer>
  );
};

export default Footer;
