import { Fragment } from 'react';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import styles from './styles';
import EventCard from 'components/event-card';
import EventCardSkeleton from 'components/skeletons/events/EventCardSkeleton';
import useFetchInfiniteQuery from 'lib/hooks/useFetchInfiniteQuery';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PastEvents = () => {
  const { data: events, fetchNextPage, hasNextPage, isFetching, status } = useFetchInfiniteQuery({
    key: 'past-events',
    url: '/events',
  });

  return events && events.length < 1 ? (
    <Box />
  ) : (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.headerText}>Past</Typography>
      </Box>

      {status === 'loading' && (
        <Box sx={{ marginTop: '30px' }}>
          <EventCardSkeleton />
          <EventCardSkeleton />
          <EventCardSkeleton />
        </Box>
      )}

      {status === 'success' && (
        <Fragment>
          <Box sx={styles.events}>
            {events && events?.map((event: any) => <EventCard event={event} key={event.id} />)}
          </Box>

          {hasNextPage && (
            <LoadingButton
              sx={styles.load}
              loading={isFetching}
              onClick={() => fetchNextPage()}
              endIcon={<ChevronRightIcon />}
            >
              View More
            </LoadingButton>
          )}
        </Fragment>
      )}
    </Box>
  );
};

export default PastEvents;
