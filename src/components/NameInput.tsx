import React from 'react';

interface NameInputProps {
  onNameChange: (value: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ onNameChange }) => {
    return (
        <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => onNameChange(e.target.value)}
        />
    );
};

export default NameInput;