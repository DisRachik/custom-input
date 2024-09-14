import { useState } from 'react';

import { InputAnnotation } from '@/components/ui/InputAnnotation';
import { InputGroup } from '@/components/ui/InputGroup';
import { InputLabel } from '@/components/ui/InputLabel';
import { InputText } from '@/components/ui/InputText';

export default function App() {
  const [alongInput, setAlongInput] = useState('');
  const [inputWithLabel, setInputWithLabel] = useState('');

  return (
    <main className='h-screen overflow-hidden py-10'>
      <div className='container h-full space-y-4 bg-[#f7fee7] py-4 dark:bg-dark'>
        <InputText
          placeholder='alongInput'
          value={alongInput}
          onChangeValue={setAlongInput}
          height='lg'
          required
          type='email'
        />

        <InputGroup direction='vertical'>
          <InputLabel htmlFor='testing' informText='This is tooltip`s text'>
            Input with label
          </InputLabel>
          <InputText
            type='email'
            informText='This is tooltip`s text'
            icon
            buttonSettings
            required
            // disabled
            height='xl'
            id='testing'
            placeholder='test'
            textRight
            borderNone
            value={inputWithLabel}
            onChangeValue={setInputWithLabel}
          />
          <InputAnnotation>Testing inform message</InputAnnotation>
        </InputGroup>
      </div>
    </main>
  );
}
