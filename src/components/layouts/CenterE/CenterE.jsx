import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate} from 'react-router';
// import { GoalItem } from './GoalItem'
// import GoalForm from './components/GoalForm'
// import { getGoals, reset } from '../../auth/goals/goalSlice'
// import axios from 'axios'

export const CenterE = () => {
  
  // const navigate = useNavigate ()
  // const dispatch = useDispatch()

  const name =  JSON.parse(localStorage.getItem("name"));
  // const {goals, isLoading, isError, message} = useSelector((state) => state.goals)

  // useEffect(()=>{
  //   if (isError){
  //     console.log(message)
  //   }

  //   dispatch(getGoals())

  //   return ()=>{
  //     dispatch(reset())
  //   }
  // }, [navigate, isError, message, dispatch])

  return (
    <div className='Center'>
      <p className='hola'>Hola!, {name}</p>
      <p className='empieza'>Empieza a descubrir</p>
      <div className='container3'>
        <img className='image2' src="" alt="" />
        <button className='more'>Conoce mas</button>
      </div>
      <p className="productsRecent">
        Productos recientes
      </p>

      <div className="container4">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* <GoalForm />

      <section className="content">
      {goals.length > 0 ? (
        <div className="goals">
          {goals.map((goal) => (
            <GoalItem key={goal._id} goal={goal}/>
          ))}
        </div>
      ) : (<h3>You have not set any goals</h3>)}
    </section> */}
    </div>
  )
}
