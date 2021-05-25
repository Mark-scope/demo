import {SignUp,Dashboard,Landingpage, WelcomePage,HomePage,Profilepage,Login} from '../pages/index'
import {Switch,Route} from 'react-router-dom'

function RouteComponent() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={Landingpage} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/welcome' component={WelcomePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/profile' component={Profilepage} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
  
  export default RouteComponent;
  