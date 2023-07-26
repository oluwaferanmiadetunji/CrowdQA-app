const styles = {
  grid: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
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
    color: 'black',
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  subHeader: {
    color: 'black',
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: '10px',
    '& span': {
      marginLeft: '5px',
      color: '#1976d2',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  submit: {
    textTransform: 'unset',
    marginTop: '30px',
    fontSize: '14px',
    fontWeight: '600',
  },
};

export default styles;
