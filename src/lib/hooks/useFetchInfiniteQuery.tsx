import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { parseDataFromQuery } from 'lib/helpers';

type UseFetchInfiniteQueryProps = {
  key: string;
  url: string;
};

const useFetchInfiniteQuery = ({ key, url }: UseFetchInfiniteQueryProps) => {
  const {
    data: queryData,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [key],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await axios.get(`${url}?page=${pageParam}`);

      return res.data;
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.page;
    },
    keepPreviousData: true,
  });

  const data = queryData?.pages && queryData?.pages.length > 0 ? parseDataFromQuery(queryData?.pages) : [];

  const hasNextPage =
    queryData?.pages && queryData?.pages.length > 0
      ? queryData?.pages[queryData?.pages.length - 1]?.page < queryData?.pages[queryData?.pages.length - 1]?.total_pages
      : false;

  return { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status };
};

export default useFetchInfiniteQuery;
