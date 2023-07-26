import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <Backdrop sx={{ color: '#fff', background: '#101418', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <CircularProgress color="inherit" size={50} />
    </Backdrop>
  );
}
