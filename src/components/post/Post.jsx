import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Favorite, MoreVert, ThumbUp } from '@mui/icons-material';
import { Users } from '../../DummyData';
import './post.css';

export default function Post({ post }) {
  const user = Users.filter((user) => user.id === post.userId);
  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user[0].profilePicture}
              alt=""
              className="postProfileImage"
            />
            <span className="postUsername">
              { user[0].username }
            </span>
            <span className="postDate">
              { post.date }
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            { post?.desc }
          </span>
          <img className="postImage" src={post.photo} alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp onClick={handleLike} className="likeIcon" htmlColor="blue" />
            <Favorite onClick={handleLike} className="likeIcon" htmlColor="red" />
            <span className="postLikeCounter">
              { like }
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">
              { post.comment }
              comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.string.isRequired,
};
