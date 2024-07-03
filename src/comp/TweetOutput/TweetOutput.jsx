import React from "react";
import "./TweetOutput.css";

const TweetOutput = React.forwardRef(({ tweetData }, ref) => {
  return (
    <div id="tweetoutput" ref={ref}>
      <div className="tweet-wrap">
        <div className="tweet-header">
          <img
            src="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg"
            alt=""
            className="avator"
          ></img>
          <div className="tweet-header-info">
            {tweetData.name} <span>@{tweetData.username}</span>
            <span>. {tweetData.time}</span>
            <p>{tweetData.body}</p>
          </div>
        </div>
        {/* <div className="tweet-img-wrap">
          <img src="" alt="" className="tweet-img"></img>
        </div> */}
        <div className="tweet-info-counts">
          <div className="comments">
            <svg
              className="feather feather-message-circle sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <div className="comment-count">{tweetData.comment}</div>
          </div>

          <div className="retweets">
            <svg
              className="feather feather-repeat sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
            <div className="retweet-count">{tweetData.retweet}</div>
          </div>

          <div className="likes">
            <svg
              className="feather feather-heart sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <div className="likes-count">{tweetData.likes}</div>
          </div>
          <div className="views">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <g data-name="Layer 2">
                <path d="M2,19.5a2.5,2.5,0,0,0,5,0V4.5a2.5,2.5,0,0,0-5,0Z" />
                <path d="M9.5,7.5v12a2.5,2.5,0,0,0,5,0V7.5a2.5,2.5,0,0,0-5,0Z" />
                <path d="M17,11.5v8a2.5,2.5,0,0,0,5,0v-8a2.5,2.5,0,0,0-5,0Z" />
              </g>
            </svg>
            {tweetData.views}
          </div>
        </div>
      </div>
    </div>
  );
});

export default TweetOutput;
