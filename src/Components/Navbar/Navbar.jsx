import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Navbar.module.css';
import NameLogo from '../../assets/reeteshNameLogo.png'

const barStyle = {
	bar1: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(45deg)',
	},
	bar2: {
		position: 'absolute',
		left: '-2px',
	},
	bar3: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(-45deg)',
	},
};

const circle = {
	background: 'linear-gradient(40deg, #8983F7, #1c2931 70%)',
};
const cresent = {
	transform: 'scale(1)',
};
const Navbar = () => {
	const [preScrollPos, setPreScrollPos] = useState(
		window.pageYOffset,
	);
	const navRef = useRef();

	const { newTheme, mode, handleMode, open, handleMenu } =
		useContext(ThemeContext);

	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		if (preScrollPos > currentScrollPos) {
			navRef.current.style.top = '0';
		} else {
			navRef.current.style.top = '-80px';
		}
		setPreScrollPos(currentScrollPos);
	};

	return (
		<nav
			ref={navRef}
			className={styles.navContainer}
			style={{
				background: `${newTheme.background}`,
				boxShadow: `3px 3px 10px ${newTheme.line}`,
			}}
		>
			<div className={styles.navbar}>
				<a href='https://reetesh-meena.vercel.app/'>
					<div className={styles.logo}>
						<img
							src={NameLogo}
							alt='Logo'
						/>
					</div>
				</a>

				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.links}
				>
					<a href='#home'>Home</a>
					<a href='#about'>About</a>
					 
					<a href='#projects'>Projects</a>

					<a href='#contact'>Contact</a>
				</div>
				<button
					aria-label={mode === 'dark' ? 'Dark Mode':'Light Mode'}
					title={
						mode === 'dark' ?  'Toggle Dark Mode':'Toggle Light Mode'
					}
					style={{ color: `${newTheme.title}` }}
					className={styles.modeButton}
					onClick={handleMode}
				>
					<div
						className={styles.circle}
						style={mode === 'light' ? circle : {}}
					>
						<div
							style={mode === 'light' ? cresent : {}}
							className={styles.crescent}
						></div>
					</div>
				</button>

				<div onClick={handleMenu} className={styles.bars}>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar1
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar2
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar3
						}
					></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
