import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  //state

  //functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault(); // this stops the default refresh of entire page when an event takes place.
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput(""); //clears the text input after submit is clicked
  };
  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
