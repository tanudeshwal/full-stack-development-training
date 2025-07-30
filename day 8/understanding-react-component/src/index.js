import ReactDom from 'react-dom/client';
import { MyComponent } from './MyComponent';
const divTag = document.getElementById('root');
const myDom=ReactDom.createRoot(divTag);
myDom.render(<MyComponent />)