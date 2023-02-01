import { useState } from 'react';
import { Button } from '@/components/Button';

export function AddNewField({ setShowAddNewField, fields, setFields }) {
 const [values, setValues] = useState({
  object_name: '',
  display_name: '',
  description: '',
  type: '',
  weight: '',
  isrequired: '',
 });

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setValues({ ...values, [name]: value });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(values);
  setFields({ ...fields, values });
  setShowAddNewField(false);
 };

 return (
  <>
   <div className='bg-slate-100 m-10 rounded-xl px-10 py-6 '>
    <form onSubmit={handleSubmit} className='grid grid-cols-12 gap-x-6'>
     <div className='my-2 flex flex-col col-span-6'>
      <label className='text-sm font-bold' htmlFor='object_name'>
       Field Object Name
      </label>
      <input
       className='p-2 rounded-lg my-2'
       type='text'
       id='object_name'
       name='object_name'
       required
       value={values.object_name}
       onChange={handleInputChange}
      />
     </div>
     <div className='my-2 flex flex-col col-span-6'>
      <label className='text-sm font-bold' htmlFor='display_name'>
       Field Display Name
      </label>
      <input
       className='p-2 rounded-lg my-2'
       type='text'
       id='display_name'
       name='display_name'
       required
       value={values.display_name}
       onChange={handleInputChange}
      />
     </div>
     <div className='my-2 flex flex-col col-span-6'>
      <label className='text-sm font-bold' htmlFor='description'>
       Field Description
      </label>
      <input
       className='p-2 rounded-lg my-2'
       type='text'
       id='description'
       name='description'
       required
       value={values.description}
       onChange={handleInputChange}
      />
     </div>
     <div className='my-2 flex flex-col col-span-6'>
      <label className='text-sm font-bold' htmlFor='type'>
       Field Type
      </label>
      <select
       className='p-2 rounded-lg my-2'
       id='type'
       type='name'
       required
       value={values.type}
       onChange={handleInputChange}
      >
       <option>Text</option>
       <option>Password</option>
       <option>Email</option>
       <option>Date</option>
       <option>DateTime</option>
       <option>Select</option>
      </select>
     </div>
     <div className='my-2 flex flex-col col-span-6'>
      <label className='text-sm font-bold' htmlFor='weight'>
       Weight (For Sorting)
      </label>
      <input
       className='p-2 rounded-lg my-2'
       type='text'
       id='weight'
       name='weight'
       required
       value={values.weight}
       onChange={handleInputChange}
      />
     </div>
     <div className='my-2 flex flex-col col-span-6'>
      <label className='text-sm font-bold' htmlFor='isrequired'>
       Required
      </label>
      <input
       className='p-2 rounded-lg my-2'
       type='checkbox'
       id='isrequired'
       name='isrequired'
      />
     </div>
     <Button type='submit'>Add</Button>
    </form>
   </div>
  </>
 );
}
