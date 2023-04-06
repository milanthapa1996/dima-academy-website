interface emailData {
  name: string;
  email: string;
  message: string;
  subject: string;
  phnum: string;
}
export const sendEmailForm = async (data: emailData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200) {
    return true;
  }
  return false;
};
