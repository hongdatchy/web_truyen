import React, { useState, useRef, useEffect } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Pagination } from 'antd';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useLocation } from "react-router-dom";



function ViewPdf(props) {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  const onChange = (pageNumber) => {
    
    setPageNumber(pageNumber);
  };


  const onDocumentLoadSuccess = async({ numPages }) => {
    setNumPages(numPages);
    console.log(numPages);
  };

  const ref = useRef(null)
  const ref2 = useRef(null)
  const [width, setWidth] = useState()
  useEffect(() => {
    
    setWidth(ref.current.clientWidth)
    if(props.pdf){
      props.setPageNumber(pageNumber)
      // props.setScalePdf(ref.current.clientWidth/595)
    }
  }, [])

  return (
    <div ref={ref} >
    
      <Pagination current={pageNumber} onChange={onChange} total={numPages} pageSize={1} simple />
      <br/>
      
        
      <Document  className="my-pdf" ref={ref2}
        file={props.pdf}
        onLoadSuccess={(pdf)=>onDocumentLoadSuccess(pdf)}
      >
        <Page pageNumber={pageNumber} 
        onLoadSuccess = {(pdfs)=>{
          // console.log(pdfs._pageInfo.view[2]);
          props.setScalePdf(width/pdfs._pageInfo.view[2])
        }} 
        width={width} scale={1} 
        />
      </Document> 
          
    </div>
  );
}

export default ViewPdf;
