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
      <div className='container h-full space-y-4 bg-pink-200 py-4'>
        <InputText
          placeholder='alongInput'
          value={alongInput}
          onChangeValue={setAlongInput}
          height='lg'
          required
          type='email'
        />

        <InputGroup direction='vertical' className=''>
          <InputLabel
            className=''
            htmlFor='testing'
            informText='This is tooltip`s text This is tooltip`s text This is tooltip`s textThis is tooltip`s text This is tooltip`s text This is tooltip`s textThis is tooltip`s textThis is tooltip`s text This is tooltip`s text'
          >
            Input with label Input with label Input with label Input with label Input with label Input with label label
            label
          </InputLabel>
          <InputText
            type='email'
            informText='This is tooltip`s text'
            icon
            buttonSettings
            required
            // disabled
            id='testing'
            placeholder='test'
            textRight
            // borderNone
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
