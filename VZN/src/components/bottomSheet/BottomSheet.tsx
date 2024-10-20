import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './BottomSheet.module.css'; 

interface IBottomSheetProps {
	children?: React.ReactNode
	visible: React.Dispatch<React.SetStateAction<boolean>>
}

const BottomSheet: FC<IBottomSheetProps> = ({ children, visible }) => {
	const startHeight = window.innerHeight - window.innerHeight * 0.695

	const lastHeight = window.innerHeight * 0.771
  const [height, setHeight] = useState(startHeight); 
  const [startY, setStartY] = useState(0);
	const [isVisible, setIsVisible] = useState(true);
	const [isFullScreen, setIsFullScreen] = useState(false)
  const bottomSheet = useRef<HTMLDivElement | null>(null);
  
	useEffect(() => {
		const preventScroll = (e: TouchEvent) => {
			e.preventDefault(); 
		};
	
		document.body.style.overflow = 'hidden';
		document.addEventListener('touchmove', preventScroll, { passive: false });
		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('touchmove', preventScroll);
		};
  }, []);

	useEffect(() => {
		if (height < startHeight) {
			setIsVisible(false)
			setTimeout(() => visible(false), 700); 
		}
	}, [height]); 
 
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartY(e.touches[0].clientY)
  };


	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		const currentY = e.touches[0].clientY;
		const deltaY = startY - currentY;
	
		setHeight(prevHeight => {
			const currentHeight = prevHeight + deltaY;

			if (currentHeight > lastHeight && !isFullScreen) {
				setIsFullScreen(true); 
				return window.innerHeight; 
			}
	
			if (isFullScreen && deltaY > 0) {
				setIsFullScreen(false); 
				return prevHeight + deltaY; 
			}
	
			return currentHeight; 
		});
	
		setStartY(currentY);
	};

  return (
    <div
      ref={bottomSheet}
      className={`${styles.bottomSheet} ${isVisible ? styles.visible : styles.hidden}`}
			style={{ height: `${height}px` }}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
    >
      <div
        className={styles.handleHeader}
      >
        <div className={styles.handle}></div>
      </div>
      {children}
    </div>
  );
};

export default BottomSheet;