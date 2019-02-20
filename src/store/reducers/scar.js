import Immutable from "immutable";
const stateDefault = Immutable.fromJS({
    scarList:[],
    standbyMedicine:[],
})

export default (state = stateDefault, action) => {
    switch (action.type) {
        case "GET_STANDBYM" :
            let StandbyMedicine = state.updateIn(["standbyMedicine"],(item)=>item.push(...action.value))
            return StandbyMedicine
    }
    return state
}