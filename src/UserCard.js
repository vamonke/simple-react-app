import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import './UserCard.css';

function UserCard(props) {
  const user = props.user;
  return (
    <Card className="card">
      <img alt={user.avatar} src={user.avatar} className="avatar" />
      <Typography variant="h5">
        {user.first_name + ' ' + user.last_name}
      </Typography>
    </Card>
  );
}

export default UserCard;
