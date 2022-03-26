import React from 'react';
import './sidebar.css';
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  Work,
  Event,
  QuestionMarkOutlined,
} from '@mui/icons-material';
import { Users } from '../../DummyData';
import Friends from '../friends/Friends';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Message</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMarkOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Job</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
        </ul>
        <button type="button" className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendsList">
          { Users.map((user) => (
            <Friends key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
