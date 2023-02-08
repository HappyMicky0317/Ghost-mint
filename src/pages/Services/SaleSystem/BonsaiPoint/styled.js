import styled from 'styled-components';

export const Bg = styled.div`
  padding-bottom:0
`

export const MainContent = styled.div`
    .topNav{
      background-image:linear-gradient(90deg,#e91818 0%,#af270f 100%);
      .main{
        max-width:1100px;
        margin:auto;
        padding:20px 15px;
        span{
          line-height:33.6px!important;
          font-family:Montserrat, sans-serif!important;
        }
      }
    }
    .POSSystem{
      max-width:1100px;
      margin:auto;
      margin-top:70px;
      padding-left:15px;
      padding-right:15px;
      .row{
        .col-lg-6{
          .indivs{
            margin-top:20px;
          }
        }
      }
    }
    .midContent{
      padding-top:70px;
      max-width:1300px;
      margin:auto;
      
    }
    .features{
      max-width:1100px;
      margin:auto;
      margin-top:100px;
      padding-left:15px;
      padding-right:15px;
      .content{
        .indis{
          margin-top:40px;
          display:flex;
          .avatar{
            img{
              width:45px;
            }
          }
          .avatarLabel{
            margin-left:15px;
            span{
              line-height:22.4px!important;
            }
          }
        }
      }
    }
    .schedule{
      background-image:linear-gradient(90deg,#e91818 0%,#af270f 100%);
      margin-top:70px;
      .content{
        max-width:1100px;
        margin:auto;
        padding:50px 15px;
        .whiteBtn{
          padding:0 30px;
          div{
            padding:0px!important;
          }
        }
      }
    }
`