import {uniqueId} from 'lodash';

const cellStates = {
    IDLE: "EDLE",
    MOVING: "MOVING",
    DYING: "DYING"
}



const create = (x, y, value, id) => ({
    x, y, value, id: id ? id : uniqueId()
});

export {create};