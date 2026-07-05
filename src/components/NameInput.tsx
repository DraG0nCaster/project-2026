import React from 'react';

interface NameInputProps {
  onNameChange: (value: string) => void;
}

class NameInput extends React.Component<NameInputProps> {
    render() {
        const { onNameChange } = this.props;
        
        return (
            <input type="text" placeholder="Enter your name" onChange={(e) => onNameChange(e.target.value)} />
        );
    }
};

export default NameInput;