import React from 'react';
import './App.css';
import { Redirect, Switch,Route } from 'react-router-dom';
import { pages } from './page';


class App extends React.Component{  
 render(){
   return (
   <React.Fragment>
     <Redirect to='/home' />
     <div>
        <Switch>
          {
            pages.map((detail, index) => {
              return (
                 <Route key={index} exact path={detail['path']} component={detail['component']} />
                )
              })
            }
        </Switch>
      </div>
   </React.Fragment>
  );
 }
 
}
export default App;

