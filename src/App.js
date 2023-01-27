import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Routing from './routes/Routing';


function App() {


    const qureyClient = new QueryClient({
        defaultOptions:{
          queries: {
            staleTime: 1000 * 60 * 60 * 24,
            cacheTime: 1000 * 60 * 5
          }
        }
      })
    

    return (
        <QueryClientProvider client={qureyClient}>
            <ReactQueryDevtools initialIsOpen={true}/>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Routing/>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
