import styled from 'styled-components';

export const Bg = styled.div`
  padding-bottom:0
`
export const Container = styled.div`
  max-width:1100px;
  margin:auto;
  padding:50px 15px;
  .indivs{
    margin-top:20px;
  }
  p{
    margin:0!important;
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:16px;
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
  .inform{
    margin-top: 100px;
    .SendUS{
      box-shadow: 0px 5px 20px 0px rgb(0 0 0 / 20%);
      background-color:#f2f2f2;
      padding:15px 20px;
      border-radius:10px;
      .mainContent{
      }
    }
    .col-lg-6{
      img{
        max-width:500px;
      }
      Label{
        color:#3a3a3a;
        font-family (stack):Muli, sans-serif;
        font-size:18px;
        font-weight:700;
      }
      p{
        font-size:15px;
      }
      input{
           color: #333;
          background-color: #f2f2f2;
          border-color: #eee;
          border-radius: 5px;
          border-width: 1px;
          border-style: solid;
          width: 100% !important;
          padding: 10px;
          text-align: left;
          outline: none;
      }
      textarea{
         color: #333;
          background-color: #f2f2f2;
          border-color: #eee;
          border-radius: 5px;
          border-width: 1px;
          border-style: solid;
          width: 100% !important;
          padding: 10px;
          text-align: left;
          outline: none;
          height:160px;
      }
      textarea:focus{
        border-color: #006ba1;
      }
      input:focus{
        border-color: #006ba1;
      }
      #submit{
        color: #fff;
        background: #c61913;
        box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 10%);
        width: auto!important;
        color: #fff;
        background-color: #e91818;
        padding:7px 25px;
        white-space: normal;
        line-height: 1.85714285714286;
        text-align:center;
        font-size:21px;
        margin-top:10px;
      }
    }
  }
`
