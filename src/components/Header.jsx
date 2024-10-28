import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Mail Automation System</h1>
      <Link to="/send-multiple-emails">
        <button>Send Multiple Emails</button>
      </Link>
    </header>
  );
};

export default Header;
