import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const makeGetUserProfile = () => {
  const selectUserProfile = createSelector(
    (state) => state.auth,
    (auth) => auth.profile
  );

  return useSelector(selectUserProfile);
};

export { makeGetUserProfile };
