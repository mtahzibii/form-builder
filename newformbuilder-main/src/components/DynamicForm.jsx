const formSchema = {
 title: 'My Form 1',
 description: 'Form 1 Description',
 fields: {
  name: {
   title: 'Name',
   type: 'text',
   description: 'name of user',
   required: true,
   weight: 1,
  },
  password: {
   title: 'Password',
   type: 'password',
   description: 'password of user',
   required: true,
   weight: 1,
  },
  phone: {
   title: 'Phone',
   type: 'tel',
   description: 'phone number of user',
   required: false,
   weight: 1,
  },
  gender: {
   title: 'Gender',
   type: 'select',
   values: ['Male', 'Female', 'Other'],
   description: 'Gender of user',
   required: true,
   weight: 1,
  },
  birthday: {
   title: 'Birthday',
   type: 'date',
   description: 'Birthday of user',
   required: false,
   weight: 1,
  },
 },
};

const sortedFields = Object.entries(formSchema.fields)
 .sort(
  ([, fieldOptionsA], [, fieldOptionsB]) =>
   fieldOptionsA.weight - fieldOptionsB.weight
 )
 .map(([fieldName, fieldOptions]) => {
  switch (fieldOptions.type) {
   case 'select':
    return (
     <div className='my-8 flex flex-col' key={fieldName}>
      <label className='text-sm font-bold' htmlFor={fieldName}>
       {fieldOptions.title}
      </label>
      <select
       className='p-2 rounded-lg my-2'
       type={fieldOptions.type}
       id={fieldName}
       name={fieldName}
       required={fieldOptions.required}
      >
       {fieldOptions.values.map((value) => (
        <option key={value} value={value}>
         {value}
        </option>
       ))}
      </select>
     </div>
    );
   default:
    return (
     <div className='my-8 flex flex-col' key={fieldName}>
      <label className='text-sm font-bold' htmlFor={fieldName}>
       {fieldOptions.title}
      </label>
      <input
       className='p-2 rounded-lg my-2'
       type={fieldOptions.type}
       id={fieldName}
       name={fieldName}
       required={fieldOptions.required}
      />
     </div>
    );
  }
 });

export function DynamicForm() {
 return (
  <div className='bg-slate-100 m-10 rounded-xl px-10 py-6'>
   <h2 className='font-bold my-4 '>{formSchema.title}</h2>
   <p>{formSchema.description}</p>
   <form className='mt-4'>{sortedFields}</form>
  </div>
 );
}
