import style from '../menu.module.css'

export const AccountingInProductionMenu = () => {
	return (
		<main className={style.main}>
			<nav className={style.nav}>
				<ul className={`${style.list} ${style.specialPaddings}`}>
					<li>
						<span>Акты инвентаризации</span>
					</li>
					<li>
						<span>Внутризаводские накладные (Приход)</span>
					</li>
					<li>
						<span>Внутризаводские накладные (Расход)</span>
					</li>
					<li>
						<span>Лимитные карты (Приход)</span>
					</li>
					<li>
						<span>Цеховая наменклатура</span>
					</li>
				</ul>
			</nav>
		</main>
	)
}
