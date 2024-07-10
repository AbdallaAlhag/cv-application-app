import { useState } from 'react';
import Navigation from './components/Navigation';
import PersonalForm from './components/PersonalForm';
import LinkForm from './components/LinkForm';
import EtcForm from './components/EtcForm';
import './App.css';

const App = () => {
    const [currentForm, setCurrentForm] = useState('personal');

    const renderForm = () => {
        switch (currentForm) {
            case 'personal':
                return <PersonalForm />;
            case 'link':
                return <LinkForm />
            case 'skill':
                return <EtcForm />;
            default:
                return <PersonalForm />;
        }
    };

    return (
        <div className="app">
            <Navigation setForm={setCurrentForm} />
            <div className="form-container">
                {renderForm()}
            </div>
        </div>
    );
};

export default App;
