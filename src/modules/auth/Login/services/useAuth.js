import {
  makeGetAuthProfile,
  makeGetIsRequesting,
  makeGetIsAuthen,
} from "../store/selectors";

export default function useAuth() {
  const userProfile = makeGetAuthProfile();
  const isRequesting = makeGetIsRequesting();
  const isAuthen = makeGetIsAuthen();
  return {
    userProfile,
    isRequesting,
    isAuthen,
  };
}
