// Redux Actions
import blogapi from "../api/api";
import _ from "lodash";

export const fetchBlogs = () => async (dispatch) => {
  const res = await blogapi.get("/posts");

  dispatch({
    type: "FETCH_BLOGS",
    payload: res.data,
  });
};

// function within a function
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await blogapi.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
});
