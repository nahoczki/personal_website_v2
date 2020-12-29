import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {CardActionArea} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#101D42",
        color: theme.palette.primary.main,
    },
    secondaryText: {
        color: theme.palette.secondary.main
    },
    cardMedia: {
        height: "10vh",
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const Project = (props) => {
    let classes = useStyles();
    //let project = props.project;

    //console.log(project)


    return (
        <Card className={classes.card}>
            <CardActionArea href={``}>
                <CardContent className={classes.cardContent}>
                    <h2 className={classes.secondaryText}>
                        "Chatty App"
                    </h2>
                    <h4>
                        "Chatty App" is a mobile app that utilizes websockets to send messages to another mobile device via
                        a Node.JS backend
                    </h4>
                    <h5 className={classes.secondaryText}>
                        Node.JS, Swift, MongoDB
                    </h5>

                </CardContent>
            </CardActionArea>
        </Card>
    )

}
export default Project;

