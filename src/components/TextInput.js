import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../atoms/text';

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  return (
    <>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      Echo: {text}
    </>
  );
};

export default TextInput;
