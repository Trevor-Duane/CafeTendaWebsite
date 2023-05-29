import React from 'react'
import Layout from '../../shared/layout/Layout';
import SimpleAbout from '../../components/About/SimpleAbout';
import Content from '../../components/Content/Content';
import GallerySection from '../../components/Gallery/GallerySection';
import Amenities from '../../components/Amenities/Amenitiess';
import MenuHero from './components/HeroSection/MenuHero';
import MenuSection from './components/MenuSection/MenuSection';

export default function Menu() {
  return (
   <Layout>
       <MenuHero/>
       <MenuSection/>
   </Layout>
  )
}
