import { useState } from 'react';

import { InputGroup } from '@/components/ui/InputGroup';
import { InputLabel } from '@/components/ui/InputLabel';
import { InputText } from '@/components/ui/InputText';
import { InputAnnotation } from './components/ui/InputAnnotation';

export default function App() {
  const [alongInput, setAlongInput] = useState('');
  const [inputWithLabel, setInputWithLabel] = useState('');

  return (
    <main className='h-screen py-10'>
      <div className='container h-full space-x-4 bg-white-dark py-4'>
        <InputText placeholder='alongInput' value={alongInput} onChangeValue={setAlongInput} />

        <InputGroup>
          <InputLabel
            // labelPosition='left'
            tooltipText='This is tooltip'
          >
            Input with label
          </InputLabel>
          <InputText placeholder='Input with label' value={inputWithLabel} onChangeValue={setInputWithLabel} />
        </InputGroup>
        <InputGroup>
          <InputLabel
            htmlFor='testing'
            // labelPosition='left'
            tooltipText='This is tooltip'
          >
            Input with label Input with label Input with label Input with label
          </InputLabel>
          <InputText
            id='testing'
            placeholder='Input with label'
            value={inputWithLabel}
            onChangeValue={setInputWithLabel}
          />
          <InputAnnotation>Testing inform message</InputAnnotation>
        </InputGroup>
      </div>
    </main>
  );
}
