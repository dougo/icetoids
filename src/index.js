import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import App from 'components/App';

const root = document.createElement('div');
document.body.append(root);
ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, root);
