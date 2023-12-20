import React from "react";
import { PDFBucketInfo } from "@/constants/data.types";
import ResourcesPDFViewer from "@/components/resources/todo_components/ResourcesPDFViewer";
import PDFTabs from "@/components/resources/PDFTabs";
import MailToEmail from "@/components/resources/MailToEmail";

const PDF_LINKS: PDFBucketInfo[] = [
  {
    name: "Accident Report",
    url: "https://iwvys-pdfs.s3.us-west-1.amazonaws.com/2023-pdfs/Accident_Report_2023.pdf",
  },
  {
    name: "Background Release",
    url: "https://iwvys-pdfs.s3.us-west-1.amazonaws.com/2023-pdfs/Background_Check_2023.pdf",
  },
  {
    name: "Code of Conduct",
    url: "https://iwvys-pdfs.s3.us-west-1.amazonaws.com/2023-pdfs/Code_of_Conduct_2023.pdf",
  },
  {
    name: "Rules Appendix",
    url: "https://iwvys-pdfs.s3.us-west-1.amazonaws.com/2023-pdfs/Rules_Appendix_2023.pdf",
  },
  {
    name: "Softball Rulebook",
    url: "https://iwvys-pdfs.s3.us-west-1.amazonaws.com/2023-pdfs/Softball_Rulebook_2023.pdf",
  },
  {
    name: "Sponsorship Form",
    url: "https://iwvys-pdfs.s3.us-west-1.amazonaws.com/2023-pdfs/Sponsor_Form_2023.pdf",
  },
  {
    name: "Sponsor Letter",
    url: "https://iwvys-pdfs.s3.us-west-1.amazonaws.com/2023-pdfs/Sponsor_Letter_2023.pdf",
  },
  {
    name: "Volunteer Form",
    url: "https://iwvys-pdfs.s3.us-west-1.amazonaws.com/2023-pdfs/Volunteer_Form_2023.pdf",
  },
];

const IWVYS_EMAILS: string[] = [
  "iwvyouthsoftball@gmail.com",
  "marketing@iwvys.com",
  "registration@iwvys.com",
  "playerrep@iwvys.com",
  "volunteer@iwvys.com",
];

const ResourcesPage = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-2xl font-semibold mb-12">IWVYS Resources & Forms</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ">
        {PDF_LINKS.map((pdf, index) => (
          <PDFTabs key={index} name={pdf.name} url={pdf.url} vertical={false} />
        ))}

        {/* TODO Add PDF Preview*/}
        {/* {PDF_LINKS.map((pdf, index) => (
          <ResourcesPDFViewer key={index} url={pdf.url} />
        ))} */}
      </div>
      <div id="email_and_coaching" className="flex flex-col sm:flex-row gap-4">
        <div
          id="email"
          className="flex-1 flex flex-col items-center gap-4 w-[350px] md:w-full"
        >
          <h1 className="text-lg uppercase">Private Coaching</h1>
          <p>
            For parents and players looking for private coaching we would like
            to provide contact information and specialties.
          </p>
          <p>
            If you would like to be included on this page please send an email
            to{" "}
            <span className="font-semibold">
              <MailToEmail email="marketing@iwvys.com" target="_blank" />
            </span>
          </p>
        </div>
        <div
          id="coaching"
          className="flex-1 flex flex-col items-center gap-2 mb-10"
        >
          <h1 className="text-lg uppercase">Our Emails</h1>
          <ul className="list-none gap-2">
            {IWVYS_EMAILS.map((email, index) => (
              <li key={`${email}-${index}`}>
                <MailToEmail email={email} target="_blank" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
