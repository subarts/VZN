import React from 'react'
import Footer from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { AddVZN } from '../components/addVZN/AddVZN'
import { AboutVZN } from '../components/InfoAboutVZN/AboutVZN'
import { THeaderStyle } from '../types'
import { useParams } from "react-router-dom"

type TModalStep = 'first-step' | 'second-step'
export const InfoAboutVZN = () => {
	const [modalStep, setModalStep] = React.useState<TModalStep | ''>('')
	const headerProps: THeaderStyle = !modalStep ? { style: [''] } : { style: ['border'] }
	const { numberVzn } = useParams()

	function headerRenderProps(): React.ReactNode {
		if (!modalStep) return <h1>ВЗН №{numberVzn} (Расход)</h1>
		return (
			<div>
				<h1>Элемент ВЗН №{numberVzn}</h1>
				<p>{modalStep === 'first-step' ? 'Поиск карточки (Шаг 1)' : 'Поиск карточки (Шаг 2)'}</p>
			</div>
		)
	}

	return (
		<>
			<Header render={() => headerRenderProps()} headerProps={headerProps} />
			{!modalStep ? <AboutVZN setModalStep={setModalStep} /> : modalStep === 'first-step' ? <AddVZN /> : null}
			<Footer />
		</>
	)
}
