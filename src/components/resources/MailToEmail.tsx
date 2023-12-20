import Link from "next/link";
import React from "react";

interface MailToEmailProps {
  email: string;
  target: string;
}

const MailToEmail: React.FC<MailToEmailProps> = ({ email, target }) => {
  return (
    <Link href={`mailto:${email}`} target={target}>
      {email}
    </Link>
  );
};

export default MailToEmail;
