import React from 'react';
import { CardGiftcard } from '@mui/icons-material';
import { Users } from '../../DummyData';
import Online from '../online/Online';
import './rightbar.css';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
}
