import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/users';
import LoginForm from '../../containers/LoginForm/index';
import Header from '../Header/header';

class HomePage extends Component {

    renderTitle = () => {
        const {userAuth} = this.props;
        if (userAuth === true) {
            return <Header />
        }
        return <LoginForm />
    };

    render() {
        return (
            <div className='HomePage-header'>
                {this.renderTitle()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userAuth: state.users.isAuth,
});

export default connect(
    mapStateToProps,
    userActions
)(HomePage);