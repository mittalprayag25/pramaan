import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../shared-components/PrivateRoute/index';
import Student from '../components/pages/student/student';
import Login from '../components/pages/login/login';
import RoleSelector from '../components/shared-components/role-selector/role-selector';
import StudentForm from '../components/pages/student-form/student-form';
import Validator from '../components/pages/validator/validator';

const Main = () => (
        <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/validator' component={Validator} />
                <Route path='/student' component={Student} />
                <Route path='/selector' component={RoleSelector} />
                <Route path='/form' component={StudentForm} />

        </Switch>
)
export default Main;