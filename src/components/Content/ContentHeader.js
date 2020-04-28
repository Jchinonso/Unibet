import React from "react";

const ContentHeader = () => {
  return (
    <div>
      <h3>Live matches</h3>
      <p data-testid="desc" className="preamble">
        Here is a list of matches that are live right now.
      </p>
    </div>
  );
};

export default ContentHeader;
