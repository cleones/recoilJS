import React from 'react';
import TextInput from './TextInput';
import CharacterCount from './CharacterCount';

const CharacterCounter = () => {
  return (
    <>
      <TextInput />
      <br />
      <CharacterCount />
    </>
  );
};

export default CharacterCounter;
