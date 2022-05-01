import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/Navigation';
import HeroBanner from './components/HeroBanner'
import reportWebVitals from './reportWebVitals';
import NewsCards from './components/NewsCards';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation></Navigation>
    <HeroBanner></HeroBanner>
    <AboutSection></AboutSection>
    <NewsCards></NewsCards>
    <ContactForm></ContactForm>
    <Footer></Footer>
  </React.StrictMode>
);

reportWebVitals();
