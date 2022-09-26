// Redux Actions
import blogapi from "../api/api";
import _ from "lodash";

export const fetchBlogAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchBlogs());
  // const uniqUserId = _.uniq(_.map(getState().blogs, "userId"));
  // uniqUserId.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().blogs)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchBlogs = () => async (dispatch) => {
  const res = await blogapi.get("/posts");

  dispatch({
    type: "FETCH_BLOGS",
    payload: res.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await blogapi.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
};

// memoize method of reducing requests

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await blogapi.get(`/users/${id}`);

//   dispatch({
//     type: "FETCH_USER",
//     payload: res.data,
//   });
// });
