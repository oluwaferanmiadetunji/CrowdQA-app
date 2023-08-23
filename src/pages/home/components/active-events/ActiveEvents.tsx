import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './styles';
import EventCard from 'components/event-card';
import EventCardSkeleton from 'components/skeletons/events/EventCardSkeleton';
import useFetchInfiniteQuery from 'lib/hooks/useFetchInfiniteQuery';

const ActiveEvents = () => {
  const {
    data: events,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useFetchInfiniteQuery({
    key: 'upcoming-events',
    url: '/events/upcoming',
  });

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.headerText}>Active and upcoming</Typography>
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
            <Box onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading more...' : 'Load More'}</Box>
          )}

          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </Fragment>
      )}
    </Box>
  );
};

export default ActiveEvents;
