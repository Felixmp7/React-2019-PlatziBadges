import React from 'react'
import './styles/BadgesList.css'
import Gravatar from './Gravatar'

const BadgesListItem = props => {
  return (
    <div className="Badge_Container">
      <div className="Badge_Avatar">
        <Gravatar
          email={props.badge.email}
          alt={props.badge.firstName}
        />
        {/* <img src={badge.avatarUrl} alt={props.firstName}/> */}
      </div>
      <div className="Badge_Info">
        <p className="Badge_Name">{props.badge.firstName} {props.badge.lastName}</p>
        <p className="Badge_Twitter">
          @{props.badge.twitter}
        </p>
        <p className="Badge_JobTitle">{props.badge.jobTitle}</p>
      </div>
    </div>
  );
}

export default BadgesListItem
