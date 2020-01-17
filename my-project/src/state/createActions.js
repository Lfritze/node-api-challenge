import * as types from "./typeActions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/";

export const getProjects = () => dispatch => {
  axios
    .get("/api/projects")
    .then(response => {
      dispatch({
        type: types.GET_PROJECTS,
        payload: {
          projects: response.data
        }
      });
    })
    .catch(error => {
      console.log(error);

      console.log("got an error");
    });
};

export const getProject = id => dispatch => {
  axios
    .get(`/api/projects/${id}`)
    .then(response => {
      dispatch({
        type: types.GET_PROJECT,
        payload: {
          project: response.data
        }
      });
    })
    .catch(error => {
      console.log(error);

      console.log("error");
    });
};

export const deleteProject = id => dispatch => {
  axios
    .delete(`/api/projects/${id}`)
    .then(response => {
      dispatch({
        type: types.DELETE_PROJECT,
        payload: {
          data: response.data
        }
      });
    })
    .catch(error => {
      console.log(error);

      console.log("error!!!");
    });
};
