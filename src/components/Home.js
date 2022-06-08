import { useState } from 'react'
import {
    HomeContainer,
    HomeHeader,
    Timer,
    Title,
    HomeDisplay,
    HomeInput,
    Rows,
    FirstRow,
    SecRow,
    ThirdRow,
    ForthRow,
    HomeButton
} from '../components/HomeElements'

const Home = () => {
    const [input, setInput] = useState('')

    const HandleClick = (e) => {
        setInput(input.concat(e.target.name))

    }
    const Delete = () => {
        setInput('')
    }
    const Clear = () => {
        setInput(input.slice(0, -1))
    }
    const Sum = () => {
        try {
            setInput(eval(input).toString())
        } catch (error) {
            setInput('0')
        }
    }

    return (
        <>
            <HomeContainer>
                <HomeDisplay>
                    <HomeHeader>
                        <Title>Simple Calculator</Title>
                        <Timer>
                            {new Date().toLocaleTimeString()}
                        </Timer>
                    </HomeHeader>
                    <HomeInput type='text' value={input} />
                    <Rows>
                        <HomeButton id='deleteAll' onClick={Delete}>AC</HomeButton>
                        <HomeButton name='x' onClick={Clear}>C</HomeButton>
                        <HomeButton name='%' onClick={HandleClick}>%</HomeButton>
                    </Rows>
                    <FirstRow>
                        <HomeButton name='7' onClick={HandleClick}>7</HomeButton>
                        <HomeButton name='8' onClick={HandleClick}>8</HomeButton>
                        <HomeButton name='9' onClick={HandleClick}>9</HomeButton>
                        <HomeButton name='*' onClick={HandleClick}>*</HomeButton>

                    </FirstRow>
                    <SecRow>
                        <HomeButton name='4' onClick={HandleClick}>4</HomeButton>
                        <HomeButton name='5' onClick={HandleClick}>5</HomeButton>
                        <HomeButton name='6' onClick={HandleClick}>6</HomeButton>
                        <HomeButton name='+' onClick={HandleClick}>+</HomeButton>
                    </SecRow>
                    <ThirdRow>
                        <HomeButton name='1' onClick={HandleClick}>1</HomeButton>
                        <HomeButton name='2' onClick={HandleClick}>2</HomeButton>
                        <HomeButton name='3' onClick={HandleClick}>3</HomeButton>
                        <HomeButton name='-' onClick={HandleClick}>-</HomeButton>
                    </ThirdRow>
                    <ForthRow>
                        <HomeButton name='.' onClick={HandleClick}>.</HomeButton>
                        <HomeButton name='0' onClick={HandleClick}>0</HomeButton>
                        <HomeButton name='/' onClick={HandleClick}>/</HomeButton>
                        <HomeButton onClick={Sum}>=</HomeButton>
                    </ForthRow>
                </HomeDisplay>
            </HomeContainer>
        </>
    )
}

export default Home