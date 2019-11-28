import React from "react"
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom"
import RepositoryDetailsPageContainer from "./repository-details-page.container"
export default function RepositoryDetailsPageDumb(props) {
  let { url } = useRouteMatch()
  let { id } = useParams()
  let person = find(parseInt(id))

  function find(id) {
    const PEEPS = [
      { id: 0, name: "Michelle", friends: [1, 2, 3] },
      { id: 1, name: "Sean", friends: [0, 3] },
      { id: 2, name: "Kim", friends: [0, 1, 3] },
      { id: 3, name: "David", friends: [1, 2] }
    ]

    return PEEPS.find((p) => p.id === id)
  }
  return (
    <div>
      <h3>{person.name}’s Friends</h3>
      <ul>
        {person.friends.map((id) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route path={`${url}/:id`}>
          <RepositoryDetailsPageContainer />
        </Route>
      </Switch>
    </div>
  )
}
