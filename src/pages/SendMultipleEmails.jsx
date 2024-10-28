// import React, { useState } from "react";
// import { uploadExcelFile, sendMultipleEmails } from "../services/emailService";
// import EmailTable from "../components/EmailTable";

// const SendMultipleEmails = () => {
//   const [file, setFile] = useState(null);
//   const [emails, setEmails] = useState([]);
//   const [isSending, setIsSending] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await uploadExcelFile(formData);
//       setEmails(response.data.emails);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to upload file");
//     }
//   };

//   const handleSendEmails = async () => {
//     setIsSending(true);
//     try {
//       const response = await sendMultipleEmails(emails);
//       alert(response.data.message);
//       setIsSending(false);
//     } catch (error) {
//       console.error("Error sending emails:", error);
//       alert("Failed to send emails");
//       setIsSending(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Send Multiple Emails</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>

//       {emails.length > 0 && (
//         <>
//           <EmailTable emails={emails} />
//           <button onClick={handleSendEmails} disabled={isSending}>
//             {isSending ? "Sending..." : "Send Emails"}
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default SendMultipleEmails;


import React, { useState } from "react";
import { uploadExcelFile } from "../services/emailService";
import EmailTable from "../components/EmailTable";

const SendMultipleEmails = () => {
  const [file, setFile] = useState(null);
  const [emails, setEmails] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await uploadExcelFile(formData);
      setEmails(response.data.emails);
    } catch (error) {
      console.error(error);
      alert("Failed to upload file");
    }
  };

  return (
    <div>
      <h2>Send Multiple Emails</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {emails.length > 0 && <EmailTable emails={emails} />}
    </div>
  );
};

export default SendMultipleEmails;