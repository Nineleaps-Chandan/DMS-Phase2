//Action Creator
export const selectIntern = (intern) => {
    //Returns an action
    return {
        type: 'INTERN_SELECTED',
        payload: intern

    }
}
