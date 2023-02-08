import styled from 'styled-components';
import Colors from 'src/theme/Colors';

export const CardContainer = styled.div`
    background-color: ${Colors.primary};
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 100px;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    
    h1 {
        font-size: 30px;
        padding: 10px 0px;
    }
    
    h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 30px 0px;
    }
    
    img {
        width: 300px;
        height: 300px;
        margin: 0 auto;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 150px;
            height: 150px;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 40px 20px;
    }
`

export const ContentsContainer = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    margin-top: 30px;

    .questions-container {
        max-width: 800px;
        margin: 0 auto;

        .header {
            background-color: #1f1666;
            color: white;
            font-size: 30px;
            padding: 20px 8px;
            text-align: center;
            font-weight: bold;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

        .description {
            padding: 20px 30px;
            text-align: center;
            font-size: 16px;
            border: 1px solid #ccc;
            margin-bottom: 10px;
            white-space: pre-line;
        }
        .header.closed {
            background-color: #ffeba8;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            padding: 20px 0px;
            border: 1px solid #ccc;
            margin-bottom: 5px;
            color: black;
        }
        .header.opened {
            background-color: #1f1666;
            color: white;
            font-size: 30px;
            padding: 20px 0px;
            text-align: center;
            font-weight: bold;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
    }
`

export const Footer = styled.footer`
    padding: 0px;

    .section {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
`
