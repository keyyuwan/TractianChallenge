import { GlobalStyle } from "./styles/global";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { api } from './services/api'

import { Header } from './components/Header'
import { Main } from './components/Main'
import { CardInfo } from './components/CardInfo'

interface Asset {
    id: number;
    sensors: string[];
    model: string;
    status: string;
    healthscore: number;
    name: string;
    image: string;
    specifications: {
        power: number;
        maxTemp: number;
        rpm: number;
    },
    metrics: {
        totalCollectsUptime: number;
        totalUptime: number;
        lastUptimeAt: string;
    },
    unitId: number;
    companyId: number;
}

function App() {

  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    api.get("assets")
      .then((response) => setAssets(response.data));
  }, []);

  return (
    <>
      <Header />

      <Router>
        <Switch>

          <Route exact path="/">
            <Main assets={assets} />
          </Route>

          <Route exact path="/assets/:id">
            <CardInfo assets={assets} />
          </Route>

        </Switch>
      </Router>

      <GlobalStyle />
    </>
  );
}

export default App;
