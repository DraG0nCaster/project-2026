import React, { useState } from 'react';
import NameInput from '../components/NameInput';

const Home: React.FC = () => {

    const [name, setName] = useState<string>('');

    return (
        <div className="container text-center mt-6">
        <h1>Hello {name ? `${name}` : 'World'}!</h1>
        <p>What is your name?</p>
        <NameInput onNameChange={setName} />
        </div>
    );
};

export default Home;