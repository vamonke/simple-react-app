import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';


import './UserCard.css';

function UserCard(props) {
  const user = props.user;
  return (
    <Link component={RouterLink} to={'/user/' + user.id} underline="none">
      <Card className="card">
        <img alt={user.avatar} src={user.avatar} className="avatar" />
        <Typography variant="h5">
          {user.first_name + ' ' + user.last_name}
        </Typography>
      </Card>
    </Link>
  );
}

export default UserCard;
