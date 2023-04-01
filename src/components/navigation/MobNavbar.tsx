import React from 'react';
import { HashLink } from '@components/links';
import styled from 'styled-components';
import { NavbarData } from './NavbarData';
import { SimpleLink } from '@components/links';

const NavbarController = styled.div`
	--bar-width: 30px;
	--bar-height: 4px;
	--hamburger-gap: 6px;
	--foreground: var(--text);
	--background: var(--lbg);
	--hamburger-margin: 20px;
	--animation-timing: 200ms ease-in-out;
	--hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);

	width: 100%;
	height: 60px;
	padding: 15px 20px;
	position: fixed;
	z-index: 99;
	display: flex;
	top: 0;
	left: 0;
	justify-content: space-between;
	align-items: center;
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(15px);

	& > label {
		--x-width: calc(var(--hamburger-height) * 1.41421356237);
		display: flex;
		flex-direction: column;
		gap: var(--hamburger-gap);
		width: max-content;
		position: absolute;
		top: var(--hamburger-margin);
		right: var(--hamburger-margin);
		z-index: 2;
		cursor: pointer;

		:has(input:checked) {
			--foreground: white;
			--background: var(--lbg);
		}
		:has(input:focus-visible)::before,
		:has(input:focus-visible)::after,
		input:focus-visible {
			border: 1px solid var(--background);
			box-shadow: 0 0 0 1px var(--foreground);
		}

		::before,
		::after,
		input {
			content: '';
			width: var(--bar-width);
			height: var(--bar-height);
			background-color: var(--foreground);
			border-radius: 9999px;
			transform-origin: left center;
			transition: opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing),
				translate var(--animation-timing), background-color var(--animation-timing);
		}

		input {
			appearance: none;
			padding: 0;
			margin: 0;
			outline: none;
			pointer-events: none;
		}

		:has(input:checked)::before {
			rotate: 45deg;
			width: var(--x-width);
			translate: 0 calc(var(--bar-height) / -2);
		}

		:has(input:checked)::after {
			rotate: -45deg;
			width: var(--x-width);
			translate: 0 calc(var(--bar-height) / 2);
		}

		input:checked {
			opacity: 0;
			width: 0;
		}
	}
	label:has(input:checked) + nav {
		translate: 0;
	}
	& > nav {
		position: absolute;
		top: 60px;
		right: 0;
		display: flex;
		flex-direction: column;
		transition: translate var(--animation-timing);
		translate: 100%;
		padding: 1rem;
		background: rgba(0, 0, 0, 0.3);
		color: var(--background);
		max-width: 10rem;
	}
`;

const MobNavbar: React.FC = () => {
	return (
		<NavbarController>
			<HashLink to='/'>Logo</HashLink>
			<label>
				<input type='checkbox' />
			</label>
			<nav>
				{NavbarData.map(({ to, text }) => (
					<HashLink key={to} to={to}>
						{text}
					</HashLink>
				))}
				<SimpleLink href=''>Marketplace</SimpleLink>
				<HashLink to='/'>Contact us</HashLink>
			</nav>
		</NavbarController>
	);
};

export default MobNavbar;
