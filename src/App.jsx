import { React, useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import About from './pages/About';
import Progress from './pages/Progress';

function App() {
  const [location] = useLocation();
  useEffect( () => {
      if (location.startsWith('/lesson')) {
        document.body.classList.add('lesson-page-background');
      } else {
        document.body.classList.remove('lesson-page-background');
      }
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lesson/:id" component={Lesson} />
      <Route path="/about" component={About} />
      <Route path="/progress" component={Progress} />
    </Switch>
  );
}

export default App;