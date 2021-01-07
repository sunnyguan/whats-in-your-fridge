import React from 'react';
import Grid from '@material-ui/core/Grid';
import Recipe from './Recipe';
import Typography from '@material-ui/core/Typography';
import { getRecipes } from '../services/UserInfo';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'


class Recipes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
    }

    getGridListCols = () => {
        if (isWidthUp('xl', this.props.width))
            return 6
        return 12;
    }

    componentDidMount() {
        getRecipes(['milk', 'egg', 'sugar']).then(data => {
            this.setState({ groups: data });
        })
    }

    render() {
        console.log(this.state.groups);
        return (
           <>
                
                <Typography variant="h5" gutterBottom>
                    Possible Recipes
                </Typography>
                <br></br>
                <Grid container spacing={3}>
                    {this.state.groups.map((recipe, index) => {
                        return (
                            <Grid item xs={this.getGridListCols()}>
                                <Recipe image={recipe['image']} />
                            </Grid>
                        )
                    })}
                </Grid>
            </>
        );
    }
}

export default Recipes