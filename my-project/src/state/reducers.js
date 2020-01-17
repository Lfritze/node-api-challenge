import * as types from "./typeActions";

const initialState = {
  projects: [],
  project: {
    actions: []
  }
};

export function projectsReducer(projects = initialState.projects, action) {
  switch (action.type) {
    case types.GET_PROJECTS:
      return action.payload.projects;
    case types.DELETE_PROJECT:
      return projects.filter(project => project.id !== action.payload.data.id);
    default:
      return projects;
  }
}

export function projectReducer(project = initialState.project, action) {
  switch (action.type) {
    case types.GET_PROJECT:
      return action.payload.project;
    default:
      return project;
  }
}
