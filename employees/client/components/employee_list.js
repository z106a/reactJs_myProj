import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from "../../imports/collections/employee";
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component  {

    componentWillMount() {
        this.page = 1;
    }

   handleButtonClick() {
       Meteor.subscribe('employees', PER_PAGE * this.page);
       this.page +=1;
   }

    render() {
        return (
            <div>
                <div className="employee-list">
                    {this.props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee}/>)}
                </div>
                <button onClick={this.handleButtonClick.bind(this)}
                        className="btn btn-primary">
                    Load More...
                </button>
            </div>
        );
    }

}
export default createContainer(() => {
    // set up subscription
    Meteor.subscribe('employees', PER_PAGE);

    // return an object. Whatever we return will be send to EmployeeList as props
    return { employees: Employees.find({}).fetch() };

}, EmployeeList);