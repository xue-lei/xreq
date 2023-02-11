import { FC } from 'react';
import './App.css';
import Router from './router/Router';

interface Props { }
const App: FC<Props> = (props) => {
    return (
        <div id="App">
            <Router />
        </div>
    )
}

export default App
