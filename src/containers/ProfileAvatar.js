import React from "react";

class ProfileAvatar extends React.Component {
  render() {
    return (
      <div className="container my-4">
        <img
          className="img-fluid w-25 mx-3 d-inline"
          src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png"
          alt="Avatar del usuario"
        />
        <h1 className="d-inline align-middle">
          Jonathan Isaza
        </h1>
      </div>
    );
  }
}

export default ProfileAvatar;