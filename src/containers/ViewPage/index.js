import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActions from '../../actions/pages';
import { Redirect } from 'react-router-dom';
import {
    Card,
    CardContent,
    Button,
    Typography,
    withStyles
} from '@material-ui/core';

const styles = {
    card: {
        display: 'flex',
        justifyContent: 'center',
        width: 700,
        margin: '15% 25%'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        width: 20,
        marginTop: 20,
    }
};

class ViewPage extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        deletePage: PropTypes.func.isRequired,
        deleteAd: PropTypes.bool.isRequired,
        match:PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    };

    handleSubmit = () => {
      const { deletePage, viewedAd } = this.props;
      let idAd;
      for(let i = 0; i < viewedAd.length; i++){
          idAd = viewedAd[i].id;
      }
            return deletePage.bind(this, idAd);
    };

    render() {
        const { classes, viewedAd, loggedIn, deleteAd } = this.props;
        return (
            <div>
                {deleteAd === true && <Redirect to='/'/>}
                {viewedAd.map(({id, title, authorName,  description, createAtDataTime}) => (
                    <Card className={classes.card}>
                        <CardContent key={id} id={id} className={classes.content}>
                            <Typography className={classes.title} variant="h5" component="h2">
                                {title}
                                </Typography>
                            <Typography variant="h4" component="h2">
                                {description}
                                </Typography>
                                <br/>
                            <Typography component="p">
                                author: {authorName}
                                    <br/>
                                    {createAtDataTime}
                                </Typography>
                                {loggedIn === true && (
                                    <div>
                                        <Button
                                            className={classes.button}
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            onClick={this.handleSubmit()}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                        )
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    viewedAd: state.pages.listAd,
    loggedIn: state.users.isAuth,
    userName: state.users.userList,
    getList: state.pages.getList,
    deleteAd: state.pages.delete
});

export default connect(
    mapStateToProps,
    pageActions
)(withStyles(styles)(ViewPage))