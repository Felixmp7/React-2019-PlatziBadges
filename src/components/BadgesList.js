import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './styles/BadgesList.css'

const BadgesList = props => {

  if(props.badges.length === 0){
    return (
      <div>
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
    <ul className="list-unstyled">
      {
        props.badges.map(badge => {
          return (
            <li className="Badge_Container" key={badge.id}>
              <div className="Badge_Avatar">
                <img src={badge.avatarUrl} alt={props.firstName}/>
              </div>
              <div className="Badge_Info">
                <p className="Badge_Name">{badge.firstName} {badge.lastName}</p>
                <p className="Badge_Twitter">
                  @{badge.twitter}
                </p>
                <p className="Badge_JobTitle">{badge.jobTitle}</p>
              </div>
            </li>
          )
        })
      }
    </ul>
  );
}

export default BadgesList
