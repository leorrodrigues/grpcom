import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';

import Routes from './routes';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes />
            </Layout>
        </Router>
    );
};

export default App;
