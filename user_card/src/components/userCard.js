import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    root: {
        Width: "auto",
        display: "flex",
        alignItems: "center",
        // margin: 100,
        justifyContent: "center",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        // transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    TopInfo: {
        fontsize: "30px",
        fontWeight: "bold",
    }
}));


const UserCard = (props) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);

    };

    return (
        <Card className={classes.root}>
            <div className="retainer">
                <CardHeader
                    className="TopInfo"
                    title={props.userData.name}
                    subheader={props.userData.login}
                />


                <div className="bottomInfo">
                    <CardMedia
                        className="avatar"
                        component="img"
                        image={props.userData.avatar_url}
                    />
                    <p>Following: {props.userData.following}</p>

                    <div
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <p className="hover">Followers: {props.userData.followers}</p>
                    </div>
                    <p>Repos: {props.userData.public_repos}</p>
                </div>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {props.followers.map(follower => (
                                <div key={follower.id}>
                                    <h3 className="hover" onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more">{follower.login}</h3>
                                    <Collapse id={follower.id} in={expanded} timeout="auto" unmountOnExit>
                                        <p>{follower.gravatar_id}</p>
                                        <img className="avatar" src={follower.avatar_url} />
                                    </Collapse>

                                </div>
                            ))}
                        </Typography>
                    </CardContent>
                </Collapse>
                {/* <div
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    {props.followers.map(follower => (
                        <div key={follower.id}>

                            <p>{follower.gravatar_id}</p>
                            <img className="avatar" src={follower.avatar_url} />
                        </div>
                    ))}

                </div> */}

            </div>
        </Card>

    )

}

export default UserCard;

{/* <div
    className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
>
    <h3 className="hover">{follower.login}</h3>
</div>

    <Collapse in={expanded} timeout="auto" unmountOnExit>
        <p>{follower.gravatar_id}</p>
        <img className="avatar" src={follower.avatar_url} />
    </Collapse> */}
