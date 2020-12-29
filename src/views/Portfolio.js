import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GithubCorner from "react-github-corner";





const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.primary.main,
        marginTop: "15vh",
        textAlign: "center",
        paddingLeft: 50,
        paddingRight: 50
    },
    headerSecondary: {
        color: theme.palette.secondary.main
    },
}));

const Portfolio = (props) => {

    const classes = useStyles()

    useEffect(() => {

    }, [])

    return (
        <div>
            Portfolio
            <div className={classes.header}>
                <h1>My Projects</h1>

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
