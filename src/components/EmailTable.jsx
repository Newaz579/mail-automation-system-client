import React from "react";

const EmailTable = ({ emails }) => {
  return (
    <div>
      <h3>Email Preview</h3>
      <table>
        <thead>
          <tr>
            <th>Recipient Email</th>
            <th>Subject</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {emails.length > 0 ? (
            emails.map((email, index) => (
              <tr key={index}>
                <td>{email.to}</td>
                <td>{email.subject}</td>
                <td>{email.body}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmailTable;