import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Secrets from './components/Secrets';

ReactDOM.render(<Secrets />, document.getElementById('root'));

serviceWorker.unregister();
