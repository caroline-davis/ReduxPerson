const initalState = {
    persons: []
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'STORE_RESULT':
            const newPerson = {
                id: Math.random(),
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat( newPerson )
            }
        case 'DELETE_RESULT':
            const updatedArray = state.persons.filter(person => person.id !== action.personId);
            return {
                ...state,
                persons: updatedArray
            }
    }
    return state
}

export default reducer;