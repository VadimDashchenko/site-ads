import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditPage from "../../containers/EditPage/index";
import StartPage from "../../containers/StartPage/startPage";
import ViewPage from "../ViewPage";
import LoginForm from '../LoginForm';
import * as usersActions from '../../actions/users';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';



class App extends PureComponent{

    static propTypes = {
        fetchUsersList: PropTypes.func.isRequired,
        loadUsers: PropTypes.bool.isRequired
    };

    componentDidMount() {
        const { fetchUsersList } = this.props;
        if( JSON.parse(localStorage.getItem('users')) === null){
            this.loadUsers = false
        } else {
            this.loadUsers = true;
            fetchUsersList(JSON.parse(localStorage.getItem('users')));
        }
    }

    render(){
        return(
            <Router>
                <div className='Router'>
                        <Switch>
                            <Route exact path='/' component={StartPage} />
                            <Route path='/edit' component={EditPage} />
                            <Route path='/logout' component={LoginForm} />
                            <Route path='/$:id' component={ViewPage} />
                        </Switch>
                </div>
            </Router>
        )
    }

}

const mapStateToProps = state => ({
    loadUsers: state.users.loadUsers,
    redirect : state.pages.redirect
});

export default connect(
    mapStateToProps,
    usersActions
)(App);
