import { mailOptions, transporter } from "@/lib/nodeMailer";

export async function POST(request: Request, response: Response) {
  console.log("call api");
  const { name, email, message, subject, phnum } = await request.json();
  const data = {
    name,
    email,
    message,
    subject,
    phnum,
  };
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: data.message,
      html: `
      <h1>Message from ${data.name}</h1>
      <p>Phone Number: ${data.phnum}</p>
      <p>Email: ${data.email}</p>
      <p>Message: ${data.message}</p>
      `,
    });
  } catch (error) {
    console.log(error);
    return new Response("Error", { status: 500 });
  }
  return new Response("Success", { status: 200 });
}
