import * as React from "react";

export default function ActivitiesList({ data }) {
  return (
    <div className="activityList">
        <h2>Things You Can Do</h2>
      {data &&
        data.data.map((data) => (
          <div>
            {data.activities.map((activities, i) => (
              <li key={activities.id}>{activities.name}</li>
            ))}
          </div>
        ))}
    </div>
  );
}
