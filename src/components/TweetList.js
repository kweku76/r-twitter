import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          setTweets={setTweets}
          name={name}
          tweet={tweet}
          tweets={tweets}
          key={tweet.id}
        /> //each time we submit text it will create a new tweet component
      ))}
    </div>
  );
};

export default TweetList;
