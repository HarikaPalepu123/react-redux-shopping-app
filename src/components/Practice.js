import { useState } from "react";

function Profile() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>Profile Component</h3>

      <button onClick={() => setShow(true)}>
        Click Me
      </button>

      {show && <p>Hello Harika</p>}
    </div>
  );
}

export default Profile;