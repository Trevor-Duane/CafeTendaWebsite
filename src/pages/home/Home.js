import React from 'react';
import Layout from '../../shared/layout/Layout';
import SimpleAbout from '../../components/About/SimpleAbout';
import Content from '../../components/Content/Content';
import GallerySection from '../../components/Gallery/GallerySection';
import Amenities from '../../components/Amenities/Amenitiess';
import './home.css';

function Home() {
  return (
   <Layout>
     <Content/>
        <SimpleAbout/>
        <Amenities/>
        <GallerySection/>
   </Layout>
  )
}

export default Home