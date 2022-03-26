import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import { Posts } from '../../DummyData';
import './feed.css';

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
