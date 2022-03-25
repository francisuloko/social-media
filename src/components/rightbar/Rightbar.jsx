import { CardGiftcard } from '@mui/icons-material';
import React from 'react';
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
          <li className="rightbarFriend flex-center">
            <div className="rightbarProfileImageContainer flex-center">
              <img className="rightbarProfileImage" src="assets/persons/person-1.jpg" alt="" />
              <span className="rightbarOnline" />
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriend flex-center">
            <div className="rightbarProfileImageContainer flex-center">
              <img className="rightbarProfileImage" src="assets/persons/person-1.jpg" alt="" />
              <span className="rightbarOnline" />
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriend flex-center">
            <div className="rightbarProfileImageContainer flex-center">
              <img className="rightbarProfileImage" src="assets/persons/person-1.jpg" alt="" />
              <span className="rightbarOnline" />
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
