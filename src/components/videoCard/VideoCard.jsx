import React, { useState } from 'react';
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
  darkRoot: {
    backgroundColor: '#262626',
  },
  header: { height: '80px', overflow: 'hidden' },
  darkHeader: {
    color: '#fff',
    height: '80px',
    overflow: 'hidden',
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
  setVideoPlayer,
  title,
  date,
  description,
  img,
  id,
  favoriteIconColor,
  showVideoInPayer,
  addIdVideoToFavorite,
  addFavoriteVideo,
  theme,
}) => {
  const { url } = img;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const objFavoriteVideo = { title, date, description, img, id };

  const scrollToTop = () => {
    // eslint-disable-next-line no-undef
    setTimeout(() => window.scrollTo(0, 0), 1000);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={theme === 'Light' ? classes.root : classes.darkRoot}>
      <CardHeader
        className={theme === 'Light' ? classes.header : classes.darkHeader}
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
        <div
          className="poster-container"
          onClick={() => {
            showVideoInPayer(id);
            setVideoPlayer(true);
            scrollToTop();
          }}
        >
          <img className="poster-img" src={url} alt="poster" />
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          color={favoriteIconColor}
          onClick={() => {
            addIdVideoToFavorite(id);
            addFavoriteVideo(objFavoriteVideo);
          }}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
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
        <CardContent>
          <div className={theme === 'Dark' && 'description-dark-theme'}>{description}</div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

VideoCard.propTypes = {
  setVideoPlayer: func.isRequired,
  title: string.isRequired,
  date: string.isRequired,
  description: string.isRequired,
  img: object.isRequired,
  id: string.isRequired,
  favoriteIconColor: string.isRequired,
  showVideoInPayer: func.isRequired,
  addIdVideoToFavorite: func.isRequired,
  addFavoriteVideo: func.isRequired,
  theme: string.isRequired,
};
