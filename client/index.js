import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './styles/styles.scss';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

// import React from 'react';
// import reactDom from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'
// //import { createRoot } from 'react-dom/cjs/react-dom.production.min';
// import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );

