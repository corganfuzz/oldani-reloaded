import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");
  // state = {
  //   text: "",
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      // this.setState({ text: "" });
      setText("");
    }
    // console.log(this.state.text);
  };

  const onChange = (e) => setText(e.target.value);
  // OLD WAY
  // this.setState({ text: e.target.value });

  // OLD WAY without arrow function and doing .bind(this)
  //   onSubmit(e) {
  //     e.preventDefault();
  //     console.log(this.state.text);
  //   }

  // WITH ARROW FUNCTION

  // render() {
  // const { showClear, clearUsers } = this.props;

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
// }

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
