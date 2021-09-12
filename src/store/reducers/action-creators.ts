import { AuthActionsCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/action-creators";


export const allActionCreators = {
    ...AuthActionsCreators,
    ...EventActionCreators
}