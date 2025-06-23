import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import Lesson from './pages/Lesson';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lesson/:id" component={Lesson} />
    </Switch>
  );
}

export default App;