import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import ColExplain1 from 'src/components/ColExplain1';

const SaleSystem = (props) => {
  return (
    <S.Bg>
        <TopImg img="SalesSystem1" letter="Point Of Sale Systems" />
        <S.MainContent>
            <div>
                <p>We offer several different point of sale systems each with their own feature sets. Take a look into our offerings below. Our expert customer service representatives are happy to answer any questions you have and help you to understand your options. Feel free to call in for assistance – <a>(877) 517-4678 opt 1</a> – or fill out the form at the bottom of the page and we will get in touch.</p>
            </div>
            <div className="EMVMachine" style={{marginTop:'30px'}}>
                <div>
                    <ColExplain1 img="SalesSystem2" header="Clover Point Of Sale" letter="Manage your business with one complete system. From inventory to managing employees and everything in-between, Clover Point-of-Sale makes it easy. Whether you want a full desktop POS or a mobile handheld unit, Clover has you covered." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="SalesSystem3" header="Vital Point Of Sale" letter="Vital point of sale is a family of flexible, customizable point of sale solutions that help you run your business. Vital point of sale consists of three products to support all business environments and help meet a variety of point of sale needs." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="SalesSystem4" header="SwipeSimple Point Of Sale" letter="Swipesimple offers affordable, high-quality tablet and smartphone point of sale systems. Use a tablet with their register printer combo for a countertop solution. Use the mobile swiper with a smartphone or tablet on the go! No worries, everything syncs together seamlessly." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="SalesSystem5" header="Bonsai Point Of Sale" letter="Bonsai Point of Sale was created to offer high functionality sales systems without the heavy price tag. With Bonsai you get tools from online ordering to real-time mobile business analytics on your phone. Updates are free and automatic, keeping you on the cutting edge of functionality and security." />
                </div>
            </div>
        </S.MainContent>
        <S.endContent>
            <div style={{backgroundColor:'rgba(0,0,0,0.6)',padding:'70px 0'}}>
                <div className="row">
                    <div className="left col-lg-5">
                        <img src={Images.LogoWhite} />
                        <span>Free Consultations!</span>
                    </div>
                    <div className="right col-lg-7">
                        <SubmitForm />
                    </div>
                </div>
            </div>
        </S.endContent>
    </S.Bg>
  );
};

export default SaleSystem;