import React, { useState, useEffect } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //this is where you can write normal javascript
  const [name, setName] = useState("Don Dini");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    console.log("we run a function here");
  }, [tweets]); //the 1st time the app component is lunched this function runs
  return (
    <div>
      <h1>Hello React! My React Twitter App.</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
