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
            groups: [],
            loggedIn: false
        };
        this.success = this.success.bind(this);
        this.logout = this.logout.bind(this);
    }

    success() {
        this.setState({loggedIn: true})
    }

    logout() {
        this.setState({loggedIn: false});
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                {!this.state.loggedIn 
                ? <><Intro onLogin={this.success} /></>
                : <><Dashboard onLogout={this.logout} /></>}
            </>
        );
    }
}

export default Home