import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, ThemeProvider } from 'react-bootstrap';
import { Home } from './Components/Main/Home';

function App() {

  const breakpoints=[]

  return (
      <>
        <Header />
        <Container fluid className="px-0">
          <ThemeProvider
            breakpoints={{ breakpoints }}
            minBreakpoint="xxs"
          >
            <Home />
          </ThemeProvider>
        </Container>
      </>
  );
}

export default App;
