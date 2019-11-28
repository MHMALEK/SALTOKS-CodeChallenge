import React from "react"
export default class RepositoryDetailsPageDumb extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    let { url } = useRouteMatch()
    let { id } = useParams()
    let person = find(parseInt(id))
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
            <Repository />
          </Route>
        </Switch>
      </div>
    )
  }
}
