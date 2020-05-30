import React from 'react';
import { getCurrentLocale } from './shared/helpers';
import { connect } from 'react-redux';
import { ConfigProvider } from "antd";
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './shared/store';
import MainLayout from './layouts/main-layout';
import LoginLayout from './layouts/login-layout';

interface props{
  lang: string;
  }
  function mapStateToProps(state) {
    return {
      lang: getCurrentLocale(state)
    };
  }
  
class App extends React.Component<props, {}> {
  constructor(props) {
    super(props);
    
		if (this.props.lang === 'ar') {
      console.log('aaaar')
			require('./shared/styles/sadat-ar.scss');
			}
		else {
      console.log('eeeen')

			require('./shared/styles/sadat.scss');
		}
  }
  
	
	render() {
    console.log('lang', this.props.lang)
  return (
    <ConfigProvider direction={this.props.lang == 'ar'? 'rtl' : 'ltr'}>
    <Router history={history}>
				<Switch>
					<Route exact path={['/forget-password', "/login",'/change-password', '/account/verify', '/account/activate']} component={LoginLayout} />
					<Route  component={MainLayout} />
				</Switch>
			</Router>
      </ConfigProvider>

  );
  }
}

export default connect(mapStateToProps)(App);
