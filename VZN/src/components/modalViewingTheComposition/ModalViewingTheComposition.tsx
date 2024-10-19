import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { ViewingTheComposition } from './mainTheComposition/ViewingComposition'
import style from './modalViewingTheComposition.module.css'

const ModalViewingTheComposition = () => {
  const headerProps = {
    title: "Элемент ВЗН №132313",
    style: ["header", "border"],
  }
  return (
    <>
      <Header {...headerProps} />
      <ViewingTheComposition />
      <Footer />
    </>
  )
}

export default ModalViewingTheComposition
