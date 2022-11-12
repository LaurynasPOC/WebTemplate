import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { tablet } from '../../styles/breakpoints'
import { Box } from '../wrappers/Box'
import { FlexWrapper } from '../wrappers/FlexWrapper'
import { Button } from '../Buttons/BaseButton'
import { TextBase } from '../wrappers/TextBase'

const StyledNavbarWrap = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0s ease-out;
    svg {
        transition: all .25s ease-out;
    }
    ${({ isScrollStyle }) => isScrollStyle ? `
        height: 80px;
        background: linear-gradient(180deg, #001B2670 100%, var(--special) 100%);
        svg {
            height: 35px;
            margin-left: -20px;
        }
    ` : `
        height: 200px;
        background: linear-gradient(180deg, #001B26 0%, rgba(0, 0, 0, 0) 60%);
        svg {
            height: 50px;
            
        }
    `}
`


const NavBar = () => {
    const [isScrollStyle, setIsScrollStyle] = useState(false)

    const hashLink = [
        { to: '/#vision', text: 'Vision' },
        { to: '/#how-it-works', text: 'How it Works' },
        { to: '/#roadmap', text: 'Roadmap' },
        { to: '/#tokenomics', text: 'Tokenomics' },
    ]


    useEffect(() => {
        const handleScroll = () => {
            setIsScrollStyle(window.scrollY > 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    return (
        <StyledNavbarWrap isScrollStyle={isScrollStyle}>
            <Box margin={'20px 40px'}>
                <FlexWrapper justifyContent='space-between' alignItems='center'>
                    <HashLink to="/#hero">
                        <Logo />
                    </HashLink>
                    <FlexWrapper>
                        {hashLink.map(({ to, text }) => <TextBase fontWeight={500} fontSize={"16px"} color={'#D7D0C6'} padding={"0 15px"}><HashLink to={to}>{text}</HashLink></TextBase>)}
                    </FlexWrapper>
                    <Link to="/contact">
                        <Button
                            color='#001B26'
                            fontSize='1rem'
                            fontWeight={500}
                            backgroundColor='#C2474F'
                            boxShadow={'0px 20px 80px rgba(0, 7, 10, 0.5)'}
                            width='140px' height='45px'
                            borderRadius='20px'>Private Sale</Button>
                    </Link>
                </FlexWrapper>
            </Box>
        </StyledNavbarWrap>
    )
}

export default NavBar
