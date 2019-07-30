import React, { Component } from "react";
import axios from "axios"
import _ from 'lodash'

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isIntern: true,
            isEmployee: true

        }

    }

    handleIntern = event => {
        this.setState({
            isIntern: false

        })
        console.log(this.state)

    }

    handleEmp = event => {
        this.setState({
            isEmployee: false,
        })
    }

    handleBatch = event => {
        axios({
            method: "get",
            url: "http://192.168.3.18:8080/v2/fetchBatchName"

        }).then(response => {
            console.log(response)
            const dataObj = response.data;
            let tempObj = [];
            _.forEach(dataObj, (data) => {
                let xyzObj = {
                    batch: data.batchName
                }
                tempObj.push(xyzObj);
            });
            this.setState({
                batchxy: tempObj,

            });


        })
            .catch(err => {
                this.setState({
                    loading: false
                })
            })


    }

    render() {
        if (!this.state.isIntern) {
            return (
                <div>
                    <button onClick={this.handleBatch}>Batch</button>
                    <button onClick={this.handleCollege}>College</button>

                </div>

            )
        }

        if (this.state.batchxy && this.state.batchxy.length > 0) {
            return (
                <div>
                    console.log(batchxy.batchName)
                </div>
            )



        }

        return (
            <div>
                <h3>Select user type</h3>
                {/* <input type='text' placeholder='Select user'></input> */}
                <button classname="Intern" style={{ color: 'blue' }} onClick={this.handleIntern}>Intern</button>

                <button className="Employee" style={{ color: 'red' }} onClick={this.handleEmp}>Employee</button>
                {/* <div>
                    <input type="text" placeholder="Enter User Email" />
                </div> */}
            </div>
        );
    }
}

export default User;
