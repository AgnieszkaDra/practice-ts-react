import { useState } from 'react';

import Wrapper from '../../components/layout/Wrapper/Wrapper';
import { JournalForm } from '../../components/features';
import { JournalManager } from '../../components/features/Forms/Journal/JournalManager';
import JournalList from '../../components/features/Forms/Journal/JournalList';

const manager = new JournalManager();

const Main = () => {
    const [entries, setEntries] = useState(manager.getEntries());
    console.log(entries)

    const addEntry = (content: string) => {
    manager.addEntry(content);
    setEntries(manager.getEntries());
    };

    const deleteEntry = (id: string) => {
        manager.deleteEntry(id);
        setEntries(manager.getEntries());
    }; 

	return (
		<>
			<div style={{ padding: '2rem' }}>
            <JournalForm onSubmit={addEntry} />
            <JournalList entries={entries} onDelete={deleteEntry} />
			</div>
		</>
	);
};

export default Main;