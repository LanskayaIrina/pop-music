import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { objectOf, string, func } from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useFormik } from 'formik';

const validateLogin = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more, 1 big letter, 1 small letter and 1 digit';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
    errors.password = 'Must be at list 1 big letter, 1 small letter and 1 digit';
  } else if (/\W/.test(values.password)) {
    errors.password = 'Only letters and digits are supported';
  }

  return errors;
};

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#f44336',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  createAccount: {
    fontSize: '30px',
  },
}));

export const Login = ({ authUser, checkedUser, rememberedUser, checkUser, rememberUser }) => {
  const classes = useStyles();
  const { push } = useHistory();
  const [checked, setChecked] = useState(false);
  const [auth, setAuth] = useState(true);
  const submiting = () => {
    checkUser(formik.values.email, formik.values.password);

    // if (Object.keys(checkedUser).length === 0) {
    if (checkedUser[0].name === '') {
      setAuth(false);
    }
  };

  useEffect(() => {
    // if (Object.keys(checkedUser).length !== 0) {
    if (checkedUser[0].name !== '') {
      const userData = {
        isAuthorized: true,
        name: checkUser.name,
      };
      authUser(userData);
      push('/home');
    }

    // eslint-disable-next-line
  }, [checkedUser]);

  const formik = useFormik({
    initialValues: {
      email: '' || rememberedUser.email,
      password: '' || rememberedUser.password,
    },
    validate: validateLogin,
    onSubmit: () => {
      submiting();
    },
  });

  const rememberMe = () => {
    const user = { name: formik.values.name, email: formik.values.email, password: formik.values.password };
    rememberUser(user);
    setChecked(true);
  };

  const loginLayout = (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText={formik.errors.email}
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={formik.errors.password}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <FormControlLabel
              control={<Checkbox checked={checked} value="remember" color="primary" />}
              label="Remember me"
              onChange={rememberMe}
            />
            {auth && (
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Sign In
              </Button>
            )}

            <Grid container justify="center">
              {auth ? (
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              ) : (
                  <Link className={classes.createAccount} href="/register" variant="body2">
                    {'Create account'}
                  </Link>
                )}
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );

  return <>{loginLayout}</>;
};

Login.propTypes = {
  authUser: func.isRequired,
  checkedUser: objectOf(string).isRequired,
  rememberedUser: objectOf(string).isRequired,
  checkUser: func.isRequired,
  rememberUser: func.isRequired,
};
