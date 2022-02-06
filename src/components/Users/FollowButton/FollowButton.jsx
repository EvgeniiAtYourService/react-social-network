import React from 'react'
import Loader from '../../common/SmallSpinner/SmallSpinner'

function FollowButton(props) {
  // const array = [
    //   { name: 'Vitya', age: 35, favoriteColor: 'green' },
    //   { name: 'Vera', age: 29, favoriteColor: 'blue' },
  //   { name: 'Nik', age: 28, favoriteColor: 'red' },
  //   { name: 'Mol 1', age: 14, favoriteColor: 'red' },
  //   { name: 'Mol 2', age: 15, favoriteColor: 'red' },
  // ]

  // const newArray = array
  //   .filter((person) => person.age > 18)
  //   .map((person) => ({
  //     info: `Adult with favCol ${person.favoriteColor}`,
  //     age: person.age,
  //   }))
  //   .reduce((totalAge, person) => totalAge + person.age, 0)

  // console.log(newArray)

  return (
    <div>
      {props.followed ? (
        <button
          onClick={() => {
            props.unfollow(props.id)
            // props.toggleIsFollowing(true)
          }}
          disabled={ props.isFollowing ? true : false }
        >
          {props.isBtnLoading ? <Loader /> : 'Unfollow'}
        </button>
      ) : (
        <button
          onClick={() => {
            props.follow(props.id)
            // props.toggleIsFollowing(true)
          }}
          disabled={ props.isFollowing ? true : false }
        >
          {props.isBtnLoading ? <Loader /> : 'Follow'}
        </button>
      )}
    </div>
  )
}

export default FollowButton
