import React from 'react';

interface NameInputProps {
  onNameChange: (value: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ onNameChange }) => {

    function handleNameChange(value: string){
        onNameChange(value);
    }

    return (
        <input type="text" placeholder="Enter your name" onChange={(e) => console.log(handleNameChange(e.target.value))} />
    );
};

export default NameInput;