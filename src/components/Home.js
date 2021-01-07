import React from 'react';
import Grid from '@material-ui/core/Grid';
import Recipe from './Recipe';
import Typography from '@material-ui/core/Typography';
import { getRecipes } from '../services/UserInfo';
import Dashboard from './Dashboard';
import Intro from './Intro';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "", 
            loggedIn: false
        };
        this.success = this.success.bind(this);
        this.logout = this.logout.bind(this);
    }

    success(res) {
        console.log(res);
        this.setState({loggedIn: true, user: res.profileObj})
    }

    logout() {
        this.setState({loggedIn: false, user: {}});
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                {!this.state.loggedIn 
                ? <><Intro onLogin={this.success} /></>
                : <><Dashboard onLogout={this.logout} user={this.state.user} /></>}
            </>
        );
    }
}

export default Home