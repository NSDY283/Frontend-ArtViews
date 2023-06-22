import React from 'react'
import { ContainerSing } from '../../layouts/ContainerSing/ContainerSing'
import { NavUser } from '../../ui/NavUser/NavUser'
import '../../layouts/ContainerSing/ContainerSing.css'

export const SingUP = () => {
  return (
    <div className="SingUPpage">
      <NavUser/>
      <ContainerSing/>
    </div>
  )
}
