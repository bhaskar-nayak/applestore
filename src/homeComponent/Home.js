import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import '../styles/Home.css';
function Home(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const productData=[
        {
            id:1,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/mac_9dbb5d65-8ce8-4515-b0ea-29624f76c18b.webp?v=1698727889",
            name:"mac",
            price:"₹ 1,695.00",
        },
        {
            id:2,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/iPad_Cellular_Family_Lineup_Screen__100x60_4ed39cb7-5e46-4a75-995b-46c497f5745b.png?v=1692277976",
            name:"ipad",
            price:"₹ 32,030",
        },
        {
            id:3,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/iPhone-LOB_613afa74-fdab-4f01-ae5b-89ab18301f1a.png?v=1694593053",
            name:"iphone",
            price:"₹ 80,001",
        },
        {
            id:4,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/Apple-Watch-LOB.png?v=1694593052",
            name:"watch",
            price:"₹45,000",
        },
        {
            id:5,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/Frame_1526.webp?v=1692278517",
            name:"music",
            price:"₹19,000",
        },
        {
            id:6,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/Frame_1527.webp?v=1692278579",
            name:"Tv&remote",
            price:"₹ 1,20,950",
        },
        {
            id:7,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/Accessories-LOB.png?v=1694593053",
            name:"accessaries",
            price:"₹ 1,695.00",
        },
      ]
      const productData2=[
        {
            id:1,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/MacBook_Pro_14-in_M3_Pro_Silver_Pure_Front_MacBook_Pro_16-in_M3_Pro_Space_Black_Pure_Front_2-up_Screen__USEN_x172_95cad041-db86-48f3-9247-8d4e09158c50_x172.png?v=1698728081",
            name:"MacBook Pro",
            price:"₹ 1,695.00",
            description:"Mind Blowing and Head turing"
        },
        {
            id:2,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/iMac_M3_4-ports_Blue_PDP_Image_Position_1__en-US_x172_b703c520-192a-4a44-98df-ab8c78c38ec4_x172.jpg?v=1698728091",
            name:"I MAC",
            price:"₹ 1,6,95",
            description:"Packed with More Joy"
        },
            {
                id:3,
                imgScr:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_iPhone_15_Family_Screen__USEN_x172.png?v=1694580040",
                name:"Iphone 15",
                price:"₹ 79,000",
                description:"Beutiful.Durable and Phenomenal"
            },
            {
                id:4,
                imgScr:"https://www.imagineonline.store/cdn/shop/files/Apple_Watch_Series_9_GPS_Apple_Watch_SE_GPS_Family_2-up_Screen__USEN_x172.png?v=1694580029",
                name:"Watch Series 9",
                price:"₹ 41,000",
                description:"Smater.Brighter and Mightier"
            },
        {
            id:5,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/Apple_Watch_Ultra_2_Cellular_49mm_3-Up_Screen__USEN_x172.png?v=1694580021",
            name:"Watch Series 2",
            price:"29,000",
            description:"Next level Adventure"
        },
        {
            id:6,
            imgScr:"https://www.imagineonline.store/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-6__en-US_x172_58869098-f9af-4aa8-bf4a-56f4a35a4251_x172.webp?v=1694775197",
            name:"Air Pods Pro 2",
            price:"23,000",
            description:"Chargers"

        }
      ]
      const productData3=[
        {
          id:1,
          name:"Service",
          offers:"Pickup and Delivery",
          description:"Online Order and Get Fast Delivary"
        },
        {
          id:2,
          name:"Speacial Offers",
          offers:"Exclusive Deals Online",
          description:"Check Our Exclusive Offers"
        },
        {
          id:3,
          name:"Financing",
          offers:"Get Special Financing",
          description:"Cashback and Offers"
        },
        {
          id:4,
          name:"Classes",
          offers:"Book and Appointment",
          description:"Online Order and Get Fast Delivary"
        }
      ]
      const productData4 =[
        {
          id:1,
          imgScr:'https://www.imagineonline.store/cdn/shop/files/P1470931_20310d41-20b9-4e3d-a6ba-66cac6872960_x172.jpg?v=1692340205',
          name:"Find A Store",
          content:"Shop The Latest Apple Products",
          description:"More Ways To Shop, Find An Apple Reseller ",

        },
        {
          id:2,
          imgScr:'https://www.imagineonline.store/cdn/shop/files/imgpsh_fullsize_anim_a63dc73a-2485-48a5-a95c-be1f2029d01c_x172.jpg?v=1692340486',
          name:"About Imagine",
          content:"First Apple best Premium Reseller",
          description:"More Ways To Shop, Find An Apple Reseller ",

        },
        {
          id:3,
          imgScr:'https://www.imagineonline.store/cdn/shop/files/imgpsh_fullsize_anim_ab263c70-15c4-46be-a895-785aae7bed1a_x172.jpg?v=1692340573',
          name:"Student Offers",
          content:"Your Brilliance With Mac and Iphones Deals",
          description:"More Ways To Shop, Find An Apple Reseller ",

        },
        {
          id:4,
          imgScr:'https://www.imagineonline.store/cdn/shop/files/imgpsh_fullsize_anim_4a2e52e4-cea9-4410-b43d-401baa98a976_x172.jpg?v=1692340753',
          name:"Customer Support",
          content:"Connect TO  An Experts",
          description:"More Ways To Shop, Find An Apple Reseller ",

        }
      ]
      const productData5 =[
        {
          id:1,
          imgScr:"https://www.imagineonline.store/cdn/shop/files/imgpsh_fullsize_anim_7730f519-9f40-4511-97d4-6b3173c5c28d_1.png?v=1691489377",
          title:"Why Imagine",
          description:"With more than a decade's experience in Premium Retail, we are your local Apple Expert.",
          button:"Consult the Expert"
        },
        {
          id:2,
          imgScr:"https://www.imagineonline.store/cdn/shop/files/P1470931_0566610f-81fc-4470-8157-1111b361dcfe_750x.jpg?v=1691489657",
          title:"Store Near You",
          description:"Imagine staff are professionally trained and can provide expert advice on everything Apple.",
          button:"Connect"
        }
      ]
    return(
        <> 
       <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner my-4">
    <div class="carousel-item active" data-bs-interval="500">
      <img className="img-fluid" src="https://www.imagineonline.store/cdn/shop/files/iPhone15_Web_fd3d2cbe-ef26-4cfd-8514-9c27bd8f1927_2000x.jpg?v=1707915277" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img className="img-fluid" src="https://www.imagineonline.store/cdn/shop/files/Watch_9_Web_4950d25f-b94d-4162-9467-f4918d50357c_2000x.jpg?v=1707822948" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="img-fluid" src="https://www.imagineonline.store/cdn/shop/files/iPhone14_Web_26673b14-2179-4c3f-ae57-788c31a9a181_2000x.jpg?v=1707915277" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="img-fluid" src="https://www.imagineonline.store/cdn/shop/files/AirPods_Pro_Web_c65f76c2-3ab8-42cb-902a-12fdab325c8e_2000x.jpg?v=1707822948" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<hr/>
    {/* here i created responsive carousel with card and card-body using bootstrap */}
    <div className="container-fluid">
      <div className="row">
          <div className="carousel-wrapper my-4">
        <Carousel responsive={responsive}>
          {productData.map(item =>(
             <div className='card border-0 mx-4 mb-3' key={item.id} style={{width:120}}>
        <Link to={"/Products"}><img className='card-img-top  img-fluid' src={item.imgScr} alt='product image' style={{ height: '100px', objectFit: 'cover' }}/></Link>
        <div className='card-body' style={{ height: '100%' }}>
          <h5 className="card-name">{item.name}</h5>
          <p className='card-text'>{item.price}</p>
        </div>
      </div>
          ))} 
          </Carousel>
        </div>
        <hr/>
      </div>
        </div>
        <div className="carousel-wrapper my-4">
        <Carousel responsive={responsive}>
          {productData2.map(item =>(
             <div className='card border-0 mx-4 mb-3' key={item.id} style={{width:260}}>
        <Link to={"/Products"}><img className='card-img-top  img-fluid' src={item.imgScr} alt='product image' style={{ height: '200px', objectFit: 'conatain' }}/></Link>
        <div className='card-body cardsbody' style={{ height: '100%' }}>
          <h5 className="card-name">{item.name}</h5>
          <p className='card-text'>{item.price}</p>
          <p className="card-text">{item.description}</p>
        </div>
      </div>
          ))} 
          </Carousel>
        </div>
        <hr/>
        <div className="container">
          <div className="row">
            {/* <div className="col-sm-3 col-md-6 mb-4"> */}
            <p className="paragraph">Discover services and more</p>
            </div>
          </div>
        {/* </div> */}
         <div className="container d-flex my-3">
         <div className="row">
          {productData3.map(item =>(
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"key={item.id}>
            <div className="card-body cardsbodys mx-4 mb-3" style={{height: '100%'}}>
              <h5 className="card-name" style={{ color: item.id === 2 ? 'blue' : (item.id === 3 ? 'red' : 'default_title_color') }}>{item.name}</h5>
              <p className="card-text"style={{color: item.id === 2 ? 'blue' : (item.id === 3 ? 'red' : 'default_title_color')}}>{item.offers}</p>
              <p className="card-text">{item.description}</p>
            </div>
            </div>
          ))}
        </div>
        </div>
        <hr/>
        <div className="container mt-4">
      <div className="row">
        <div className="col-sm-8">
          <div className="text-center text-above-image">
            <h4 className="name">MacBook Pro</h4>
            <p className="contents">mind blowing and turing</p>
            <p className="fromprice">From 1,99,000</p>
            <button className="btn btn-primary">Buy</button>
            <Link to={"/Products"}>
            <img
              className="img-fluid first"
              src="https://www.imagineonline.store/cdn/shop/files/MacBook_Pro_16_in_M3_Pro_Max_Space_Black_PDP_Image_Position-1__en-US_550x_4e110bd6-b7e8-43c2-ad9b-379f0cff4d5d_550x.webp?v=1698735924"
              alt="product image"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </Link>
          </div>
        </div>
        <div className="col-sm-4 mt-5">
  <div className="row">
    <Link to={"/Products"} className="flex-container col-sm-12 mb-2 margintopforsecond" style={{ textDecoration: 'none' }}>
      <img
        className="second me-4"
        src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_Pure_Back_iPhone_15_Blue_Pure_Front_2up_Screen__USEN_550x_071af77b-89a2-4c0a-86b9-5d8d9322b69e_550x.webp?v=1694763438"
        alt="second image"
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
      <div className="text-container m-0 p-0">
        <h4 className="title2">MacBook Pro</h4>
        <p className="content2">mind-blowing and turing</p>
        <p className="fromprice2">From 1,99,000</p>
        <button className="btn btn-primary">Buy</button>
      </div>
    </Link>
  </div>
  <div className="col-sm-12 mt-3">
  <Link to={"/Products"} className="flex-container flexcontainer">
    <div className="image-container imagcontainer">
      <img
        className="last"
        src="https://www.imagineonline.store/cdn/shop/files/Apple_Watch_Series_9_GPS_41mm_PRODUCTRED_Aluminum_PRODUCTRED_Sport_Band_PDP_Image_Position-1__en-US_550x_a33178f8-619c-41b0-a875-2c93d68ad690_550x.webp?v=1694619419"
        alt="last image"
        style={{ width: '370px', objectFit: 'cover', height:'100%' }}
      />
    </div>
    <div className="text-container mx-2 textcontainer">
      <h4 className="name">MacBook Pro</h4>
      <p>mind blowing and turing</p>
      <p>From 1,99,000</p>
      <button className="btn btn-primary">Buy</button>
    </div>
  </Link>
</div>
</div>
        </div>
      </div>
      <hr/>
      <div className="container">
        <p className="paragraph" style={{fontSize:'30px'}}>View in-store classes and support.</p>
      </div>
      <div className="container d-flex my-3">
        <div className="row">
          {productData4.map(item => (
             <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 cardshadow">
              <div className='card border-0 mx-4 mb-3' key={item.id} style={{width:220}}>
              <Link to={"/Products"}><img className='card-img-top  img-fluid' src={item.imgScr} alt='product image' style={{ height: '200px', objectFit: 'conatain' }}/></Link>
              <div className='card-body' style={{ height: '100%' }}>
          <h5 className="card-name">{item.name}</h5>
          <p className='card-text'>{item.content}</p>
          <p className="card-text">{item.description}</p>
        </div>
                </div>
              </div>
          ))}
        </div>
      </div>
      <hr/>
      {/* <div className="container-fluid">
        {productData5.map((item, index) =>(
          <div className="row p-4 border">
            {index % 2 === 0 ? (
              <React.Fragment> 
                  <div className="col-sm-9">
                    <div className="text-container">
                    <div className="card-body" style={{height:"100%"}}>
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-primary">{item.button}</button>
                    </div>
                    </div>
                  </div>
                  <div className="col-sm-3" >  
                <div className="image-container"> 
                <img className="img-fluid" src={item.imgScr} alt="image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
                  </div>
              </React.Fragment>
            ):(
              <React.Fragment>
                <div className="col-sm-3">
                  <img className="img-fluid" src={item.imgScr} alt="image"/>
                </div>
                <div className="col-sm-9 text-center">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <button className="btn btn-primary">{item.button}</button>
                </div>
              </React.Fragment>
            )}
            </div>
        ))}
      </div> */}
      <div className="container-fluid">
  {productData5.map((item, index) => (
    <div className={`row p-4 border ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="col-sm-6 d-flex alignitems">
        <div className="text-container" style={{height:'100%', backgroundColor:'grey', padding:'20px',paddingTop:"100px"}}>
          <div className="card-body text-center">
            <h4 className="card-title">{item.title}</h4>
            <p className="card-text">{item.description}</p>
            <button className="btn btn-primary">{item.button}</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 d-flex align-items-center">
        <div className="image-container">
          <img className="img-fluid" src={item.imgScr} alt="image" style={{ width: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  ))}
</div>
     <hr/>
        </>
    )
    
}
export default Home;
