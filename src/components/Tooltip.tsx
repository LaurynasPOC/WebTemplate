import React from 'react';
import styled from 'styled-components';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
	dataTooltip: string;
}

const TooltipStyles = styled.div<TooltipProps>`
	position: relative;
	width: fit-content;
	box-sizing: border-box;

	::before,
	::after {
		--scale: 0;
		--arrow-size: 10px;
		--tooltip-color: var(--lbg);

		position: absolute;
		box-sizing: border-box;
		top: -0.25rem;
		left: 50%;
		transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
		transition: 150ms transform;
		transform-origin: bottom center;
	}

	::before {
		--translate-y: calc(-90% - var(--arrow-size));
		content: ${({ dataTooltip }) => JSON.stringify(dataTooltip)};
		color: white;
		padding: 0.8rem;
		border-radius: 0.6rem;
		text-align: center;
		width: max-content;
		background: var(--tooltip-color);
	}

	:hover::before,
	:hover::after {
		--scale: 1;
	}

	::after {
		--translate-y: calc(-1 * var(--arrow-size));
		content: '';
		border: var(--arrow-size) solid transparent;
		border-top-color: var(--tooltip-color);
		transform-origin: top center;
	}
`;

interface Props {
	tooltipText: string;
	children: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ tooltipText, children }) => {
	return <TooltipStyles dataTooltip={tooltipText}>{children}</TooltipStyles>;
};

export default Tooltip;
