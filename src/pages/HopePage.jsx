import React, { useState } from 'react';

import AppForm from '../components/AppForm'
import AppHeader from '../components/AppHeader';
import PdfInfo from '../components/PdfInfo';
import TextTest from '../components/TextTest';
import Viewer from '../components/viewer';

const HopePage = () => {

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfError, setPdfError] = useState('');

  return (
    <div>
        <AppHeader />
        <AppForm setPdfFile={setPdfFile} setPdfError={setPdfError}/>
        <PdfInfo />
        <TextTest />
        <Viewer />
    </div>
  )
}

export default HopePage