import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as pageActions from '../../actions/pages';
import HomePage from '../../components/HomePage/index';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class StartPage extends Component {

    static propTypes = {
        fetchAdsList: PropTypes.func.isRequired,
        loadAds: PropTypes.bool.isRequired,
        deletePage: PropTypes.func.isRequired
    };

    componentDidMount(){
        const { fetchAdsList } = this.props;
        if( JSON.parse(localStorage.getItem('ads')) === null){
            this.loadAds = false;
        } else {
            this.loadAds = true;
            fetchAdsList(JSON.parse(localStorage.getItem('ads')));
        }
    }

    deleteAd = () => {
        const { user, ads,deletePage } = this.props;
        let userName;
        let ad;
        let idAd;
        for(let i = 0; i < ads.length; i++){
            ad = ads[i].authorName;
            idAd = ads[i].id
        }
        for( let i = 0; i < user.length; i++){
            userName = user[i].name;
        }
        if( userName === ad){
            return <Button
            type='submit'
            size="mini"
            color="red"
            onClick={deletePage.bind(this, idAd)}
            >
            Delete
            </Button>
        }
    };

    render(){
        const { ads, loadAds } = this.props;
        return(
            <div className='StartPage'>
                <HomePage />
                <div className='StartPage-content'>
                    {loadAds === true && (
                        <Card.Group className='CardGroup'>
                            {ads.map(({id, title, description, authorName, createAtDataTime}) => (
                                <Card key={id} id={id}>
                                    <Card.Content>
                                        <Link to='/$id'>
                                            <Card.Header>
                                                {title}
                                            </Card.Header>
                                        </Link>
                                        <Card.Description>
                                            {description}
                                        </Card.Description>
                                        <Card.Meta>
                                            {authorName} <br/>
                                            {createAtDataTime}
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div >
                                            {this.deleteAd()}
                                        </div>
                                    </Card.Content>
                                </Card>
                            ))}
                        </Card.Group>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ads: state.pages.getList,
    user: state.users.list,
    loadAds: state.pages.loadAds,
});

export default connect(
    mapStateToProps,
    pageActions
)(StartPage);
