import { GetServerSideProps } from 'next';

const HelkorPage: React.FC = () => {
  return null; 
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: 'https://helkor.eu/ref/E9j5qMUP',
      permanent: false, 
    },
  };
};

export default HelkorPage;