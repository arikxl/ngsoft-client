import React from 'react';


import AppForm from '../components/AppForm'
import AppHeader from '../components/AppHeader';
import PdfInfo from '../components/PdfInfo';
import TextTest from '../components/TextTest';
import Viewer from '../components/viewer';

const HopePage = () => {
  return (
    <div>
        <AppHeader />
        <AppForm />
        <PdfInfo />
        <TextTest />
        <Viewer />
    </div>
  )
}

export default HopePage