import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActions from '../../actions/pages';
import { Typography, TextField, Button, withStyles} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import adShape from '../../shapes/ad';

const styles = {
    root: {
        width: '100%',
        marginTop:200,
        display: 'flex',
        justifyContent:" center",
    },
    content: {
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection:'column'
    },
    button: {
        margin: 20,
        width: 100
    }
};

class EditPage extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        setAuthorName: PropTypes.func.isRequired,
        setDate: PropTypes.func.isRequired,
        redirectPage: PropTypes.func.isRequired,
        redirect: PropTypes.bool.isRequired,
        addAd: PropTypes.func.isRequired,
        createAd: PropTypes.func.isRequired,
        addEditableAd: PropTypes.func.isRequired,
        resetEditableAd: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired,
        editableAd: PropTypes.shape(adShape).isRequired
    };

    handleChange = ({target: {name, value}}) => {
        const { addEditableAd } = this.props;
        addEditableAd({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let date = new Date();
        let fullDate = date.getDate() + ' : ' + date.getMonth() + ' : ' + date.getFullYear();
        const { editableAd, resetEditableAd, setDate, setAuthorName, name, createAd } = this.props;
        setDate(fullDate);
        setAuthorName(name);
        if(editableAd.id === null) {
            createAd(editableAd);
        }
        resetEditableAd();
    };

    render(){
        const { editableAd: {title, description}, classes, redirect} = this.props;
        return(
            <section className={classes.root}>
                {redirect === true && <Redirect to='/$:id'/>}
                <div className={classes.content}>
                    <Typography   variant="h2" >
                        Create sell ad
                    </Typography>
                    <TextField
                        label="Title"
                        type="text"
                        name='title'
                        value={title}
                        onChange={this.handleChange}
                        required
                    />
                    <TextField
                        label="Description"
                        type="text"
                        name='description'
                        value={description}
                        onChange={this.handleChange}
                        required
                    />
                    <Button
                        onClick={this.handleSubmit}
                        size='small'
                        variant="outlined"
                        color="primary"
                        className={classes.button}>
                        Create
                    </Button>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    editableAd: state.pages.editableAd,
    redirect: state.pages.redirect,
    name: state.users.editableUser.name,
});


export default connect(
    mapStateToProps,
    pageActions
)(withStyles(styles)(EditPage))