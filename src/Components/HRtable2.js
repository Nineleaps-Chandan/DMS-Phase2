import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import axios from "axios";
import MUIDataTable from "mui-datatables";
import PrimarySearchAppBar from "./HRnavbar";



const myStyle = {
    marginTop: '40px'
}



class Admin extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false
        }

    }







    render() {
        const columns = ["Name", "Previous Organisation", "Designation", "State"];
        const data = [["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],];


        const options = {
            filterType: "dropdown",
            responsive: "scroll"
        };


        return (

            <div >
                <PrimarySearchAppBar />
                <Paper style={{ marginTop: '40px' }}>
                    <TextField
                        id="outlined-full-width"
                        multiline
                        label="EmployeeName"
                        rows="1"
                        type="text"
                        name="projectName"
                        value={this.state.projectName}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ margin: 20 }}

                    />

                    <TextField
                        id="outlined-full-width"

                        multiline
                        label="EmployeeID"
                        type="alphanumeric"
                        rows="1"
                        name="clientName"
                        value={this.state.clientName}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ margin: 20 }}


                    />
                    <TextField
                        id="outlined-full-width"
                        label="Designation"
                        type="text"
                        name="Rating"
                        value={this.state.Rating}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ margin: 20 }}

                    />

                    <Button ><Fab aria-label="Add" size="small" style={{ margin: 20 }} ><AddIcon /></Fab></Button>


                    <div style={{ marginTop: '40px' }}>
                        <MUIDataTable

                            title={"Employee details"}
                            data={data}
                            columns={columns}
                            options={options}

                        />
                    </div>


                </Paper>



                <div>

                </div>


            </div >



        );

    }
}



export default Admin;