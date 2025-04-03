import { ThemeProvider } from 'styled-components';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import { Layout } from './components/layout/Layout';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
