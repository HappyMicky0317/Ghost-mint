import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    width: 100%;
    // max-width: 1280px;
    margin: auto;
    background-color: rgb(255, 255, 255);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    // padding: 0 60px;
    position: fixed;
    box-shadow:0 5px 5px rgb(5 5 5 / 21%) !important;
    z-index:1000;
    
    nav{
        height: 60px;
        background-color: #fff;
        border-radius: 25px;
        padding: 0 60px;
        box-shadow: 5px 5px 10px 0 rgba(#ccc, .8);
        
    }
    .header-login{
            padding: 20px 70px;
            max-width:1250px;
            margin: 0 auto;
            
        }
    .nav-bar {
        padding: 10px 30px;
        // width: 1150px;
        // margin: 0 auto;
    }

    .mobile-menu {
        width: calc(100% - 8px);
        position: absolute;
        bottom: -4px;
        transform: translateY(100%);
        background: white;
        left: 4px;
        border-radius: 20px;
        padding: 20px;

        @media screen and (min-width: 993px) {
            display: none;
        }
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    // align-items: center;
    .logo{
        width: 149px;
        height:50px;
        margin-top:10px;
    }
`;

export const Humburger = styled.a`

  .menu-icon {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  @media(min-width:1070px) {
  .menu-div{display:none;}
  }
  .line { 
      display: block;
      width: 27px;
      height: 5px;
      border-radius: 2px;
      margin-bottom: 4px;
      margin-top: 4px;
    //   background: #1f1666;
  }
    position: fixed;
            top: 25px;
            right: 25px;
`;

export const NavbarMenu = styled.div`
    .navbar-menu {
        transition: transform 2s ease-in-out;
    }
    .default-font-style, .default-font-style1, .sub-default-font-style{
        font-family: Montserrat, sans-serif;
        font-size:16px !important;
        color: rgb(102, 102, 102);
        font-weight:900;
        font-style:normal;
        font-variant:normal;
    }
    ul, p{
      margin: 0;
    }
    .red-button {
        font-family: Montserrat, sans-serif;
        font-size:16px !important;
        color: white;
        // background-color: rgb(233, 24, 24);
        font-weight:900;
        font-style:normal;
        font-variant:normal;
        height: 50px;
        margin: 0 auto;
        text-align:center;
        padding-top: 15px;
    }
    li {
      text-align: center;
      border-bottom: 1px solid lightgrey;
      transition: transform 2s ease-in-out; 
      line-height: 29.7px;
      padding-bottom: 10px;
      padding-top: 10px;
    }
    li span {
      position: absolute;
      right: 4px;
      padding-right: 20px;
    }
    li:hover{
      color: rgb(233, 24, 24);
      
    }
    .navbar-collapse{
      overflow: auto;
      background-color: #fff;
      position: fixed;
      top:0px;
      right: 0px;
      width: 320px;
      height: 100%;
      
    }
    .sub2, .sub3, .sub4 {
      background-color: #DDDDDD;
    }
    .close-icon {
      width: 30px;
      height: 30px;
      margin: 10px 20px;
    }
    
`;

export const Linkbottom = styled.div`
    ul {
        margin:0;
        vertical-align: middle;
        margin-top: 15px;
        text-align: center;
    }
    padding-left: 15px;
    justify-content: space-between;
    width: 100%;
    .nav-items-group {
        min-width: 600px;
        height:40px;
    }
    
    .default-font-style, .default-font-style1, .sub-default-font-style{
        font-family: Montserrat, sans-serif;
        font-size:16px !important;
        color: rgb(102, 102, 102);
        font-weight:900;
        font-style:normal;
        font-variant:normal;
    }
    .menu-items:hover .default-font-style {
        color: rgb(233, 24,24)
    }
    a {
        text-decoration: none;
        color: black;
        padding: 0 15px;
    }
    .down-arrow {
        color: rgb(102, 102, 102);
        margin-left: 3px;
        width: 21px;
        height: 21px;
        transition: transform .2s ease-in-out;
    }
    
    .default-nav-item:hover .down-arrow{
        transform: rotate(180deg);
        
    }
    .default-nav-item:hover .default-font-style1{
        color: rgb(233,24,24)
    }
    .default-nav-item {
       
       cursor: pointer;
    }
    .sub-items-div:hover .sub-default-font-style {
         color: rgb(233,24,24)
    }
    .diff-nav-item {
        width: 70px;
        margin: 0 auto;
        font-family: Montserrat, sans-serif;
        font-size:16px !important;
        color: rgb(0, 0, 0);
        font-weight:900;
        font-style:normal;
        font-variant:normal;
        text-transform:uppercase;
        padding: 10px;
        cursor:pointer;
    }   
    .diff-nav-item:hover {
        
        // background-color: rgb(198,25,19);
    } 
    .sub-dropping {
        justify-content: space-between;
    }
    .red-button {
       padding-right: 50px;
    }
    .GetStart-font-style {
        color: white !important;
        margin: 0 auto;
    }
    .flex-div {
        display: flex;
        width: 100%;

    }
    .dropdown2 {
      position: relative;
      display: inline-block;
    }
    
    .dropdown-content {
      text-align: left;
      display: none;
      position: absolute;
      top: 40px;
      border-radius: 5px 5px;
      background-color: #ffffff;
      min-width: 360px;
      z-index: 1;
      box-shadow: 2px 2px 2px 2px rgba(68,68,68,0.3);

    }
    .first-dropdown-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .last-dropdown-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      border-bottom: 1px solid lightgrey;
      display: block;
    }
    
    .dropdown-content a:hover {background-color: #ddd;}
    
    .dropdown2:hover .dropdown-content {display: block;}
    
    .red-arrow-box {
        width: 30px;
        float: right;
    }
 
    .left-arrow {
        color: rgb(102, 102, 102);
        width: 21px;
        height: 21px;
        transition: transform .2s ease-in-out;
    }
    .sub-dropdown:hover .left-arrow {
        transform: rotate(180deg);
    }
    .sub-dropdown-content {
       text-align: left;
       display: none;
       position: absolute;
       left:360px;
       margin-top: -50px;
       border-radius: 5px 5px;
       background-color: #ffffff;
       min-width: 360px;
       z-index: 1;
       box-shadow: 2px 2px 2px 2px rgba(68,68,68,0.3);
    }
    .sub-dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    .sub-dropdown:hover .sub-dropdown-content {display: block;}
    .dropdown2:hover svg path,
    .dropdown2:hover {
        fill:red;
        color:red;
    }
    
    
    @media screen and (max-width: 1060px) {
        display: none;
        .diff-nav-item {
            display:none!important;
        }

    }
`;