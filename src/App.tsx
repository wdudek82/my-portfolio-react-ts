import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/UI/Navbar';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import CV from './components/CV';

const App = (): React.ReactElement => {
  return (
    <>
      <Navbar />

      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/cv" component={CV} />
        </Switch>
      </main>
    </>
  );
};

export default App;
