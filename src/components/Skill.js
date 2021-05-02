import React from "react";

const Skill = ({ skill }) => {
  return (
    <div>
      <h5>{skill.name}</h5>
      <div class="progress my-3">
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: `${skill.percentage}` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {skill.percentage}
        </div>
      </div>
    </div>
  );
};

export default Skill;
