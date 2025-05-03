// import { useState } from 'react';

// import Wrapper from '../../components/layout/Wrapper/Wrapper';
// import { JournalForm } from '../../components/features';
// import { JournalManager } from '../../components/features/Forms/Journal/JournalManager';
// import JournalList from '../../components/features/Forms/Journal/JournalList';
// import { useDispatch } from 'react-redux';

// const manager = new JournalManager();

// const Main = () => {
//     const dispatch = useDispatch();
//     const [entries, setEntries] = useState(manager.getEntries());
//     console.log(entries)

//     const addEntry = (content: string) => {
//     manager.addEntry(content);
//     setEntries(manager.getEntries());
//     };

//     const deleteEntry = (id: string) => {
//         manager.deleteEntry(id);
//         setEntries(manager.getEntries());
//     }; 

// 	return (
// 		<>
// 			<div style={{ padding: '2rem' }}>
//             {/* <JournalForm dispatch={dispatch} onSubmit={addEntry} /> */}
//             <JournalForm dispatch={dispatch}  /> 
//             <JournalList entries={entries} onDelete={deleteEntry} />
// 			</div>
// 		</>
// 	);
// };

// export default Main;

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { JournalForm, JournalList } from '../../components/features/Forms/Journal';
import { deleteEntry } from '../../store/slices/journalSlice';

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
