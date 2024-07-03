import React, { useState } from 'react'
import "./TweetInput.css"
const TweetInput = ({tweetData, setTweetData}) => {


  return (
    <div className='tweetinput'>
        <div className="tbody">
            <div className="tuser">
                <div className="tuserimg">
                    <input type='image' />
                </div>
                <div className="tuserid">
                    <input type="text" value={tweetData.name} onChange={(e) => setTweetData({ ...tweetData, name: e.target.value })} />
                    <input type="text" value={tweetData.username} onChange={(e) => setTweetData({ ...tweetData, username: e.target.value })} />
                    <input type="text" value={tweetData.time} onChange={(e) => setTweetData({ ...tweetData, time: e.target.value })} />
                </div>
                <div className="taddextra">

                </div>
            </div>
            <div className="ttype">
                <input type="text" value={tweetData.body} onChange={(e) => setTweetData({ ...tweetData, body: e.target.value })}  />
            </div>
        </div>
        <div className="tlike">
            <div className="tlikeblock"><input type="text" onChange={(e) => setTweetData({ ...tweetData, comment: e.target.value })}  value={tweetData.comment} /> Comment</div>
            <div className="tlikeblock"><input type="text" value={tweetData.retweet} onChange={(e) => setTweetData({ ...tweetData, retweet: e.target.value })} /> Retweets</div>
            <div className="tlikeblock"><input type="text" value={tweetData.likes} onChange={(e) => setTweetData({ ...tweetData, likes: e.target.value })}/> Likes</div>
            <div className="tlikeblock"><input type="text" value={tweetData.likes} onChange={(e) => setTweetData({ ...views, retweet: e.target.value })}/> views</div>
        </div>
    </div>
  )
}

export default TweetInput