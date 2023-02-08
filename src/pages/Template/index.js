import React from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";
import * as S from "./styled";

const Template = (props) => {

  return (
    <S.Container>
      {/* <Header /> */}
      <>{props.children}</>
      {/* <Footer /> */}
    </S.Container>
  );
}


const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Template);