import { AnyAction } from "redux";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const CHECK_USER_AUTH = "CHECK_USER_AUTH";

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction>(
  actionCreator: AC
): Matchable<AC>;
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;
export function withMatcher<AC extends (...args: any[]) => AnyAction>(
  actionCreator: AC,
  type: ReturnType<AC>["type"]
): Matchable<AC>;

export function withMatcher(
  actionCreator: Function & { type?: string },
  _type?: string
) {
  //eslint-disable-next-line
  const type = _type ?? actionCreator.type ?? actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}
