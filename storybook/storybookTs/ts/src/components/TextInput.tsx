import React from 'react';
import './button.css';

interface TextInputProps {
  value: string,
  id: number,
}

/**
 * Primary UI component for user interaction
 */
export const TextInput = ({ value, id
}: TextInputProps) => {
  return (
    <input id={`textInput_${id}`} value={value} />
  );
};
