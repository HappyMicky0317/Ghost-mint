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
  .AboutCEO{
    padding:100px 15px;
    .col-lg-4{
      display:flex;
      img{
        max-width:167px;
        margin:auto;
      }
    }
  }
  .Testimonials{
    max-width:1000px;
    margin:auto;
    margin-top:50px;
  }
  .col-lg-6{
    padding:0 90px;
  }
  .right{
      border-left: 1px solid  #666;
  }
  ul{
    margin-left:40px;
    li{
      list-style-type:disc;
    }
  }
`

export const bottomPart=styled.div`
   background-image: linear-gradient(90deg,#e91818 0%,#af270f 100%);
   .content{
      max-width:1100px;
      margin:auto;
      padding: 50px 15px;
   }
   .indivs{
    margin-top:20px;
  }
}
`
