import React from "react";

export default function Entrance({ data }) {
  return (
    <>
      <div>
        {data &&
          data.data.map((data) => (
            <>
              <div className="entranceFees">
                <h2>Entrance Fees</h2>

                {data.entranceFees.map((entranceFees, i) => (
                  <p key={i}>
                    <b>{entranceFees.title}</b>
                    <br></br>
                    {entranceFees.description}
                    <br></br>
                    {entranceFees.cost}
                  </p>
                ))}
              </div>
              <div className="entrancePasses">
                <h2>Entrance Passes</h2>
                {data.entrancePasses.map((entrancePasses, i) => (
                  <p key={i}>
                    <b>{entrancePasses.title}</b>
                    <br></br>
                    {entrancePasses.description}
                    <br></br>
                    {entrancePasses.cost}
                  </p>
                ))}
              </div>
            </>
          ))}
      </div>
    </>
  );
}
