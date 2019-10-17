import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './style.scss';

const App = (props) => {
  const { history } = props;
  return (
    <div className="app-base">
      <div className="app">
        <div className="app-title">Sign up as</div>
        <Button
          color="info"
          onClick={() => history.push('/signup/reduxForm')}
        >
          Redux From
        </Button>
        <Button
          color="primary"
          onClick={() => history.push('/signup/customForm')}
        >
          Custom From
        </Button>
      </div>
    </div>
  );
};

App.defaultProps = {
  history: {},
};

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default App;
