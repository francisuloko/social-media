import PropTypes from 'prop-types';
import './online.css';

export default function Online({ user }) {
  return (
    <li className="rightbarFriend flex-center">
      <div className="rightbarProfileImageContainer flex-center">
        <img
          className="rightbarProfileImage"
          src={user.profilePicture}
          alt=""
        />
        <span className="rightbarOnline" />
      </div>
      <span className="rightbarUsername">{ user.username }</span>
    </li>
  );
}

Online.propTypes = {
  user: PropTypes.string.isRequired,
};
