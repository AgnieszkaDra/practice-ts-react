import React, { useState } from 'react';
import { FormField } from '../../../../ui/FormField/FormField';

type Props = {
  onSubmit: (content: string) => void;
};

const JournalForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        style={{ width: '100%', marginBottom: '0.5rem' }}
        placeholder="Zapisz coś..."
      />
      <button type="submit">Dodaj wpis</button>
    </form>
  );
};

export default JournalForm;