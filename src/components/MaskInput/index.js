import React, { useState, useCallback, forwardRef } from 'react';
import { DinamicInputMask } from './styles';
import Input from '../Input';

const MaskInput = ({ type, ...rest }, inputRef) => {
  const [text, setText] = useState('');
  const [rawText, setRawText] = useState('');
  const handleChangeText = useCallback((maskedText, unmaskedText) => {
    setText(maskedText);
    setRawText(unmaskedText);
  }, []);
  return (
    <DinamicInputMask
      type={type}
      includeRawValueInChangeText
      value={text}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText,
      }}
      {...rest}
    />
  );
};
export default forwardRef(MaskInput);