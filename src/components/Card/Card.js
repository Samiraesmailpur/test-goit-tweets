import { useState, useEffect } from "react";
import {
  Button,
  Text,
  Background,
  BorderImg,
  WrapperButton,
} from "./Card.styled";

export const Card = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(user.followers);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("user")) || {};
    const savedUser = savedUsers[user.id] || {};
    setIsFollowing(savedUser.isFollowing || false);
    setFollowerCount(savedUser.followerCount || user.followers);
  }, [user.id, user.followers]);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount(isFollowing ? followerCount - 1 : followerCount + 1);

    const savedUsers = JSON.parse(localStorage.getItem("user")) || {};
    const updatedUsers = {
      ...savedUsers,
      [user.id]: {
        isFollowing: !isFollowing,
        followerCount: isFollowing ? followerCount - 1 : followerCount + 1,
      },
    };
    localStorage.setItem("user", JSON.stringify(updatedUsers));
  };

  return (
    <Background>
      <div>
        <BorderImg>
          <img width={62} height={62} src={user.avatar} alt="avatar" />
        </BorderImg>
        <Text>
          <p>{user.tweets} Tweets</p>
          <p>Followers {followerCount.toLocaleString()}</p>
        </Text>
        <WrapperButton>
          <Button following={isFollowing} onClick={handleFollow}>
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </WrapperButton>
      </div>
    </Background>
  );
};
