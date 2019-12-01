const InitialState = {
  repositoryTableData: {
    headers: [
      "Full name",
      "Owner",
      "Description",
      "Created At",
      "Updated at",
      "More"
    ]
  },
  repositoriesData: {
    list: [],
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
