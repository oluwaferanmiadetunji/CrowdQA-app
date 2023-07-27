const styles = {
  container: {
    padding: '30px',
  },
  welcome: {
    display: 'flex',
    padding: '20px 70px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    color: '#5c5c5c',
    fontSize: '25px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  subHeader: {
    color: '#5c5c5c',
    fontSize: '16px',
    marginBottom: '20px',
  },
  welcomeImage: {
    width: '300px',
    height: '300px',
    '& img': {
      objectFit: 'ceontain',
    },
  },
  createEventButton: {
    background: '#101418',
    color: '#fff',
    padding: '10px 20px',
    marginTop: '10px',
    fontSize: '14px',
    '&:hover': {
      background: '#101418',
      color: '#fff',
    },
  },
};

export default styles;
