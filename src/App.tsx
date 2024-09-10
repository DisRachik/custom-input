import { useState } from 'react';

import { InputText } from './components/ui/InputText/InputText';

export default function App() {
  const [alongInput, setAlongInput] = useState('');
  return (
    <main className='h-screen py-10'>
      <div className='container h-full bg-white-dark py-4'>
        <InputText placeholder='alongInput' value={alongInput} onChangeValue={setAlongInput} />
      </div>
    </main>
  );
}
