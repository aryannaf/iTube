import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';



function App() {


    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/videos/:id" component={Home} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
