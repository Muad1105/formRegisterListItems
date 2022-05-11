import * as ReactDOM from 'react-dom';
import { Router } from './router';
import { store } from './store';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
