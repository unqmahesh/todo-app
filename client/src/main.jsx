import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'

import App from './App'

import { AuthenticatedContextprovider } from './context-manager/authenticated-context.jsx'
import { TodoListContextProvider } from './context-manager/todo-list-context.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthenticatedContextprovider>
    <TodoListContextProvider>
    <Router>
        <App />
    </Router>
    </TodoListContextProvider>
    </AuthenticatedContextprovider>
)