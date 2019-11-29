import React from "react"
import { Redirect } from "react-router-dom"
import PATH_TO from "Src/router/utils"

const RepositoriesMainPage = () => {
  // when user want to see main /repo page redirect to list of repos in index;
  return <Redirect to={PATH_TO.INDEX} />
}

export default RepositoriesMainPage
