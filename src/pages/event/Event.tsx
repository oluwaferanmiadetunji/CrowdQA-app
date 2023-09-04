import Layout from 'components/layout';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

const SingleEvent = () => {
  const params = useParams();

  const id = params?.id;

  return (
    <Layout>
      <Box>Event ${id}</Box>
    </Layout>
  );
};

export default SingleEvent;
