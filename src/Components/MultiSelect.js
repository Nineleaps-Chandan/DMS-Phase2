import React, { Component } from 'react';
import "./MultiSelect.css"
import Multiselect from 'multiselect-dropdown-react';
import axios from 'axios';
import { responsiveFontSizes } from '@material-ui/core/styles';
import _ from 'lodash';

const myStyle = {
  paddingBottom: '30px',
  width: '400px',
  display: 'inline-table'
}




// componentWillMount() {
// axios.get("http://192.168.3.18:8080/v2/doctype")
//   .then(response => {
//     console.log(response.data)
//     this.setState({
//       fileType: response.data


//     })
//     console.log('acadcd', this.state.fileType)

//   })

class MultiSelect extends Component {

  constructor(props, context) {

    super(props, context);
    this.state = {
      logindetails: [],
      id: []
    };
    this.SendIt();
  }

  selection(params) {
    console.log(params);
  }
  SendIt(e1) {
    axios
      .get("http://192.168.3.18:8080/v2/doctype")
      .then(response => {
        const dataObj = response.data;
        let tempObj = [];
        _.forEach(dataObj, (data) => {
          let xyzObj = {
            name: data.fileType,
            value: data.displayName
          };
          tempObj.push(xyzObj);
        });
        this.setState({
          logindetails: tempObj
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    if (this.state.logindetails && this.state.logindetails.length > 0) {
      return (
        <div className="MySelect" style={myStyle}>
          <Multiselect options={this.state.logindetails} onSelectOptions={this.selection} />
        </div>
      );
    } else {
      return <div>Data Loading...</div>
    }
  }
}

export default MultiSelect;



