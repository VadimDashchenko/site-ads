import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from '../../actions/users';
import { Input, Button } from 'semantic-ui-react';
import userShape from '../../shapes/user';

class LoginForm extends PureComponent{

    static propTypes = {
        createUser: PropTypes.func.isRequired,
        addUser: PropTypes.func.isRequired,
        updateEditableUser: PropTypes.func.isRequired,
        authUserSuccess: PropTypes.func.isRequired,
        editableUser: PropTypes.shape(userShape).isRequired
    };

    handleChange = ({target: {name, value}}) => {
        const { updateEditableUser } = this.props;
        updateEditableUser({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { getUser, editableUser,createUser, authUserSuccess, addUser } = this.props;
        let userName;
        let userPassword;
        for( let i = 0; i < getUser.length; i++){
            userName = getUser[i].name;
            userPassword = getUser[i].password;
        }
        if( editableUser.name !== userName ){
            createUser(editableUser);
            authUserSuccess();
        }
        else if(editableUser.name === userName && editableUser.password === userPassword){
            addUser(editableUser);
            authUserSuccess();
        }
    };

    render() {
        const {editableUser: {name, password} } = this.props;
        return (
            <form className="LoginForm" onSubmit={this.handleSubmit} >
                    <Input
                        placeholder='Введите имя'
                        className="LoginForm_username"
                        value={name}
                        onChange={this.handleChange}
                        name="name"
                        required
                    />
                    <Input
                        type="password"
                        placeholder='Введите пароль'
                        value={password}
                        onChange={this.handleChange}
                        name="password"
                        required
                    />
                    <Button
                        className='LoginForm-btn'
                        primary
                        type="submit"
                        size='mini'
                    >
                        Submit
                    </Button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    editableUser: state.users.editableUser,
    getUser: state.users.userList
});

export default connect(
    mapStateToProps,
    userActions,
)(LoginForm);