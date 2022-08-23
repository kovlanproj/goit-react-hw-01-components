import PropTypes from 'prop-types';
import {} from './FriendList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <ul class="friend-list">
      {friendList.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <div></div>
          <img alt={name} src={avatar} />
          <p> {name}</p>
        </li>
      ))}
    </ul>
  );
};
