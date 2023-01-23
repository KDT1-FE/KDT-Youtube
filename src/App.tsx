import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { ShowContext } from './contexts/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './contexts/AuthContextProvider';

function App() {
  const [shownav, setShownav] = useContext(ShowContext);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Header setShownav={setShownav} shownav={shownav} />
          <section
            style={{
              display: 'flex',
            }}
          >
            <div className="contents">
              <Sidebar setShownav={setShownav} shownav={shownav} />
              <Outlet />
            </div>
          </section>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
