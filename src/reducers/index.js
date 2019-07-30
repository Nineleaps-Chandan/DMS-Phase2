import { combineReducers } from 'redux';

//Intern Reducer
//put some argument in ()  for dynamic content
const internReducer = () => {
    return [
        { name: 'Chandan', id: 'NLI195' },
        { name: 'Siddhant', id: 'NLI183' },
        { name: 'Rajat', id: 'NLI324' },
        { name: 'Anand', id: 'NLI323' }
    ]
}

//Selected Intern Reducer
const selectedInternReducer = (selectedIntern = null, action) => {

    if (action.type === 'INTERN_SELECTED') {
        return action.payload;
    }
    return selectedIntern;

};

//Employee Reducer
const employeeReducer = () => {
    return [
        { name: 'Ruchhi', id: 'NL123' },
        { name: 'Swetta', id: 'NL234' },
        { name: 'Rahul', id: 'NL345' }
    ]
}

//Selected Employee Reducer
const selectedEmployeeReducer = (selectedEmployee = null, action) => {
    if (action.type === 'EMPLOYEE_SELECTED') {
        return action.payload;
    }
    return selectedEmployee;
}


//Docs reducer
const docsReducer = () => {
    return [
        { displayName: 'Aadhar', filetype: 'aadhar' },
        { displayName: 'Pan', filetype: 'pan' },
        { displayName: 'Passport', filetype: 'passport' },
        { displayName: 'MArksheets', filetype: 'marksheet' },


    ]
}

//Document List Reducer
const docsListReducer = (selectedDocuments = null, action) => {
    if (action.type === 'DOCS_SELECTED') {
        return action.payload;
    }

    return selectedDocuments;
}

export default combineReducers({   //keys of the object are same as the keys in the state
    interns: internReducer,
    selectedIntern: selectedInternReducer,
    employee: employeeReducer,
    selectedEmployee: selectedEmployeeReducer,
    docs: docsReducer,
    selectedDocuments: docsListReducer

})