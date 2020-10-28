import React from "react";
import "../../App.css";
import "../Account.css";
import client from "../../backend-client";
import { Divider } from "antd";
import { useHistory } from "react-router-dom";

function Account({ user, setUser }) {
  const history = useHistory();
  const onSignOut = () => {
    client.signOut().then(() => {
      setUser(null);
      history.push("/");
    });
  };
  if (!user) {
    return <div>Not logged in!</div>;
  }

  const onDeleteUser = () => {
    client.deleteUser(user.id).then(() => {
      setUser(null);
      history.push("/");
    });
  };

  return (
    <div className="account-container">
      {/* User Information */}
      <div className="profileCard">
        <div className="userName">Hello, {user.name}!</div>
        <div className="buttons">
          <div className="sign-out" onClick={onSignOut}>
            SIGN-OUT
          </div>
          <Divider />
          <div className="delete-btn" onClick={onDeleteUser}>
            DELETE ACCOUNT
          </div>
          <div className="warning">(All saved workouts will be deleted!)</div>
        </div>
      </div>
    </div>
  );
}

export default Account;
