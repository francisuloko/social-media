import { Favorite, MoreVert, ThumbUp } from '@mui/icons-material';
import React from 'react';
import './post.css';

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/persons/person-1.jpg"
              alt=""
              className="postProfileImage"
            />
            <span className="postUsername">User 1</span>
            <span className="postDate">5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">My first post!</span>
          <img className="postImage" src="/assets/persons/person-1.jpg" alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp className="likeIcon" htmlColor="blue" />
            <Favorite className="likeIcon" htmlColor="red" />
            <span className="postLikeCounter">32</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
