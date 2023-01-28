import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { getAllCategory } from '@/apiService/ApiService'


export default function Home({listCategory}) {
  return (
    <>
      <Head>
        <title>Manga chy</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
      </Head>
      <main >
        {/* <!-- ***** Header Area Start ***** --> */}
        <header id="top" className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* <!-- ***** Logo Start ***** --> */}
                  <a href="/" className="logo">
                    <h4>Manga<span>chy</span></h4>
                  </a>
                  {/* <!-- ***** Logo End ***** --> */}
                  {/* <!-- ***** Menu Start ***** --> */}
                  <ul className="nav">
                    {
                      listCategory.map(category=>{
                        return <li className="scroll-to-section"><a href="">{category.name}</a></li>
                      })
                    }
                    <li className="scroll-to-section"><a href="">Top trending</a></li>
                    <li className="scroll-to-section"><a href="">Build coin</a></li>
                    <li className="scroll-to-section">
                      <div className="input-group">
                        <div className="form-outline">
                          <input type="search" id="form1" className="form-control"/>
                        </div>
                        <button type="button" className="btn btn-primary">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                  <a className='menu-trigger'>
                    <span>Menu</span>
                  </a>
                  {/* <!-- ***** Menu End ***** --> */}
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- ***** Header Area End ***** --> */}

        {/* <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 align-self-center">
                    <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                      <h6>Welcome to Manga Chy</h6>
                      <h2>Let's <em>Enjoy</em> &amp; <span>Manga</span></h2>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                      <img src="assets/images/banner-right-image.png" alt="team meeting" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div  className="our-portfolio section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                  <h2><em>Hot </em><span>Comic</span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <a href="#">
                  <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div className="hidden-content">
                      <h4>SEO Analysis</h4>
                      <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                    </div>
                    <div className="showed-content">
                      <img src="assets/images/portfolio-image.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6">
                <a href="#">
                  <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                    <div className="hidden-content">
                      <h4>Website Reporting</h4>
                      <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                    </div>
                    <div className="showed-content">
                      <img src="assets/images/portfolio-image.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6">
                <a href="#">
                  <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="hidden-content">
                      <h4>Performance Tests</h4>
                      <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                    </div>
                    <div className="showed-content">
                      <img src="assets/images/portfolio-image.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6">
                <a href="#">
                  <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                    <div className="hidden-content">
                      <h4>Data Analysis</h4>
                      <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                    </div>
                    <div className="showed-content">
                      <img src="assets/images/portfolio-image.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="our-portfolio section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                  <h2><em>New update </em><span>Comic</span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <a href="#">
                  <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div className="hidden-content">
                      <h4>SEO Analysis</h4>
                      <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                    </div>
                    <div className="showed-content">
                      <img src="assets/images/portfolio-image.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6">
                <a href="#">
                  <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                    <div className="hidden-content">
                      <h4>Website Reporting</h4>
                      <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                    </div>
                    <div className="showed-content">
                      <img src="assets/images/portfolio-image.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6">
                <a href="#">
                  <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="hidden-content">
                      <h4>Performance Tests</h4>
                      <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                    </div>
                    <div className="showed-content">
                      <img src="assets/images/portfolio-image.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6">
                <a href="#">
                  <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                    <div className="hidden-content">
                      <h4>Data Analysis</h4>
                      <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                    </div>
                    <div className="showed-content">
                      <img src="assets/images/portfolio-image.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
                <p>© Copyright 2023 <a rel="nofollow" href="https://www.facebook.com/hongdatchy">Manga Chy</a>. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Scripts --> */}



      </main>
    </>
  )
}

export async function getServerSideProps() {
  let listCategory = await getAllCategory()
  // console.log(rs);
  return {
      props: {
          listCategory
      }
  }
}