import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import PersonPinIcon from '@material-ui/icons/PersonPin';

import RegForm from '../components/landingRegForm';

import '../style/reg.css';
import { async } from 'q';

const styles = {
  rootRegNav: {
    flexGrow: 1,
    maxWidth: 400,
    margin: 'auto',
    marginTop: '40px',
  },
  rootRegPage: {
    margin: 'auto',
    marginTop: '40px',
    minWidth: '570px',
    width: '65%',
    minHeight: '240px', // 328px
    paddingBottom: '30px',
  },
};
function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class IconLabelTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  onSubmit =async e => {
    e.preventDefault();
    //call register here
  }

  handleSubmit = (event) => {
    alert('you are submitting');
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div className="title">
            Register
        </div>
        <Paper className={classes.rootRegPage}>
          {value === 0 && (
            <TabContainer>
              {' '}
              <RegForm submit={this.handleSubmit} />
              {' '}
            </TabContainer>
          )}
        </Paper>

        <Paper square className={classes.rootRegNav}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab icon={<PersonPinIcon />} label="ABOUT YOU" />
          </Tabs>
        </Paper>
        <button form="regform" onSubmit={e => this.onSubmit(e)}  className="btn" type="submit"> Let&apos;s Go </button>
      </div>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(IconLabelTabs);
