import { GlobalStyle } from "./styles/global";

import { Header } from './components/Header/index'
import { Main } from './components/Main/index'

function App() {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
