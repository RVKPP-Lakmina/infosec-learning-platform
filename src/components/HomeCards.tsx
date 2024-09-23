import {Link} from 'react-router-dom'
import './HomeCards.css'

const HomeCards = () => {
  return (
    <section className="section1">
      <div className="section2">
        <div className="homeCardGrid">
          <div className="homeCard">{/*<Card>*/}
          <h2 className="homeCardHeading">News Letter</h2>
            <p className="text">
            Discover the latest security incidents and learn how to protect yourself
            </p>
            <Link
              to="/newsletter"
              className="homeCardBtn"
            >
              News Letter
            </Link>
         {/*</Card> */} </div>
          {/*<Card>*/} <div className="homeCard">
          <h2 className="homeCardHeading">Articles</h2>
            <p className="text">
              Testing
            </p>
            <Link
              to="/article"
              className="homeCardBtn">
              Read More
            </Link>
          {/*</Card>*/} </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCards