import React from "react";

const UserInfo = props => {
    return (
    <div className="user-info">
      <div className="avatar">
        <img src={props.user.avatar_url} alt="avatar" width="250px" />
      </div>
      <div className="content">
        <h1>{props.user.name}</h1>
        <div>
          <strong>Bio: </strong>
          {props.user.bio}
        </div>
        <div>
          <strong>Location:</strong> {props.user.location}
        </div>
        <div>
          <strong>Followers:</strong> {props.user.followers}
        </div>
        <div>
          <strong>Following:</strong> {props.user.following}
        </div>
      </div>
    </div>
    );
};

export default UserInfo;