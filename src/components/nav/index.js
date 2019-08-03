import React, { useState, useEffect, useRef } from 'react';
import Select, { components } from 'react-select';
import { TweenLite, Power3 } from 'gsap';
import { NavStyle, SideBar, BackDrop } from './nav.style';

function Nav() {
	const [arrayMethod, handleChange] = useState(null);
	const [screenWidth, handleResize] = useState(window.innerWidth);
	const [showMenu, handleMenu] = useState(false);
	const navRef = useRef(null);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleScroll);
		};
	});
	function handleScroll() {
		handleResize(window.innerWidth);
		if (
			(window.pageYOffset > 500 || window.innerWidth < 628) &&
			window.pageYOffset > 20
		) {
			TweenLite.to(navRef.current, 1, {
				backgroundImage: 'url("/image/header-bg.jpg") ',
				ease: Power3.easeOut
			});
		} else {
			TweenLite.to(navRef.current, 1, {
				backgroundImage: 'none',
				ease: Power3.easeOut
			});
		}
	}
	const options = [
		{ value: 'filter', label: 'Filter' },
		{ value: 'map', label: 'Map' },
		{ value: 'reduce', label: 'Reduce' },
		{ value: 'find', label: 'Find' },
		{ value: 'findIndex', label: 'Find Index' }
	];
	const navItems = (
		<ul>
			<li>Home</li>
			<li>
				<Select
					classNamePrefix='customSelect'
					value={arrayMethod}
					onChange={data => {
						handleChange(data);
					}}
					options={options}
					components={{
						IndicatorSeparator: () => null
					}}
					placeholder='Select Method'
				/>
			</li>
			<li>About Me</li>
		</ul>
	);
	return showMenu ? (
		<SideBar>
			<BackDrop />
			<NavStyle>{navItems}</NavStyle>
		</SideBar>
	) : (
		<NavStyle ref={navRef}>
			{screenWidth > 628 ? (
				navItems
			) : (
				<button className='menu-btn' onClick={() => handleMenu(true)}>
					<img src='/image/menu.svg' alt='menu' />
				</button>
			)}
		</NavStyle>
	);
}

export default Nav;
