import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import styles from './css/User.module.css';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      error: null,
      isLoaded: false,
      user: null
    };
  }

  componentDidMount() {
    const id = this.state.id;
    fetch("https://reqres.in/api/users/" + id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  render() {
    const { error, isLoaded, user } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="center">Loading...</div>;
    } else {
      return (
        <div>
          <Card className={styles.card}>
            <CardMedia
              className={styles.avatar}
              image={user.avatar}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {user.first_name + ' ' + user.last_name}
              </Typography>
              <Icon>mail_outline</Icon>
              <span className={styles.email}>
                {user.email}
              </span>
            </CardContent>
          </Card>
          <div className="center">
            <Button
              variant="outlined"
              color="default"
              href="/"
              disableRipple>
              Back
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default User;
