import React, { Component } from "react";
import BootService from "../api/BootService";

class AllEmployee extends Component{
    constructor(props) {
        super(props)
        this.state={
                employees: []
        }
    }
    componentDidMount() {
        BootService.getEmployees().then((res) => {
           this.setState({employees: res.data});
        });
    }

    render() {
        return(
            <div>
                <h2 className="text-center"> Employee List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Employee Role</th>
                                <th>Employee Wages</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.empId}</td>
                                        <td>{employee.empName}</td>
                                        <td>{employee.role}</td>
                                        <td>{employee.wagesPerHr}</td>

                                    </tr>
                            )
                        }
                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}
export default AllEmployee























/*
import React, {useEffect, useState} from "react";
import Employee from "./Employee";
import axios from "axios";
import base_url from "./../api/bootService";

import {toast} from "react-toastify";

const AllEmployee = ()=>{

    // function to call server
    useEffect(()=>{
        axios.get(`${base_url}/employee/getAll`).then(
            (response)=>{
                console.log(response);
                setEmployee(response.data);
            },
            (error)=>{
                console.log(error);
            });
    },[]);

    const [employee, setEmployee] = useState([]);

    return (

        <div>
            {employee.map((item) => <Employee key={item.empId} employee={item}/>)}
        </div>
    );
}

export default AllEmployee;*/
