import React from 'react'
import styled from 'styled-components';
import BgImg from '../assects/home-pic.png';
import { BiArrowToRight } from 'react-icons/bi';

const Section = styled.section`
    background-image: url(${BgImg});
    height: 785px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
`;
const Content = styled.div`
    width: 100%;
    height: 100px;
`;
const Left = styled.div`
    padding-left: 220px;
    padding-top: 143px
`;
const Title = styled.p`
    font-size: 55px;
    color: #04050a;
    font-weight: 400;
`;
const Desc = styled.p`
    width: 472px;
    font-size: 20px;
    color: #9ea0ac;
    line-height: 30px;
    margin-top: 50px;
`;
const Button = styled.a`
    display:flex;
    justify-content: center;
    align-items: center;
    border-radious: 18px;
    margin-top: 50px;
    width:371px;
    height: 71px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    corsor: pointer;
    background: linear-gradient(90deg, #0546d6, #3f89fc);
    text-decoration: none;
    box-shadow: 0 15px 14px rgb(0 42 177 / 12%); 

`;

function Hero() {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Get 3 FREE Stocks <br></br> value up to $1971!
                    </Title>
                        <Desc>
                          Open and found the a brokerage account with $50 or more and you will have a change of claining stock link<span>Linkedin, FB, SBUX</span>{' '} and more 
                        </Desc>
                        <Button href='https://facebook.com'>
                            <span>Claim your free stock now</span>
                            <BiArrowToRight />
                        </Button>
                </Left>
            </Content>
        </Section>
    )
}

export default Hero
