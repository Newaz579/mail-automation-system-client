// import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const sendEmail = async (emailData) => {
  try {
    const response = await fetch(`${API_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send email');
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error(error.message || "Failed to send email");
  }
};

// export const uploadExcelFile = (formData) => {
//   return axios.post(`${API_URL}/upload-excel`, formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
// };

export const uploadExcelFile = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/upload-excel`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload file");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};


export const sendMultipleEmails = async (emails) => {
  try {
    const response = await fetch(`${API_URL}/send-multiple-emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emails }),
    });

    // if (!response.ok) {
    //   throw new Error("Failed to send emails");
    // }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending emails:", error);
    throw error;
  }
};