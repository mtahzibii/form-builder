import { Button } from '@/components/Button';
import { AddNewField } from '@/components/forms/AddNewField';
import { useState } from 'react';

const newFormSchema = {};

export default function Home() {
 const [showAddNewField, setShowAddNewField] = useState(false);
 const [fields, setFields] = useState({});
 const handleButtonClick = () => {
  setShowAddNewField(!showAddNewField);
 };

 return (
  <>
   <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
    <div className='text-center'>
     <h1 className='text-3xl font-bold mt-12'>Create A New Form</h1>
     <div className='my-4'>
      <Button onClick={handleButtonClick}>Add New Field</Button>
     </div>
    </div>
    <div className='my-2 flex flex-col bg-slate-50 p-6 rounded-xl'>
     <label className='text-sm font-bold' htmlFor='title'>
      Form Title
     </label>
     <input
      className='p-2 rounded-lg my-2'
      type='text'
      id='title'
      name='title'
      required
     />
     <label className='text-sm font-bold' htmlFor='description'>
      Form Description
     </label>
     <input
      className='p-2 rounded-lg my-2'
      type='text'
      id='description'
      name='description'
      required
     />
    </div>
    {showAddNewField && (
     <AddNewField
      key={Date.now()}
      setShowAddNewField={setShowAddNewField}
      fields={fields}
      setFields={setFields}
     />
    )}
   </div>
   <div className='bg-emerald-200 p-10'>
    <p>{JSON.stringify(fields)}</p>
   </div>
  </>
 );
}
