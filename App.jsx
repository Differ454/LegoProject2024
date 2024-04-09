import React from 'react'
const Header = React.lazy(() => import('./components/header/Header'));
const Nav = React.lazy(() => import('./components/nav/Nav'));
const About = React.lazy(() => import('./components/about/About'));
const Experience = React.lazy(() => import('./components/experience/Experience'));
const Services = React.lazy(() => import('./components/services/Services'));
const Portfolio = React.lazy(() => import('./components/portfolio/Portfolio'));
const Contact = React.lazy(() => import('./components/contact/Contact'));
const Footer = React.lazy(() => import('./components/footer/Footer'));


const App = () => {
  return (

    <>



      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <About />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Services />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Portfolio />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </React.Suspense>

    </>
  );
}

export default App