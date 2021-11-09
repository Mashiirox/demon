import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import routers from './route';
import Header from './components/header';

import './App.less';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='the-whole-bg' />
        <Header />
        <div className='page'>
          {routers}
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
