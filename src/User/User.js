import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import styles from './User.module.css';

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
      return <div>Loading...</div>;
    } else {
      return (
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
      );
    }
  }
}

export default User;
