import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Settings from './Settings';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppRoutes } from 'lib/constants';
import { useSelector } from 'react-redux';

function SubHeader() {
  const { event } = useSelector((state: any) => state.event);
  const location = useLocation();
  const [value, setValue] = React.useState('/');
  const navigate = useNavigate();

  const path = location.pathname.split(`${AppRoutes.EVENT}/${event?.id}`)[1];
  
  React.useEffect(() => {
    if (path) {
      setValue(path);
    }
  }, [path]);

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`${AppRoutes.EVENT}/${event?.id}${newValue}`);
  };

  return (
    <Paper elevation={3} sx={{ width: '100%' }}>
      <Box sx={styles.tabsContainer}>
        <Box>
          <Tabs value={value} onChange={handleChange} centered selectionFollowsFocus>
            <Tab label="Live polls" value="/" />
            <Tab label="Audience Q&A" value="/questions" />
            <Tab label="Analytics" value="/analytics" />
          </Tabs>
        </Box>

        <Settings />
      </Box>
    </Paper>
  );
}

export default SubHeader;
