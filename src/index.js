import App from "./App";
import ReactDOM from 'react-dom/client'
import {ThemeContextProvider} from './contexts/theme-context'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
)