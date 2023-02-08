import styled from 'styled-components';

export const Bg = styled.div`
  padding-bottom:0
`
export const MainContent = styled.div`
  max-width:1100px;
  margin:auto;
  padding:70px 15px;
  .header{
    padding: 15px 15px;
    background-color:#dddddd;
    border-radius: 10px;
    cursor:pointer;
    margin-top:20px;
  }
  .header:hover{
    background-color:#bfbfbf;
  }
  .Container{
    display:none;
    background-color:#ececec;
    padding:30px 15px;
    .indivs{
      margin-top:20px;
      ul{
        margin-left:50px;
        li{
          list-style-type:disc;
          a{
            text-decoration:none!important;
          }
        }
      }
    }
  }
  .Content1{
    display:block!important;
  }
  p{
    margin:0!important;
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:18px;
    line-height:33.4286px;
    text-align:left;
    font-weight:400;
    a{
      color:#e91818!important;
      text-decoration:underline!important;
      cursor:pointer
    }
    a:hover{
      color:#3a3a3a!important;
    }
  }
`
