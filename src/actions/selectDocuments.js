//Action Creator
export const selectDocuments = (docs) => {
    //Returns an action
    return {
        type: 'DOCS_SELECTED',
        payload: docs

    }
}
