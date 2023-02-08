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
    border-radius: 10px;
    text-align: left;

    h1 {
        font-size: 60px;
        font-weight: bold;
        color:  #1f1666;
        text-align: center;

        @media screen and (max-width: 768px) {
            font-size: 32px;
        }
    }

    form {
        max-width: 600px;
        margin: 40px auto;

        .contact-item {
            margin-bottom: 20px;
            text-align: left;

            &:last-of-type {
                text-align: right;
            }

            label {
                display: block;
                font-size: 20px;
            }
    
            input {
                border-radius: 5px;
                border: 1px solid #f6b163;
                font-size: 20px;
                height: 50px;
                outline: none;
                padding-left: 10px;
                width: 100%;
            }
    
            textarea {
                border-radius: 5px;
                border: 1px solid #f6b163;
                font-size: 20px;
                outline: none;
                padding-left: 10px;
                width: 100%;
                height: 140px;
            }

            input[type="submit"] {
                background-color: #f6b163;
                color: white;
                border-radius: 20px;
                width: 120px;
                padding: 0px;
                text-align: center;
                cursor: pointer;
            }
        }
    }
`

export const ContactUs = styled.div`
    background-color: ${Colors.primary};
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 0px;
    border-radius: 10px;
    text-align: left;
    color: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
    }

    .item {
        text-align: center;
        margin: 0px auto;
        
        img {
            width: 100px;
            height: 100px;
            object-fit: contain;
            margin: 0 auto;

            @media screen and (max-width: 768px) {
                width: 60px;
                height: 60px;
            }
        }

        h1 {
            font-size: 30px;
            font-weight: bold;
            margin-top: 30px;
            margin-bottom: 10px;
        }

        p {
            font-size: 20px;
        }
    }
`
