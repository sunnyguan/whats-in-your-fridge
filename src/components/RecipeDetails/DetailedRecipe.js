import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

export default class DetailedRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe: {}
        };
    }

    componentDidMount() {
        
    }

    render() {
        const recipe = this.props.recipe;
        return (
            <>
                <Card >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={recipe.image}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {recipe.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Missing {recipe.missedIngredientCount} ingredients: 
                            {/* {(recipe.missedIngredients[0].name)} */}

                        </Typography>
                        {recipe.missedIngredients.map((value) => (
                             <Typography>{value.name}</Typography>
                              ))}
                        <Typography variant="body2" color="textSecondary" component="p">
                            Ready in {recipe.readyInMinutes} minutes
                        </Typography>
                        
                        <Typography variant="body2" color="textSecondary" component="p">
                            {/* Recipe URL: {recipe.spoonacularSourceUrl 
                            ? recipe.spoonacularSourceUrl : recipe.sourceUrl} */}
                            Recipe URL: {recipe.sourceUrl}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href={recipe.spoonacularSourceUrl 
                            ? recipe.spoonacularSourceUrl : recipe.sourceUrl} target="_blank">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </>
        )
    }
}
