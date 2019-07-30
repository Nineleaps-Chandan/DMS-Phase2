//Action Creator
export const selectEmployee = (employee) => {
    //Returns an action
    return {
        type: 'EMPLOYEE_SELECTED',
        payload: employee

    }
}
