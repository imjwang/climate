import Navbar from '@/components/Navbar'
import NavTabs from '@/components/NavTabs';
import { Toaster } from 'react-hot-toast';

const Search = () => {
  return (
    <>
    <Toaster />
      <Navbar />
      <NavTabs />
    </>
  );
};

export default Search;