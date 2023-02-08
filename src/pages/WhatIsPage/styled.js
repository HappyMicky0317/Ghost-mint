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
    
    .image-container {
        position: relative;

        .main-image {
            width: 300px;
            height: 300px;
            margin: 0 auto;
            object-fit: cover;
            display: inline-block;
            margin-bottom: 10px;
            @media screen and (max-width: 768px) {
                width: 150px;
                height: 150px;
            }
        }
    
        .sub-image {
            width: 180px;
            height: 180px;
            object-fit: cover;
            margin-left: -80px;
            display: inline-block;
            @media screen and (max-width: 768px) {
                width: 90px;
                height: 90px;
                margin-left: -40px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 40px 20px;
    }
`

export const BasicsContainer = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 50px 60px;
    border-radius: 10px;
    text-align: center;
    margin-top: 30px;

    h1 {
        font-size: 50px;
        font-weight: bold;
        color: ${Colors.primary};

        @media screen and (max-width: 768px) {
            font-size: 32px;
        }
    }

    p {
        font-size: 26px;
        line-height: 32px;
        color: #333;
        margin-top: 50px;
        margin-bottom: 30px;

        @media screen and (max-width: 768px) {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 40px 20px;
    }
`

export const CryptoWorkContainer = styled.div`
    background-color: ${Colors.primary};
    padding: 50px 0px 30px 0px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    margin-top: 30px;

    h1 {
        font-size: 50px;
        font-weight: bold;
        color: white;
        @media screen and (max-width: 768px) {
            font-size: 32px;
        }
    }

    .work-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        max-width: 1000px;
        grid-gap: 30px;
        margin: 50px auto;

        @media screen and (max-width: 800px) {
            grid-template-columns: repeat(1, 1fr);
        }

        .work-item {
            text-align: center;
            color: white;
            max-width: 500px;
            margin: auto;

            img {
                width: 80px;
                height: 80px;
                object-fit: contain;
                margin: 0 auto;
            }

            p {
                margin-top: 20px;
                font-size: 15px;
                line-height: 18px;
            }
        }
    }

    h2 {
        font-size: 24px;
        color: white;
    }
`

export const AdvantageContainer = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 50px 60px;
    border-radius: 10px;
    text-align: center;
    margin-top: 30px;

    h1 {
        font-size: 50px;
        font-weight: bold;
        color: #f6b163;
        @media screen and (max-width: 768px) {
            font-size: 32px;
        }
    }

    .advantage-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
        margin-top: 50px;

        @media screen and (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }

        .item {
            text-align: left;

            h3 {
                font-size: 20px;
                font-weight: bold;
                color: ${Colors.primary};
            }

            p {
                margin-top: 20px;
                font-size: 16px;
                line-height: 20px;
                color: #333;
            }
        }
    }

    p {
        font-size: 26px;
        line-height: 32px;
        color: #333;
        margin-top: 50px;
        margin-bottom: 30px;
    }
`

export const Footer = styled.footer`
    padding: 0px;

    .section {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
`
