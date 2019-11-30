const InitialState = {
  repositoryTableData: {
    headers: [
      "full_name",
      "owner",
      "description",
      "created_at",
      "updated_at",
      "more details"
    ]
  },
  repositoriesData: {
    list: null,
    pagesLink: {
      next: null,
      prev: null,
      first: null,
      last: null
    },
    total_count: null,
    incomplete_results: null
  },
  briefRepositoriesData: {
    //show first results on search box
    list: []
  },
  isLoading: false,
  query: "",
  page: 1,
  sort: "score",
  numberOfItemsPerPage: 10,
  apiDurationToResponse: 0,
  repositoryData: null,
  readMeUrl: "",
  content: "",
  encoding: "base64",
  currentRepoProfileImage: null
}

export default InitialState
