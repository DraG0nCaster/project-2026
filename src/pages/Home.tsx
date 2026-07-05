import React from 'react';
import NameInput from '../components/NameInput';

interface HomeProps {
}

interface HomeState {
    name: string;
}

class Home extends React.Component<HomeProps, HomeState> {
    
    state = {
        name: ''
    };

    handleNameChange = (name: string) => {
        this.setState({ name });
    };

    render() {
        const { name } = this.state;

        return (
            <div className="container text-center mt-6">
            <h1>Hello {name ? `${name}` : 'World'}!</h1>
            <p>What is your name?</p>
            <NameInput onNameChange={this.handleNameChange} />
            </div>
        );
    }
};

export default Home;