import React from 'react';
import styled from 'styled-components';
import SwitchButton from './Switch.component';

const Avatar = styled.svg `
        background-color: lightgray;
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;
        margin-left:20px;
    `;

    const Mag = styled.svg `
        width: 1em;
        height: 1em;
        font-size:1.5rem;
        margin: 2px 5px;
    `;

    const Menu = styled.svg `
        width: 1em;
        height: 1em;
        font-size:1.5rem;
        margin: 0 10px;
    `;

    const Nav = styled.div `
        background-color: #1C5476;
        color:#FFF;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    `;

    const NavHeader = styled.div `
        padding: 4px 20px;
        width: 100%;
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin: 0 auto;
        `;

    const NavLeft = styled.div `
        display: flex;
        align-items:center;
        width:400px;
        @media (min-width: 768px) {
        width:40%;
        }
    `;

    const SearchInput = styled.div `
        width:100%;
        margin-left:20px;
        height:34px;
        border-radius: 3px;
        display:flex;
        align-items:center;
        color: #FFF;
        font-size: 14px;
        font-weight: 300;
        background-color: rgba(255, 255, 255, 0.15);
    `;

    const Input = styled.input `
        font-size: 16px;
        border:none;
        height:1.8em;
        background-color:transparent;
        :active,
        &:focus {
        outline: none;
        box-shadow: none;
        caret-color:white;
        }
        ::placeholder,
        ::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.5);

        }
        :-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.5);

        }
    `;

    const NavRight = styled.div `
        align-items:center;
        display:none;
        @media (min-width: 768px) {
        display:flex;
        }
        overflow:hidden;
        right:0;
        svg {
        margin: 0 10px;
        }

    `;

    const MenuLink = styled.a `
    color:white;`;

function Header() {

    

return (
<div>
    <Nav>
        <NavHeader>
            
            <NavLeft>
                <MenuLink href="#">
                    <Menu fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </Menu>
                </MenuLink>
                <SearchInput>
                    <Mag width="24" height="24" fill="none">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"></path>
                    </Mag>
                    <Input type="text" placeholder="Search" />
                </SearchInput>
            </NavLeft>

            <NavRight>
                <MenuLink href="#">
                    <SwitchButton text="Dark Mode" />
                </MenuLink>
                <MenuLink href="#">
                    <Avatar viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                        </path>
                    </Avatar>
                </MenuLink>
            </NavRight>
        </NavHeader>
    </Nav>
</div>
)
};

export default Header;