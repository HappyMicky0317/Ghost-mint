import styled from 'styled-components';

export const Bg = styled.div`
  padding-bottom:0
`

export const MainContent = styled.div`
    max-width: 1120px;
    margin:auto;
    padding-top:50px;
    padding-left:20px;
    padding-right:20px;
    span{
      line-height:54.6px!important;
    }
    p{
      color:#000000;
      font-family:Muli, sans-serif;
      line-height:33.4286px;
      font-weight:400;
      font-size:18px;
      a{
        color:red!important;
        text-decoration:underline!important;
        cursor:pointer;
      }
      a:hover {
        color:black!important;
      }
    }
`

export  const endContent = styled.div `
  background-color:  #e91818;
  margin-top:100px;
  padding-left:20px;
  .content{
    max-width:1100px;
    padding: 50px 0;
    margin:auto;
  }
`