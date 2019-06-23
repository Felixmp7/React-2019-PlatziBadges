import React from 'react'
import {Link} from 'react-router-dom'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import Badge from '../components/Badge'
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'

useIncreaseCount = max => {
  const [count,setCount] = React.useState(0)
  if (count > max) {
    setCount(0)
  }
  return [count,setCount]
}

const BadgeDetails = props => {
  const [count,setCount] = React.useIncreaseCount(4)

  const badge = props.badge
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
              email={badge.email}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <React.Fragment>
              <div>
                <button
                    className="btn btn-secondary mr-4"
                    onClick={()=>{
                      setCount(count + 1)
                    }}
                  >
                  Increase Count: {count}
                </button>

                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails
