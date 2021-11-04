import { BrowserRouter } from 'react-router-dom';

import routers from './route';
import Header from './components/header';

import './App.less';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      {routers}
    </BrowserRouter>
  );
}

export default App;
