import React, { useState } from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {blue} from "@material-ui/core/colors";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles(( theme ) => ({
    root: {
        maxWidth: 345,
        margin: 10
    },
    media: {
        height: 0,
        paddingTop: '10%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
}));

function IdeasGroup({id, name, ideas, comments, rel}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <Card style={{cursor: 'pointer'}} className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar>
                        A
                    </Avatar>
                }
                title={name}
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardContent>
                Вывод первых трёх элементов массива
            </CardContent>
            <CardActions disableSpacing>

                {/*  className={clsx(classes.expand, {*/}
                {/*    [classes.expandOpen]: expanded,*/}
                {/*  })}*/}
                {/*  onClick={handleExpandClick}*/}
                {/*  aria-expanded={expanded}*/}
                {/*  aria-label="show more"*/}
                {/*>*/}
                {/*  <ExpandMoreIcon/>*/}

            </CardActions>


        </Card>

    )

}

export default IdeasGroup;