import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';

function PrivateRoute ({component: Component, authenticated, tokenQuote, ...rest}) {
  return (
  <Route
    {...rest}
    render={(props) => authenticated === true
      ? <Component tokenQuote={tokenQuote} {...props} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
  />
)
}

class Full extends Component {
  constructor(props) {
    super(props);

  }

componentWillMount() {
  this.setState({
    authenticated: (!(localStorage.getItem("jwt") === null || localStorage.getItem("jwt") === "")),
  });
}

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main" style={{marginLeft: '80px'}}>
            <Container>
              <Switch>
                <PrivateRoute authenticated={this.state.authenticated} path="/home" name="home" component={Dashboard}/>
                <Redirect from="/" to="/home"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
