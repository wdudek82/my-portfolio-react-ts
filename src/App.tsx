import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainHeader from './components/UI/MainHeader';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Hamburger from './components/UI/Hamburger';
import MainNavbar from './components/UI/MainNavbar';

interface State {
  isMenuOpened: boolean;
}

class App extends Component<{}, State, {}> {
  public state = {
    isMenuOpened: false,
  };

  private toggleIsOpen = (): void => {
    this.setState((state) => ({ isMenuOpened: !state.isMenuOpened }));
  };

  public render(): React.ReactElement {
    return (
      <>
        <MainNavbar
          clicked={this.toggleIsOpen}
          isMenuOpened={this.state.isMenuOpened}
        />

        <Route path="/" exact component={MainHeader} />

        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
          </Switch>

          <Hamburger
            clicked={this.toggleIsOpen}
            isMenuOpened={this.state.isMenuOpened}
          />
        </main>
      </>
    );
  }
}

export default App;
