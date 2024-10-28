// import React, { useState } from "react";
// import { sendEmail } from "../services/emailService";

// const ComposeEmail = () => {
//   const [emailData, setEmailData] = useState({
//     to: "",
//     subject: "",
//     body: "",
//   });

//   const handleChange = (e) => {
//     setEmailData({ ...emailData, [e.target.name]: e.target.value });
//   };

//   const handleSend = async () => {
//     try {
//       const response = await sendEmail(emailData);
//       alert(response.data.message);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to send email");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         name="to"
//         placeholder="Recipient Email"
//         value={emailData.to}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="subject"
//         placeholder="Subject"
//         value={emailData.subject}
//         onChange={handleChange}
//       />
//       <textarea
//         name="body"
//         placeholder="Email Body"
//         value={emailData.body}
//         onChange={handleChange}
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// };

// export default ComposeEmail;

import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

const ComposeEmail = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(emailData);
      setStatusMessage("Email sent successfully");
      setIsError(false);
    } catch (error) {
      setStatusMessage(error.message); 
      setIsError(true);
    }
  };

  return (
    <div>
      <h2>Compose Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="to"
          placeholder="Recipient Email"
          value={emailData.to}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={emailData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="body"
          placeholder="Email Body"
          value={emailData.body}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Email</button>
      </form>

      {statusMessage && (
        <div className={`modal ${isError ? 'error' : 'success'}`}>
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default ComposeEmail;
