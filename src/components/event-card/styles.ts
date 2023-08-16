const styles = {
  container: {
    width: '100%',
    padding: '20px',
    background: '#fff',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.1)',
  },
  first: {
    display: 'flex',
    alignItems: 'center',
  },
  flex: {
    display: 'flex',
  },
  icon: {
    padding: '10px',
    marginRight: '15px',
  },
  eventName: {
    fontSize: '15px',
    color: 'black',
    fontWeight: '600',
    marginBottom: '5px',
  },
  eventCode: {
    fontSize: '15px',
    color: '#00000066',
    marginLeft: '10px',
  },
  eventStartDate: {
    fontSize: '14px',
    color: '#00000077',
  },
  eventEndDate: {
    fontSize: '14px',
    color: '#00000077',
    marginLeft: '3px',
  },
  menuIcon: {
    color: 'grey',
    '&:hover': {
      color: '#1890FF',
    },
  },
  menuItemText: {
    fontSize: '14px',
    color: '#00000099',
  },
  menuItem: {
    padding: '7px 20px',
  },
};

export default styles;
