import {put} from "redux-saga/effects";
import {push} from "connected-react-router";

export const redirect = (route: string) => {
    return put(push(route))
}
