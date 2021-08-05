import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const makeGetAuthProfile = () => {
  const selectAuthProfile = createSelector(
    (state) => state.auth,
    (auth) => auth.profile
  );

  return useSelector(selectAuthProfile);
};

const makeGetIsRequesting = () => {
  const selectIsRequesting = createSelector(
    (state) => state.auth,
    (auth) => auth.isRequesting
  );

  return useSelector(selectIsRequesting);
};

const makeGetIsAuthen = () => {
  const selectIsAuthen = createSelector(
    (state) => state.auth,
    (auth) => auth.isAuthentication
  );

  return useSelector(selectIsAuthen);
};

export { makeGetAuthProfile, makeGetIsRequesting, makeGetIsAuthen };
