import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import User from './components/User';
import UsersList from './components/UsersList';

class UsersList extends React.Component {
  get users() {
    return this.props.users.map(user => <User key={user.id} user={user}/>);
  }

  render() {
    return (
      <div>
        {this.users}
      </div>
    );
  }
}

export default UsersList;