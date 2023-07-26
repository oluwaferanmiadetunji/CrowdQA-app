const styles = {
  grid: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    background: '#101418',
  },
  container: {
    my: 8,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    width: {
      md: '50%',
    },
    margin: '40px auto',
  },
  header: {
    color: 'white',
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  subHeader: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '10px',
    '& span': {
      marginLeft: '5px',
      fontSize: '15px',
      color: '#74CAFF',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  submit: {
    textTransform: 'unset',
    margin: '30px auto 20px auto',
    fontSize: '14px',
    fontWeight: '600',
  },
};

export default styles;
