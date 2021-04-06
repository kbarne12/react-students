import React from 'react';
const Score = (props) => {
  return (
    <div>
      <span className="date">
        {props.score.date}
      </span><br/>
      {props.score.score}
    </div>
  );
}
export default Score;