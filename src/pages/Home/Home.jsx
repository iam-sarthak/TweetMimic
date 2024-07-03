import React, { useRef, useState } from "react";
import TweetInput from "../../comp/TweetInput/TweetInput";
import TweetOutput from "../../comp/TweetOutput/TweetOutput";
import "./Home.css";
import exportAsImage from "../../comp/ExportAsImage";

const Home = () => {
  const tweetOutputRef = useRef();
  const [crtState, setCrtState] = useState("edit");
  const [tweetData, setTweetData] = useState({
    img: "",
    name: "sarthak",
    username: "sarmittal",
    body: "hello how are you",
    time: "time",
    retweet: "10k",
    qtweet: "100K",
    likes: "200k",
    views: "200k",
    comment: "200",
    retweetstate: false,
    commentstate: false,
    likestate: false,
    savestate: false,
  });

  const changeState = () => {
    crtState === "edit" ? setCrtState("output") : setCrtState("edit");
    console.log(tweetData);
  };

  return (
    <div className="home">
      <div className="theme"></div>
      <div className="output">
        <button className="statechange" onClick={changeState}>
          {crtState === "edit" ? "Preview Image" : "Edit Image"}
        </button>
        <button
          onClick={() => exportAsImage(tweetOutputRef.current, "tweet_output")}
          className="generateimg"
        >
          Generate Image
        </button>
      </div>
      <div className="tweetcard">
        {crtState === "edit" ? (
          <TweetInput tweetData={tweetData} setTweetData={setTweetData} />
        ) : (
          <TweetOutput
            ref={tweetOutputRef}
            tweetData={tweetData}
            setTweetData={setTweetData}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
