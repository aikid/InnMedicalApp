// import React, { useEffect, useRef, useState } from 'react';
// import Picker, { PickerSelectProps } from 'react-native-picker-select';
// import { useField } from '@unform/core';

// export default function({ name, items, ...rest }) {
//   const pickerRef = useRef(null);
//   const { fieldName, registerField, defaultValue = '' } = useField(name);

//   const [selectedValue, setSelectedValue] = useState(defaultValue);

//   useEffect(() => {
//     registerField({
//       name: fieldName,
//       ref: pickerRef.current,
//       getValue: ref => {
//         return ref.props.value || '';
//       },
//       clearValue: ref => {
//         ref.props.onValueChange(ref.props.placeholder.value);
//       },
//       setValue: (_, value) => {
//         setSelectedValue(value);
//       },
//     });
//   }, [fieldName, registerField]);

//   return (
//     <Picker
//       ref={pickerRef}
//       value={selectedValue}
//       onValueChange={setSelectedValue}
//       items={items}
//       style={{ inputAndroid: { color: '#000' } }}
//       {...rest}
//     />

//     <SectionedMultiSelect
//          ref={pickerRef}
//         items={dataBaseInput.dataGruposcirurgico}
//         IconRenderer={Icon}
//         uniqueKey="id"
//         selectText="Grupos Cirurgicos"
//         selectedText="selecionados"
//         showDropDowns={true}
//         readOnlyHeadings={false}
//         showChips={false}
//         onSelectedItemsChange={setSelectedValue}
//         selectedItems={selectedItems}
//         {...rest}
//     />
//   );
// };