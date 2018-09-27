import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Language extends React.Component {
  state = {
    language: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="language-helper">Language</InputLabel>
          <Select
            value={this.state.language}
            onChange={this.handleChange}
            input={<Input name="language" id="language-helper" />}
          >
            <MenuItem value="">
              <em>Choose Language</em>
            </MenuItem>
            <MenuItem value={10}>English</MenuItem>
            <MenuItem value={20}>Mandarin</MenuItem>
            <MenuItem value={30}>Thai</MenuItem>
          </Select>
          <FormHelperText>Choose your Language</FormHelperText>
        </FormControl>
        
      </form>
    );
  }
}

Language.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Language);