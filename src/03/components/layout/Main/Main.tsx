
// export default Main;

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { JournalForm, JournalList } from '../../features/Forms/Journal';
import { deleteEntry } from '../../../store/slices/journalSlice';

const Main = () => {
    const dispatch = useDispatch();
    const entries = useSelector((state: RootState) => state.journal.entries);
   
  
    const handleDelete = (id: string) => {
      dispatch(deleteEntry(id));
    };
  
    return (
      <div style={{ padding: '2rem' }}>
        <JournalForm />
        <JournalList entries={entries} onDelete={handleDelete} />
      </div>
    );
  };

export default Main;