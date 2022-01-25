import React, { useRef, useEffect }  from 'react';
import { DinamicInput } from './styles';
import { useField } from '@unform/core';

function Input({ name, icon, style, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <DinamicInput
        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={value => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
      {/* {error && <span>{error}</span>} */}
    </>
  );
};

export default Input;