import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children }: any) => {
  return (
    <div className='relative min-w-screen min-h-screen overflow-hidden'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
