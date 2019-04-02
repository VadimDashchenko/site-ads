import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
//
// const user = ({editableUser, users}) => {
//     if(editableUser.name === users.name){
//         {users.map(({id, name}) => (
//             <h2 key={id}
//             >{name}</h2>
//         ))}
//     }
// };

const Header = ({user}) => (
    <div className="Header">
        {user.map(({id, name}) => (
            <h2 key={id}
            >{name}</h2>
        ))}
        <section className="Header-link">
            <h2><NavLink to='/logout'>Log Out </NavLink></h2>
            <h2><Link to='/edit'> Create Ad</Link></h2>
        </section>
    </div>
);

const mapStateToProps = state => ({
    user: state.users.list,
    users: state.users.userList,
    editableUser: state.users.editableUser
});

export default connect(
    mapStateToProps
)(Header);