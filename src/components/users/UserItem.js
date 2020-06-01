import React from "react";
// import React, { Component } from "react";

const UserItem = (props) => {
  // class UserItem extends Component {
  //   state = {
  //     id: "id",
  //     login: "mojombo",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo",
  //   };

  // A constructor is basically a function that runs when the component starts
  // THE OLD WAY=====>
  //   constructor() {
  //     super();
  //     this.state = {
  //       id: "id",
  //       login: "mojombo",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //       html_url: "https://github.com/mojombo",
  //     };
  //   }
  // END OF THE OLD WAY

  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
