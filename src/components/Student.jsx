import React from 'react';
import Score from '../components/Score/Score'
const Student = (props) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body card text-white bg-danger mb-3">
            <h1 className="card-title card text-white bg-danger mb-3">{props.student.name}</h1>
            <p className="card-text card text-white bg-danger mb-3">{props.student.bio}</p>
                Scores:
            {props.student.scores.map(score => 
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-danger">
                <Score score={score} />
                </li>
            </ul>
                )}
        </div>
    </div>
  );
}
export default Student;