import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const EventCardSkeleton = () => {
  return (
    <Stack spacing={1} sx={{ marginBottom: '20px' }}>
      <Skeleton variant="rounded" height={90} />
    </Stack>
  );
};

export default EventCardSkeleton;
