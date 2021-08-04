// import { alertConstants } from '../_constants';
//
// // export const alertActions = {
// //     success,
// //     error,
// //     clear
// // };
//
// export const success=(message)=> {
//     return { type: alertConstants.SUCCESS, message };
// }
//
// export const error=(message)=> {
//     return { type: alertConstants.ERROR, message };
// }
//
// export const clear=()=> {
//     return { type: alertConstants.CLEAR };
// }


import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}
