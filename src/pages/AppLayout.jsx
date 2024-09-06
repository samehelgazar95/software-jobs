// import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
