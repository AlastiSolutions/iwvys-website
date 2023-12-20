"use client";

import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import Loader from "../../global/Loader";

interface ResourcesPDFViewerProps {
  url: string;
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ResourcesPDFViewer: React.FC<ResourcesPDFViewerProps> = ({ url }) => {
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setPageCount(pageCount);
    setPageNumber(1);
  };

  const onChangePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const onPreviousPage = () => {
    onChangePage(-1);
  };

  const onNextPage = () => {
    onChangePage(1);
  };

  return (
    <div className="h-[20%] w-[20%] bg-red-200 p-4">
      <div>
        <Document
          className="h-[20%] w-[20%]"
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Loader />}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
};

export default ResourcesPDFViewer;
