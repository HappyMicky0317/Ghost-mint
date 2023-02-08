import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`
export const MainContent = styled.div`
  max-width:1100px;
  margin:auto;
  padding:70px 15px;
  .indivs{
    margin-top:30px;
  }
  p{
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:18px;
    line-height:33.4286px;
    text-align:left;
    margin-top:10px;
  }
  .row{
    margin-top:20px;
    .col-lg-6{
      display:flex;
      .leftContent{
        margin:auto
      }
      img{
        margin:auto;
      }
    }
  }
`
export  const MiddleContent = styled.div `
  background-image: url(${Images.GiftCards2});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .row{
    max-width:1100px;
    margin:auto;
    display:flex;
    div{
      margin:auto;
    }
  }
`

export  const EndContent = styled.div `
  max-width:1100px;
  margin:auto;
  margin-top:100px;
  padding 1px 15px;
  .row {
    margin-top:20px;
  }
  p{
    margin:0!important;
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:16px;
    line-height:33.4286px;
    text-align:left;
    margin-top:10px;
  }
  a{
    font-family:Muli, sans-serif;
    font-size:16px;
    line-height:33.4286px;
    text-align:left;
    margin-top:10px;
    color:#e91818!important;
    text-decoration:underline!important;
    cursor:pointer
  }
  a:hover{
    color:#3a3a3a!important;
  }
  .AdditionalResources{
    padding-bottom: 50px;
    margin-top:100px;
    ul{
      margin-left:40px;
      li{
        list-style-type: disc;
        a{
          text-decoration:none!important;
        }
      }
    }
  }
`
