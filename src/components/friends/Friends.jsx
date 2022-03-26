import React from 'react';
import './friends.css';

export default function Friends() {
  return (
    <li className="sidebarListItem">
      <RssFeed className="sidebarIcon" />
      <span className="sidebarListItemText">Feed</span>
    </li>
  );
}
