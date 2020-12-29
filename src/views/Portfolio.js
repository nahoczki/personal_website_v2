import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GithubCorner from "react-github-corner";
import Button from "@material-ui/core/Button";
import gsap from "gsap"
import {Container, Grid, CircularProgress} from "@material-ui/core";

import Project from "../components/Project";


const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.primary.main,
        marginTop: "10vh",
        textAlign: "center",
        paddingLeft: 50,
        paddingRight: 50,
        opacity: 0
    },
    headerSecondary: {
        color: theme.palette.secondary.main
    },
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(8),
    },
    backButton: {
        textTransform: 'none',
        color: theme.palette.secondary.main,
        width: 100
    },
    line: {
        width: 250,
        borderTop: "1px solid",
        color: theme.palette.primary.main
    },
    spinner: {
        top: 150,
        position: 'relative',
        marginLeft: '50%',
        left: -20
    }
}));

const Portfolio = (props) => {

    const classes = useStyles()
    const [isLoading, setLoading] = React.useState(false);
    const [projects, setProjects] = React.useState([]);
    const projectDomNodes = [];


    let [title, hr] = ""

    useEffect(() => {
        gsap.timeline()
            .to(title, { y: "-20", autoAlpha: 1})
            .from(hr, {scaleX: 0, autoAlpha: 0})
    }, [])

    return (
        <div>
            <div className={classes.backButton}>
                <Button
                    href={"/"}
                    className={classes.backButton}
                    color="secondary"
                    disableElevation
                >{"<-- Back"}</Button>
            </div>
            <div
                className={classes.header}
                ref={e => (title = e)}
            >
                <h1>My <span className={classes.headerSecondary}>Projects</span></h1>
                <h5>Below are a few <span className={classes.headerSecondary}>notable</span> projects from my github</h5>
                <hr
                    className={classes.line}
                    ref={e => (hr = e)}
                />
            </div>
            <div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {!isLoading ? <Grid container spacing={4} alignItems={"center"}>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Project/>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Project/>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Project/>
                        </Grid>

                        {/*{projects.map((project, index) => {*/}
                        {/*    return(*/}
                        {/*        <Grid*/}
                        {/*            item*/}
                        {/*            key={project.id}*/}
                        {/*            xs={12}*/}
                        {/*            sm={6}*/}
                        {/*            md={4}*/}
                        {/*        >*/}
                        {/*            <div*/}
                        {/*                ref={e => (projectDomNodes[index] = e)}*/}
                        {/*                style={{opacity:0}}*/}
                        {/*            >*/}

                        {/*            </div>*/}
                        {/*        </Grid>*/}
                        {/*    )*/}
                        {/*})}*/}
                    </Grid> : <CircularProgress className={classes.spinner} />}
                </Container>
            </div>


            <GithubCorner
                href="https://github.com/m4nz"
                bannerColor={"#6564DB"}
                size={100}
            />
        </div>
    );
}


export default Portfolio;
