import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import UserCard from './UserCard.js';

import style from './css/Home.module.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      error: null,
      isLoaded: false,
      users: [],
      totalPages: 1
    };
    this.fetchPage = this.fetchPage.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  fetchPage() {
    const page = this.state.page;
    fetch("https://reqres.in/api/users?page=" + page)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result.data,
            totalPages: result.total_pages
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidMount() {
    this.fetchPage();
  }

  changePage(newPage) {
    const totalPages = this.state.totalPages;
    if (1 <= newPage && newPage <= totalPages) {
      this.setState({ page: newPage });
      this.fetchPage();
    }
  }

  render() {
    const { error, isLoaded, users, page, totalPages } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="center">Loading...</div>;
    } else {
      return (
        <div>
          <Grid container spacing={24}>
            {users.map(user => (
              <Grid item xs={4} key={user.id}>
                <UserCard user={user} key={user.name}/>
              </Grid>
            ))}
          </Grid>
          <div className={style.btns}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => this.changePage(page-1)}
              disabled={page === 1}
              disableRipple>
              Previous
            </Button>
            <span className={style.page}>
              {` Page ${page} of ${totalPages} `}
            </span>
            <Button
              variant="outlined"
              color="default"
              onClick={() => this.changePage(page+1)}
              disabled={page === totalPages}
              disableRipple>
              Next
            </Button>
          </div>
        </div>
      );
     }
  }
}

export default Home;
