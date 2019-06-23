import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import BadgesListItem from './BadgesListItem'
import './styles/BadgesList.css'

const BadgesList = props => {

  const [query,setQuery] = React.useState('')

  const filteredBadges = props.badges.filter( badge => {
    return badge.firstName.includes(query)
  })

  if(filteredBadges.length === 0){
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h2>No badges were found</h2>
        <Link
          to="/badges/new"
          className="btn btn-primary"
          >
          Create your first badge.
        </Link>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {
          filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link
                  to={`/badges/${badge.id}`}
                  className="text-reset text-decoration-none"
                  >
                  <BadgesListItem badge={badge}/>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </React.Fragment>
  );
}

export default BadgesList
