import {Switch, Route} from 'react-router-dom'

import Navbar from './components/navbar'

import Homepage from './pages/homepage/homepage'
import Userpage from './pages/userpage/userpage'

const App = () => {
  return (
    <div> 
      <Switch>
    <div>
      <Navbar />

        <Route exact path='/' component={Homepage}/>
        <Route path='/user/:id' component={Userpage}/>
    </div>
      </Switch>
    </div>
  );
}

export default App;
