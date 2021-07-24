import React, { useState } from 'react'
import classes from './Post.module.css'

function Post(props) {


    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }

  return (
    <div className={classes.item}>
      <img src="https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" />
      Post {props.num}
      <div>
          <p>{props.message}</p>
      </div>
      <div>
        <button onClick={handleClick}>like</button>
        <span>{count} likes</span>
      </div>
      <div>
        <span>dislikes</span>
      </div>
    </div>
  )
}

export default Post
