import React from 'react'
import { AddVZN } from '../components/addVZN/AddVZN'
import Footer from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { AboutVZN } from '../components/InfoAboutVZN/AboutVZN'
import InfoCard from '../components/infoCard/InfoCard'
import ListCards from '../components/listCards/ListCards'
import { THeaderStyle } from '../types'

type TModalStep = 'first-step' | 'second-step' | 'infoCard' | 'infoCardEdit'
export const InfoAboutVZN = () => {
	const [modalStep, setModalStep] = React.useState<TModalStep | ''>('')
	const headerProps: THeaderStyle = !modalStep
		? { style: [''] }
		: { style: ['border'] }
	// const { numberVzn } = useParams()

	function headerRenderProps(): React.ReactNode {
		if (!modalStep) return <h1>ВЗН № (Расход)</h1>
		if (modalStep === 'infoCard') return <h1>Элемент ВЗН №</h1>
		return (
			<div>
				<h1>Элемент ВЗН №</h1>
				<p>
					{modalStep === 'first-step'
						? 'Поиск карточки (Шаг 1)'
						: 'Поиск карточки (Шаг 2)'}
				</p>
			</div>
		)
	}

	function renderMain() {
		switch (modalStep) {
			case 'first-step':
				return <AddVZN setModalStep={setModalStep} />
			case 'second-step':
				return <ListCards setModalStep={setModalStep} />
			case 'infoCard':
				return <InfoCard setModalStep={setModalStep} modalStep={modalStep} />
			case 'infoCardEdit':
				return <InfoCard setModalStep={setModalStep} modalStep={modalStep} />
			default:
				return <AboutVZN setModalStep={setModalStep} />
		}
	}

	return (
		<>
			<Header render={() => headerRenderProps()} headerProps={headerProps} />
			{renderMain()}
			<Footer />
		</>
	)
}
