import { React, useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import About from './pages/About';
import Deck from './pages/Deck';
import Games from './pages/Games';
import Matching from './pages/Matching';
import Loom from './pages/Loom';

function App() {
  const [location] = useLocation();
  useEffect( () => {
      if (location.startsWith('/lesson') || location.startsWith('/matching')) {
        document.documentElement.classList.add('lesson-page-background');
      } else {
        document.documentElement.classList.remove('lesson-page-background');
      }
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lesson/:id" component={Lesson} />
      <Route path="/about" component={About} />
      <Route path="/deck" component={Deck} />
      <Route path="/games" component={Games} />
      <Route path="/matching" component={Matching} />
      <Route path="/loom" component={Loom} />
    </Switch>
  );
}

export default App;