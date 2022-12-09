import App from './App';
import {BrowserRouter}  from "react-router-dom";
import ReactDOMClient from "react-dom/client";


ReactDOMClient.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App/>
</BrowserRouter>
    );
