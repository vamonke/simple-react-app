import React from 'react';
import Grid from '@material-ui/core/Grid';

import UserCard from './UserCard.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      error: null,
      isLoaded: false,
      users: []
    };
  }

  componentDidMount() {
    const page = this.state.page;
    fetch("https://reqres.in/api/users?page=" + page)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result.data
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
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Grid container spacing={24}>
          {users.map(user => (
            <Grid item xs={4} key={user.name}>
              <UserCard user={user} key={user.name}/>
            </Grid>
          ))}
        </Grid>
      );
    }
  }
}

export default Home;
