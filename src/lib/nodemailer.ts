import nodemailer from "nodemailer";

interface SendContactNotificationParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactNotificationEmail({
  name,
  email,
  subject,
  message,
}: SendContactNotificationParams) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const adminEmail = process.env.ADMIN_EMAIL || emailUser || "kumarharshit370@gmail.com";

  if (!emailUser || !emailPass) {
    console.warn(
      "[Nodemailer Warning] EMAIL_USER or EMAIL_PASS environment variable is missing. Skipping email notification."
    );
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; background-color: #ffffff; shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(135deg, #6366f1, #a855f7); padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">📬 New Contact Form Message</h2>
          <p style="color: #e0e7ff; margin: 4px 0 0 0; font-size: 13px;">Received via Portfolio Website</p>
        </div>
        
        <div style="margin-bottom: 20px; background-color: #f8fafc; padding: 16px; border-radius: 10px; border: 1px solid #f1f5f9;">
          <p style="margin: 6px 0; color: #475569; font-size: 14px;"><strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a>)</p>
          <p style="margin: 6px 0; color: #475569; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>
        </div>

        <div style="background-color: #ffffff; padding: 18px; border-left: 4px solid #6366f1; border-radius: 6px; border-top: 1px solid #f1f5f9; border-right: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; tracking: 0.05em;">Message Body:</p>
          <p style="margin: 0; color: #1e293b; font-size: 15px; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>

        <div style="text-align: center; padding-top: 16px; border-top: 1px solid #f1f5f9;">
          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background-color: #6366f1; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);">Reply to Sender</a>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name} via Portfolio" <${emailUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `📬 New Portfolio Message: ${subject}`,
      html: htmlContent,
    });

    console.log(`[Nodemailer] Contact notification email sent successfully to ${adminEmail}`);
    return true;
  } catch (error) {
    console.error("[Nodemailer Error] Failed to send notification email:", error);
    return false;
  }
}
