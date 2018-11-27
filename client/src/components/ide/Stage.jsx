import React, { Component } from 'react';
import './Stage.scss';
import apiQuery from '../../utils/api/query';
import findStage from '../../queries/stage/find';
import CodeFileLoader from './CodeFileLoader';
import Details from './Details';
import Task from './Task';
import Validations from './Validations';
import { Route } from 'react-router-dom';
import PropsRoute from '../PropsRoute';

class Stage extends Component {
  render() {
    const { stage, basename } = this.props;
    if(!stage) return null;
    return (
      <React.Fragment>
        <Route path={`${basename}/file/:codeFileId`} component={CodeFileLoader} />
        <PropsRoute path={`${basename}/details`} component={Details} stage={stage} />
        <PropsRoute path={`${basename}/task`} component={Task} stage={stage} />
        <PropsRoute path={`${basename}/validations`} component={Validations} stage={stage} />
      </React.Fragment>
    )
  }
}

export default Stage;