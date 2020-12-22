import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import {Card as coreCard} from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Card(props){
// we slice of object

    const { author, link, thumb_url_medium, section} = props.data

    return (
        // <div class="cardContainer">
        //     <img src={thumb_url_medium}></img>
        //     <a href={link} >{section}</a>
        //     <h1>by: {author}</h1>   
        // </div>
        
        <coreCard className="cardContainer" onClick={() => {window.open(link, "_newtab")}}>
            
            <CardHeader  
                title={section}
               // subheader={section}
                className="cardHeader"
            />
            <CardMedia 
                src={thumb_url_medium}  
                component="img"

            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {author}  </Typography>
        </CardContent>
        </coreCard>
    )
} 

export default Card;