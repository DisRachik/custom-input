import { useState } from 'react';

import { InputLabel } from '@/components/ui/InputLabel';
import { InputText } from '@/components/ui/InputText';

export default function App() {
  const [alongInput, setAlongInput] = useState('');
  const [inputWithLabel, setInputWithLabel] = useState('');

  return (
    <main className='h-screen py-10'>
      <div className='container h-full bg-white-dark py-4'>
        <InputText placeholder='alongInput' value={alongInput} onChangeValue={setAlongInput} />
        <InputLabel
          labelTitle='Input with label'
          // labelPosition='left'
          tooltipText='This is tooltip'
          placeholder='alongInput'
          value={inputWithLabel}
          onChangeValue={setInputWithLabel}
          required
        />
      </div>
    </main>
  );
}
