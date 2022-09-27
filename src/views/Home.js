import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import gsap from 'gsap'
import Typography from "@material-ui/core/Typography";
import {Card, CardActionArea} from "@material-ui/core";





const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: "#0D1317"
    },
    header: {
        color: theme.palette.primary.main,
        marginTop: "25vh",
        textAlign: "center",
        paddingLeft: 50,
        paddingRight: 50
    },
    headerSecondary: {
        color: theme.palette.secondary.main
    },
    body: {
        margin: 50,
        textAlign: "center",
    },
    overlay: {
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999,
        display: "flex"
    },
    layerOne: {
        flex: 1,
        backgroundColor: theme.palette.primary.main
    },
    layerTwo: {
        flex: 1,
        backgroundColor: theme.palette.primary.main
    },
    layerThree: {
        flex: 1,
        backgroundColor: theme.palette.primary.main
    },
    layerFour: {
        flex: 1,
        backgroundColor: theme.palette.primary.main
    },
    socialButton: {
        textTransform: 'none',
        color: theme.palette.secondary.main,
        width: 250
    },
    liveProjects: {
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        color: theme.palette.secondary.main,
    },
    projectCard: {
        marginTop: 20,
        width: 250,
        height: 150,
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        borderRadius: 10
    },
    liveIcon: {
        position: 'relative',
        marginLeft: "auto",
        right: 20,
        top: 20,
        marginBottom: -20,
        width: 20,
        height: 20,
        backgroundColor: 'green',
        borderRadius: '50%'
    }




}));

const Home = (props) => {

    const classes = useStyles()
    let [l1, l2, l3, l4, over] = ""

    useEffect(() => {
        gsap.timeline({delay: 0.9})
            .to(l1, {y: "-100vh"}, 0)
            .to(l2, {y: "-100vh"}, 0.1)
            .to(l3, {y: "-100vh"}, 0.2)
            .to(l4, {y: "-100vh"}, 0.3)
            .to(over, {y: "-100vh"}, 0.9)
    }, [])

    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <h1>Hi, i'm <span className={classes.headerSecondary}>Zoltan Nahoczki</span></h1>
                <h3>I am a <span className={classes.headerSecondary}>software developer</span> that has been coding for 5+ years</h3>
            </div>
            <div className={classes.body}>
                <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                        <Button
                            href={"/projects"}
                            className={classes.socialButton}
                            variant="outlined"
                            color="secondary"
                            disableElevation
                        >Projects</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            href={"https://www.linkedin.com/in/zoltannahoczki/"}
                            target={"_blank"}
                            className={classes.socialButton}
                            variant="outlined"
                            color="secondary"
                            disableElevation
                        >LinkedIn</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            href={"https://github.com/nahoczki"}
                            target={"_blank"}
                            className={classes.socialButton}
                            variant="outlined"
                            color="secondary"
                            disableElevation
                        >Github</Button>
                    </Grid>
                </Grid>
                <div className={classes.liveProjects}>
                    <h1>Live projects</h1>
                    <hr className={classes.line} style={{
                        width: '25%'
                    }}/>
                    <Card className={classes.projectCard}>
                        <div className={classes.liveIcon}/>
                        <CardActionArea href={"https://carefindr.us"}
                                        target={"_blank"} style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img src={'./assets/carefindr.png'} width={40}/>
                            <Typography>Carefindr.us</Typography>
                        </CardActionArea>
                    </Card>
                </div>
            </div>


            {/* Intro Animation Elements */}
            <div
                className={classes.overlay}
                ref={e => (over = e)}
            >
                <div
                    className={classes.layerOne}
                    ref={e => (l1 = e)}
                />
                <div
                    className={classes.layerTwo}
                    ref={e => (l2 = e)}
                />
                <div
                    className={classes.layerThree}
                    ref={e => (l3 = e)}
                />
                <div
                    className={classes.layerFour}
                    ref={e => (l4 = e)}
                />
            </div>
        </div>
    );
}


export default Home;
