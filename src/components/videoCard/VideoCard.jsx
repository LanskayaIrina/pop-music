import React from 'react';
import { string, func, object } from 'prop-types';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
  },
  header: { height: '80px' },
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
    backgroundColor: red[500],
  },
}));

const titleAvatar = title => {
  const arrLetters = title.split(' ');
  return [
    ...arrLetters
      .slice(0, 1)
      .toString()
      .charAt(0),
  ];
};

export const VideoCard = ({
  title,
  date,
  description,
  img,
  id,
  favoriteIconColor,
  getVideoById,
  toggleVideoToFavorite,
}) => {
  const { url } = img;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addFavoriteVideo = id => {
    toggleVideoToFavorite(id);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {titleAvatar(title)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardContent>
        <div className="poster-container" onClick={() => getVideoById(id)}>
          <img className="poster-img" src={url} alt="poster" />
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color={favoriteIconColor} onClick={() => addFavoriteVideo(id)} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={() => alert(`https://www.youtube.com/embed/${id}`)} aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{description}</CardContent>
      </Collapse>
    </Card>
  );
};

VideoCard.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  description: string.isRequired,
  img: object.isRequired,
  id: string.isRequired,
  favoriteIconColor: string.isRequired,
  getVideoById: func.isRequired,
  toggleVideoToFavorite: func.isRequired,
};
