import React from "react";
import PrimarySearchAppBar from "./HRnavbar";
// import CustomizedSelects from "./SelectUser";
import Consumer from "./MultiSelect";
import EnhancedTable from "./HRtable";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LabelBottomNavigation from './BottomNavigation'
import MultiSelect from "./MultiSelect";
import User from "./Batch"


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const myStyle = {
    paddingTop: '30px'
}




class HRdashboard extends React.Component {
    render() {
        return (<div>
            <div className="header" id="main">
                <div>
                    <PrimarySearchAppBar />
                </div>
                {/* <div>
                    <CustomizedSelects />
                </div> */}
                <div><User/></div>

                <div>
                    <MultiSelect />
                </div>
                <div classname="Buttons" syle={myStyle}>
                    <Button variant="contained" color="secondary">
                        ADD INTERN
              </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className="Employee"
                    >
                        REQUEST DOCUMENTS
              </Button>
                </div>
            </div>

            <div id="bottom_link">
                <LabelBottomNavigation />
            </div>

        </div>
        );
    }
}

export default HRdashboard;
