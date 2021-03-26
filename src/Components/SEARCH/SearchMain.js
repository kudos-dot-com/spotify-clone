
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import '../../Styles/searchmain.css'
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


// body of the SEARCH PAGE
const useStyles = makeStyles((theme) => ({

  search: {
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: "#fff",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '30%',
    height: '45px',

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '30%',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
    fontSize: '17px',
    paddingTop: "5px"
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '30%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

  
}));


function SearchMainbar() {
  const classes = useStyles();

  return (
    <div style={{ background: "#1B1B1B", height: "200vh", margin: "auto" }}>
      <br></br>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>

        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />

      </div>
      <br></br>

      {/* playlist section */}
      <div>
        <h5 className="title">Your top genres</h5>
        <div className="d-flex flex-wrap justify-content-flex-start" style={{ flexWrap: "wrap" }}>
          <img className="images" src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <img className="images" src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <img className="images" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>

        <h5 className="title">Browse all</h5>
      </div>


    </div>
  )
}

export default SearchMainbar;