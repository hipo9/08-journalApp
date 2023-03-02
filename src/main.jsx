import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { JournalApp } from './JournalApp';
import './styles.css';

//ReactDOM.createRoot(document.getElementById('root')).render(
//	<React.StrictMode>
//		<JournalApp />
//	</React.StrictMode>
//);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<JournalApp />
		</BrowserRouter>
	</React.StrictMode>
);
