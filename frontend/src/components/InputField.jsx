import React from 'react';

function InputField({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div className='flex flex-col'>
      <label
        className='mb-1 text-gray-700'
        htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500'
        required={required}
      />
    </div>
  );
}

export default InputField;
