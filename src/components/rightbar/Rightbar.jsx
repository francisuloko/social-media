import React from 'react';
import PropTypes from 'prop-types';
import { CardGiftcard } from '@mui/icons-material';
import { Users } from '../../DummyData';
import Online from '../online/Online';
import './rightbar.css';

export default function Rightbar({ profile }) {
  const HomeRightBar = () => (
    <>
      <div className="birthdayContainer flex-center">
        <CardGiftcard className="giftCard" />
        <span className="birthdayText">
          Paola and 3 other friends have birthdays today
        </span>
      </div>
      <img className="rightbarAd" src="assets/persons/person-1.jpg" alt="" />
      <h4 className="rightbarTitle">Friends Online</h4>
      <ul className="rightbarFriendsList">
        { Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
    </>
  );

  const ProfileRightbar = () => (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">City: </div>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">From: </div>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">Relationship: </div>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/persons/profile1.jpg" alt="" className="rightbarFollowingImage" />
          <span className="rightbarFollowingName">User X</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/profile1.jpg" alt="" className="rightbarFollowingImage" />
          <span className="rightbarFollowingName">User X</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/profile1.jpg" alt="" className="rightbarFollowingImage" />
          <span className="rightbarFollowingName">User X</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/profile1.jpg" alt="" className="rightbarFollowingImage" />
          <span className="rightbarFollowingName">User X</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {!profile ? <HomeRightBar /> : <ProfileRightbar /> }
      </div>
    </div>
  );
}

Rightbar.propTypes = {
  profile: PropTypes.string.isRequired,
};
