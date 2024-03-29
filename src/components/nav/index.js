import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Select, { components } from 'react-select';
import { TweenLite, Power3 } from 'gsap';
import useToggle from '../../hooks/useToggle';
import { NavStyle, SideBar } from './nav.style';

function Nav(props) {
	const [arrayMethod, handleSelect] = useState(null);
	const [screenWidth, handleResize] = useState(window.innerWidth);
	const [showMenu, handleMenu] = useToggle();
	const navRef = useRef(null);
	const options = [
		{
			value: 'map',
			label: 'Map Method'
		},
		{
			value: 'filter',
			label: 'Filter Method'
		},
		{
			value: 'findIndex',
			label: 'Find-Index Method'
		},
		{
			value: 'find',
			label: 'Find Method'
		},
		{
			value: 'reduce',
			label: 'Reduce Method'
		},
		{
			value: 'sort',
			label: 'Sort Method'
		}
	];

	const {
		location: { pathname }
	} = props;

	useEffect(() => {
		if (pathname === '/') {
			handleSelect(null);
		} else {
			const arMethod = options.find(method => pathname.includes(method.value));
			handleSelect(arMethod);
		}
		navBackground();
	}, [pathname]);

	useEffect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleScroll);
		};
	}, []);

	function handleScroll() {
		handleResize(window.innerWidth);
		screenWidth > 628 && showMenu && handleMenu(false);
		navBackground();
	}

	function navBackground() {
		navRef.current &&
			TweenLite.to(navRef.current, 1, {
				background:
					(pathname !== '/' && 'rgba(0, 0, 0, 0.6)') || window.pageYOffset > 20
						? 'rgba(0, 0, 0, 0.6)'
						: 'none',
				ease: Power3.easeOut
			});
	}

	function handleClick(data) {
		showMenu && handleMenu(false);
		if (!arrayMethod || data.value !== arrayMethod.value) {
			handleSelect(data);
			props.history.push(`/${data.value}`);
		}
	}

	const navItems = (
		<ul>
			<li onClick={() => handleSelect(null)}>
				<Link to="/" className="linkRouter">
					Home
				</Link>
			</li>

			<li>
				<Select
					classNamePrefix="customSelect"
					isSearchable={false}
					isClearable={false}
					value={arrayMethod}
					onChange={data => {
						handleClick(data);
					}}
					options={options}
					components={{
						IndicatorSeparator: () => null
					}}
					placeholder="Select Method"
				/>
			</li>
			<li>
				<button
					className="theme-btn"
					onClick={() => {
						showMenu && handleMenu(false);
						props.handleMode();
					}}
				>
					<svg
						height="448pt"
						viewBox="-12 0 448 448.04455"
						width="448pt"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0" />
					</svg>
				</button>
			</li>
		</ul>
	);

	return showMenu && screenWidth < 628 ? (
		<SideBar>
			<div className="backdrop" />
			<NavStyle>{navItems}</NavStyle>
		</SideBar>
	) : (
		<NavStyle ref={navRef}>
			{screenWidth > 628 ? (
				navItems
			) : (
				<button className="menu-btn" onClick={() => handleMenu(true)}>
					<img src="/image/menu.svg" alt="menu" />
				</button>
			)}
		</NavStyle>
	);
}

export default withRouter(Nav);
