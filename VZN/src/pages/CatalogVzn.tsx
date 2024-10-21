import { useState } from 'react'
import Button from '../components/button/Button'
import Consigment from '../components/consigment/Consigment'
import Footer from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import CloseIcon from '../components/icons/CloseIcon'
import OptionIcon from '../components/icons/OptionIcon'
import PLusIcon from '../components/icons/PlusIcon'
import ModalFilterVzn from '../components/modalFilterVzn/ModalFilterVzn'
import ModalCreateVZN from '../components/modalCreateVZN/ModalCreateVZN'
import { THeaderStyle } from '../types'

type TVisibleModal = 'create' | 'search'

const CatalogVzn = () => {
	const [visibleModalType, setVisibleModalType] = useState<TVisibleModal | ''>(
		''
	)

	const headerProps: THeaderStyle = visibleModalType
		? { style: ['border', 'justifyStartH1'] }
		: { style: '' }

	function headerRenderProps(): React.ReactNode {
		return !visibleModalType ? (
			<h1>
				ВЗН УП (Расход)
				<div className='listButtons'>
          <Button
            onClick={() => setVisibleModalType('search')}
            size={'Small'}
						className={'smallButtonText'}
          >
						<>
							<OptionIcon className='' />
							Поиск
						</>
          </Button>
          
          <Button
            onClick={() => setVisibleModalType('create')}
            size={'Small'}
						className={'smallButtonText'}
          >
						<>
              <PLusIcon />
              Создать
						</>
					</Button>
				</div>
			</h1>
		) : (
			<h1>
				<CloseIcon className='' onClick={() => setVisibleModalType('')} />
				{visibleModalType === 'search' ? 'Фильтр ВЗН УП' : 'Создание ВЗН (Расход)'}
			</h1>
		)
	}
	return (
		<>
			<Header render={() => headerRenderProps()} headerProps={headerProps} />

      {visibleModalType === 'search' ? <ModalFilterVzn /> : visibleModalType === 'create' ? <ModalCreateVZN /> : <Consigment />}

			<Footer />
		</>
	)
}

export default CatalogVzn
