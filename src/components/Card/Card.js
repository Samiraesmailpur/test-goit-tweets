import { useState, useEffect } from "react";

export const Card = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(user.followers);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || {};
    const savedUser = savedUsers[user.id] || {};
    setIsFollowing(savedUser.isFollowing || false);
    setFollowerCount(savedUser.followerCount || user.followers);
  }, [user.id, user.followers]);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount(isFollowing ? followerCount - 1 : followerCount + 1);

    const savedUsers = JSON.parse(localStorage.getItem("users")) || {};
    const updatedUsers = {
      ...savedUsers,
      [user.id]: {
        isFollowing: !isFollowing,
        followerCount: isFollowing ? followerCount - 1 : followerCount + 1,
      },
    };
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <div>
        <img width={62} height={62} src={user.avatar} alt="avatar" />
      </div>
      <div>
        <p>{user.tweets} Tweets</p>
        <p>Followers {followerCount.toLocaleString()}</p>
      </div>
      <div>
        <button onClick={handleFollow}>
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};
