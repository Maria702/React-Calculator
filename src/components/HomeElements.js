import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: black;
`;

export const HomeDisplay = styled.div`
    display : flex;
    flex-direction : column;
    width : 80vh;
    height : 90vh;
    background-color :white;
    border-radius : 50px;
    box-shadow : 0px 0px 20px grey;
    
    // mob 320
    @media (min-width: 320px ) {
        border-radius : 30px;
        height : 96vh;
    }
   
    @media (min-width: 768px) {
       height : 76vh;
       border-radius : 20px;
    }

    @media (min-width: 2560px) {
        border-radius : 50px;
     }
   
`;

export const HomeHeader = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    align-items : center;   
`;

export const Title = styled.h2`
    font-weight : bold;
    color : #b30e27;
       
    // mob 320
    @media (min-width: 320px) {
        font-size : 1rem;
    }
    // mob 320
    @media (min-width: 320px) {
        font-size : 1rem;
    }
    @media (min-width: 1024px) {
        font-size : 30px; 
    }

    @media (min-width: 2560px) {
        font-size : 50px; 
    }
`;

export const Timer = styled.p`
    font-weight : bold;
    color :#b30e27;

    // mob 320
    @media (min-width: 320px) {
        font-size : 1rem;
      
    }
    @media (min-width: 1024px) {
        font-size : 30px; 
    }
    @media (min-width: 2560px) {
        font-size : 50px; 
    }
`;

export const HomeInput = styled.input`
    width : 380px;
    height : 50px;
    border-radius : 10px;
    align-self : center;
    justify-self : center;
    border : none;
    background-color : white;
    font-size : 30px;
    font-weight : bold;
    text-align : end;
    margin-bottom : 20px;
    box-shadow : 0px 0px 5px blue;
    outline : none;
    &:focus {
        outline : none;
    }

    
    // mob 320
    @media (min-width: 320px) {
        width : 220px;
        height : 25px;
        border-radius : 10px;
        font-size : 15px;
    }
     
    @media (min-width: 768px) {
        width : 300px;
        height : 25px;
        border-radius : 10px;
        font-size : 15px;
     }

     @media (min-width: 1024px) {
        width : 450px;
        height : 50px;
        border-radius : 50px;
        font-size : 35px;
     }
     @media (min-width: 2560px) {
        width : 950px;
        height : 130px;
        border-radius : 50px;
        font-size : 50px;
    }
`;
export const Rows = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;
export const FirstRow = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;
export const SecRow = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;
export const ThirdRow = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;
export const ForthRow = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;
export const HomeButton = styled.button`
    padding : 0vh 9vh 0vh 7vh;
    margin : 5px;
    width : 50px;
    height : 50px;
    justify-content : space-between;
    align-items : center;
    text-align : center;
    background-color : #b30e27;
    color: white;
    border-radius : 50px;
    border : none;
    font-size : 30px;
    font-weight : bold;
    box-shadow : 0px 0px 5px blue;
    cursor : pointer;
    &:hover{
        background-color : white;
        color: black;
        box-shadow : 0px 10px 5px  #b30e27;
    }

    @media (min-width: 320px) {
        padding : 0vh 9vh 0vh 7vh;
        margin : 5px;
        border-radius : 30px;
        width : 30px;
        height : 30px;
        font-size : 15px;
        box-shadow : 0px 0px 2px blue;
        &:hover{
            background-color : white;
            color: black;
            box-shadow : 0px 5px 3px  #b30e27;
        }
    }

    @media (min-width: 1024px) {
        padding : 0vh 9vh 0vh 7vh;
        margin : 5px;
        border-radius : 30px;
        width : 50px;
        height : 50px;
        font-size : 30px;
        box-shadow : 0px 0px 2px blue;
        &:hover{
            background-color : white;
            color: black;
            box-shadow : 0px 5px 3px  #b30e27;
        } 
    }

    @media (min-width: 2560px) {
        padding : 0vh 9vh 0vh 7vh;
        margin : 5px;
        border-radius : 50px;
        width : 110px;
        height : 110px;
        font-size : 50px;
        box-shadow : 0px 0px 2px blue;
        &:hover{
            background-color : white;
            color: black;
            box-shadow : 0px 5px 3px  #b30e27;
        } 
    }
`;


