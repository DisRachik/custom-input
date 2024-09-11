import { useState } from 'react';

import { InputAnnotation } from '@/components/ui/InputAnnotation';
import { InputGroup } from '@/components/ui/InputGroup';
import { InputLabel } from '@/components/ui/InputLabel';
import { InputText } from '@/components/ui/InputText';

export default function App() {
  const [alongInput, setAlongInput] = useState('');
  const [inputWithLabel, setInputWithLabel] = useState('');

  return (
    <main className='h-screen py-10'>
      <div className='container h-full space-y-4 bg-pink-200 py-4'>
        <InputText
          placeholder='alongInput'
          value={alongInput}
          onChangeValue={setAlongInput}
          height='xl'
          required
          type='email'
        />

        <InputGroup direction='vertical' className=''>
          <InputLabel className='' htmlFor='testing' tooltipText='This is tooltip'>
            Input with label Input with label Input with label Input with label Input with label Input with label
          </InputLabel>
          <InputText
            type='email'
            required
            // disabled
            id='testing'
            placeholder='test'
            textRight
            borderNone
            value={inputWithLabel}
            onChangeValue={setInputWithLabel}
          />
          <InputAnnotation className=''>
            Testing inform message Testing inform message Testing inform message
          </InputAnnotation>
        </InputGroup>
      </div>
    </main>
  );
}
