import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';


const fetchProjects = async () => {
  const data = await import('../assets/projects.json');
  return data.projects;
};

export const getProjectDetailsById = createAsyncThunk(
  'content/getProjectDetailsById',
  async (projectId) => {
    const allProjects = await fetchProjects();
    
    const project = allProjects.find((p) => p.id === projectId);
    
    if (project) {
      return {
        label : project.label,
        description: project.description,
        technologies: project.technologies,
        isTraining: project.isTraining,
        site: project.site,
        git: project.git,
        store: project.store,
      };
    } else {
      return {};
    }
  }
);

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    activeButton: 0,
    sampleData: {},
  },
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProjectDetailsById.fulfilled, (state, action) => {
      state.sampleData = action.payload;
    });
  },
});

export const { setActiveButton } = contentSlice.actions;
export default contentSlice.reducer;