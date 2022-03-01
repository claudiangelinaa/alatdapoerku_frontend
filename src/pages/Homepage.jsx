import React from 'react'
// import Carousel from '../components/Carousel'
import '../supports/Homepage.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ModalFitur from '../components/ModalFitur';
import Navbar from '../components/Navbar';

export default function Homepage() {
    const settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay:true,
        swipeToSlide: true,
      };
    return (
        <div>
            <Navbar />
            <ModalFitur />
            {/* jumbotron */}
            <div style={{height: '100vh', backgroundColor:'whitesmoke'}}>
                <div className="container py-5" >
                    <div style={{height: '90vh',  borderRadius: '25px' }}>
                        <div className="container">
                            {/* jumbotron */}
                            <div className="d-flex jumbotron-landing-page">

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5">
                            <h3>
                                Kategori Pilihan
                            </h3>
                        </div>
                        <div className="d-flex justify-content-between col-6">
                            <div class="card" style={{width: '16rem'}}>
                                <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text text-center">Utensils</p>
                                </div>
                            </div>
                            <div class="card" style={{width: '16rem'}}>
                                <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-13723207/kurumi_kurumi_multifunction_rice_cooker_-with_low_carb_function-_full01_ecqadeiv.jpg" alt="" />
                                <div class="card-body">
                                    <p class="card-text text-center">Rice Cooker</p>
                                </div>
                            </div>
                            <div class="card" style={{width: '16rem'}}>
                                <img src="https://www.crosscraft.com.mt/wp-content/uploads/2021/04/Philips-Essential-Air-Fryer-HD9252-90-.jpg" alt="" />
                                <div class="card-body">
                                    <p class="card-text text-center">Air Fryer</p>
                                </div>
                            </div>
                            <div class="card" style={{width: '16rem'}}>
                                <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/12/31/2f73d27f-7a7f-480e-9cbb-aa2071cfe3d5.jpg" alt=""/>
                                <div class="card-body">
                                    <p class="card-text text-center">Wok</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-5">
                            <h3>
                                Flash Sale
                            </h3>
                            <Slider {...settings}>
                                <div className="d-flex">
                                    <div class="card" style={{width: '16rem'}}>
                                        <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/12/31/2f73d27f-7a7f-480e-9cbb-aa2071cfe3d5.jpg" alt=""/>
                                        <div class="card-body">
                                            <p class="card-text text-start">Wok</p>
                                            <p className="card-text text-start"><del>125.000</del>120.000</p>
                                        </div>
                                    </div>
                                    <div class="card" style={{width: '16rem'}}>
                                        <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/12/31/2f73d27f-7a7f-480e-9cbb-aa2071cfe3d5.jpg" alt=""/>
                                        <div class="card-body">
                                            <p class="card-text text-start">Wok</p>
                                            <p className="card-text text-start"><del>150.000</del>120.000</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
