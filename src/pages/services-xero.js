import React from 'react'
import Navbar from './components/Navbar'
import ServicesText from './components/ServicesText'
import Image from 'next/image'
import ServiceCardLeft from './components/ServiceCardLeft'
import styles from '../styles/services.module.css'
import ServiceCardRight from './components/ServiceCardRight'
import midCard from '../../public/assests/News/new.png';
import { Box, Grid, Typography } from '@mui/material'
import logo1 from '../../public/assests/News/logo1.png'
import img1 from '../../public/assests/News/image033.jpg'
import img11 from '../../public/assests/News/image038.jpg'
import img12 from '../../public/assests/News/image023.png'
import img122 from '../../public/assests/News/image017.png'
import img123 from '../../public/assests/News/image019.png'
import img124 from '../../public/assests/News/image011.jpg'
import img125 from '../../public/assests/News/image013.png'
import img126 from '../../public/assests/News/image029.jpg'
import img127 from '../../public/assests/News/image030.jpg'
import img1275 from '../../public/assests/News/image027.png'
import img12756 from '../../public/assests/team/image005.jpg'




import logo2 from '../../public/assests/News/logo2.png'
import Dext from '../../public/assests/News/dext.png'
import scroll from '../../public/assests/News/scroll.svg'
import UpperFooter from './components/UpperFooter'
import rightSpike from '../../public/assests/News/Serviceright.png'
import leftSpike from '../../public/assests/News/Serviceleft.png'
import SF1 from '../../public/assests/News/SF1.svg';

import SF2 from '../../public/assests/News/SF2.svg';
import SF3 from '../../public/assests/News/SF3.svg';
import Footer from './components/Footer'
import Scheduled from '../../public/assests/ScheduleCopy.png'
import ScheduledMobile from '../../public/assests/ScheduleCopyMobile.png'
import Link from 'next/link'
export default function services() {
    return (
        <>
            <Navbar />
            <div className={styles['main']}>
                <Image src={leftSpike} className={`${styles['leftSpike']} rotation`} />
                <Image src={rightSpike} className={styles['rightSpike']} />
                <Image className={styles['SF1']} src={SF1} />
                <Image className={styles['SF2']} src={SF2} />
                <Image className={styles['SF3']} src={SF3} />

                <div className={styles['top2']} >
                    {/* <div className={styles['topButtons']}>
                        <div className={styles['topButtonsText']}>  OUR SERVICES  </div>
                        <div className={styles['topButton']}><Link href='/services-accounting/' style={{ textDecoration: 'none', color: '#DDDDDD' }} > ACCOUNTING </Link> </div>
                        <div className={styles['topButton']}><Link href='/services-onlinebookkeepr' style={{ textDecoration: 'none', color: '#DDDDDD' }} >ONLINE BOOKKEEPER </Link></div>
                        <div className={styles['topButton']}><Link href='/services-advisory' style={{ textDecoration: 'none', color: '#DDDDDD' }} >ADVISORY </Link></div>
                    </div> */}
                    <div className={styles['topHead']}>
                        Xero Migration,<br></br> Implementation <br></br> and Training

                    </div>
                    <div className={styles['topText']} style={{ maxWidth: '780px', margin: '0 auto', padding: '1rem', }}>
                        Welcome to the future of accounting with Xero, cloud accounting
                        software designed to make managing your business finances
                        easier than ever. We offer seamless migration, setup, and
                        training to help you get the most out of Xero, allowing you
                        to focus on growing your business.


                    </div>
                    <div style={{ maxWidth: "700px", marginTop: "50px", textAlign: "center" }}>
                        <Image
                            src={img12756}
                            className={styles['schedule-sphere']}
                            alt="Staff Image"
                            style={{
                                borderRadius: "15px",
                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s ease-in-out",
                                cursor: "pointer"
                            }}

                        />
                    </div>

                    <div className={styles['topHead5']}>
                        Our Xero Services


                    </div>
                    <div className={styles['topText']} style={{ maxWidth: '780px', margin: '0 auto', padding: '1rem', }}>
                        At Borgo we believe that Xero is the best cloud accounting software
                        for small business and we’re proud to be a Xero Partner.
                        All of our accounting and bookkeeping staff are Xero Certified
                        and our Managing Director sits on the Xero Partner Advisory
                        Council (XPAC) for Ireland so you can be assured that you are
                        in good hands.


                        <p>At Borgo we can handle every step of your Xero journey:
                        </p>
                    </div>
                    <div>
                        <ul className={styles['topText2']}>
                            <li>Migration: Move your data to Xero smoothly with our expert team.
                            </li>
                            <li>Implementation: We set up Xero to meet your business’s unique needs</li>
                            <li>Training: Learn to use Xero with our tailored training sessions—remote or in-person.

                            </li>
                            <li>Ongoing Support: Get continuous support to ensure Xero works perfectly for your business</li>

                        </ul>

                    </div>


                    <div >
                        <Image className={styles['scroll']} src={scroll} />
                    </div>
                </div>


            </div >



            <div className={styles['midSection1']} style={{ padding: '10px 20px' }}>
                <div style={{ maxWidth: '960px', margin: '0 auto', }}>
                    <h2 className={styles["mb55"]} style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>Benefits of Using Xero
                    </h2>

                    <div className={styles['midSectionCard2']} style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                        {[
                            {
                                title: 'Easy to Use',
                                description: ' Non-accountants love how simple Xero is to navigate.',
                                icon: '🏦'
                            },
                            {
                                title: 'Real-Time Data',
                                description: 'View your financials anytime, with up-to-date information.',
                                icon: '🤝'
                            },
                            {
                                title: 'Collaboration',
                                description: ' Share access with your team or accountant for seamless collaboration.',
                                icon: '🔌'
                            },
                            {
                                title: 'Flexible Add-Ons',
                                description: ' Customize Xero with hundreds of integrations to suit your business',
                                icon: '🔌'
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                style={{

                                    padding: '5px',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',

                                    transition: 'transform 0.3s ease',
                                }}
                            // className="feature-card"
                            >
                                {/* <div style={{ fontSize: '30px', color: '#3498db' }}>{feature.icon}</div> */}
                                <div>

                                    <p style={{ fontSize: '24px', color: '#fff' }}>
                                        <span style={{ marginRight: "15px", fontWeight: "bolder" }}>{feature.title}:</span>
                                        {feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className={styles['midSection1']} style={{ padding: '10px 20px' }}>
                <div style={{ maxWidth: '960px', margin: '0 auto', }}>
                    <h2 className={styles["mb55"]} style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '40px' }}>Top Xero Features</h2>


                    <div className={styles['midSectionCard2']} style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                        {[
                            {
                                title: 'Bank Feeds',
                                description: 'Connect your bank account directly to Xero to import your bank information. If your bank doesn’t offer this service, there is a simple bank import function.',
                                icon: '🏦'
                            },
                            {
                                title: 'Collaboration',
                                description: 'Share access with your team or accountant for seamless collaboration.',
                                icon: '🤝'
                            },
                            {
                                title: 'Flexible Add-Ons',
                                description: 'Customize Xero with hundreds of integrations to suit your business.',
                                icon: '🔌'
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                style={{

                                    padding: '5px',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',

                                    transition: 'transform 0.3s ease',
                                }}
                            // className="feature-card"
                            >
                                {/* <div style={{ fontSize: '30px', color: '#3498db' }}>{feature.icon}</div> */}
                                <div>

                                    <p style={{ fontSize: '24px', color: '#fff' }}>
                                        <span style={{ marginRight: "15px", fontWeight: "bolder" }}>{feature.title}:</span>
                                        {feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>






            <Box className="div-center position-relative">

                <div className={styles["schedule"]}>
                    <Typography style={{ marginTop: "-18px" }} className="weight-700 font-60 font-40-sm width-100 width-50-sm font-mulish line-height-72 line-height-48-sm">
                        Ready to switch
                    </Typography>
                    <Typography className="weight-600 font-24 width-80 width-100-md font-mulish line-height-36">
                        Ready to switch to Xero? We’ll make the transition painless and provide allthe support you need along the way. Contact us for a customized quote today!
                    </Typography>
                    <div className="box-inside" style={{ marginTop: "10px" }}>
                        <Typography
                            className="read-more color-light-grey font-mulish"
                            style={{ width: "158px", height: "36px", paddingInline: "14px", paddingBlock: "12px" }}
                        >
                            <a
                                href="https://calendly.com/d/z84-783-bw8/discovery-call" target='_blank' style={{ textDecoration: "none", color: "#DDDDDD" }}
                            >
                                {" "}
                                Schedule a call{" "}
                            </a>
                        </Typography>
                    </div>
                </div>
            </Box>


            <div className={styles['midSection22']}>
                <div >
                    <h5 className={styles["mb55"]}>Some of the other tools we use

                    </h5>
                    <div className={styles['klomain']}>
                        <div className={styles['klo1']}>
                            <p className={styles['sectionTitle']}>Purchases and Expenses:</p>
                            <div className={styles['klo2']}>
                                <div className={styles['imageContainer']}>
                                    {/* <h4 className={styles['imageTitle']}>Hubdoc</h4> */}
                                    <Image src={img126} className={styles['logo22']} />
                                </div>
                                <div className={styles['imageContainer']}>
                                    {/* <h4 className={styles['imageTitle']}>Dext</h4> */}
                                    <Image src={img127} className={styles['logo22']} />
                                </div>
                            </div>
                        </div>

                        <div className={styles['klo1']}>
                            <p className={styles['sectionTitle']}>Sales and Payments:</p>
                            <div className={styles['klo2']}>
                                <div className={styles['imageContainer']}>
                                    {/* <h4 className={styles['imageTitle']}>Chaser</h4> */}
                                    <Image src={img124} className={styles['logo22']} />
                                </div>
                                <div className={styles['imageContainer']}>
                                    {/* <h4 className={styles['imageTitle']}>GoCardless</h4> */}
                                    <Image src={img125} className={styles['logo22']} />
                                </div>
                            </div>
                        </div>

                        <div className={styles['klo1']}>
                            <p className={styles['sectionTitle']}>Reporting</p>
                            <div className={styles['klo2']}>
                                <div className={styles['imageContainer']}>
                                    {/* <h4 className={styles['imageTitle']}>Syft</h4> */}
                                    <Image src={img122} className={styles['logo22']} />
                                </div>
                                <div className={styles['imageContainer']}>
                                    {/* <h4 className={styles['imageTitle']}>Bright Accounts Production  </h4> */}
                                    <Image src={img123} className={styles['logo22']} />
                                </div>
                            </div>
                        </div>

                        <div className={styles['klo1']}>
                            <p className={styles['sectionTitle']}>Practice Management</p>
                            <div className={styles['klo2']}>
                                <div className={styles['imageContainer']}>
                                    {/* <h4 className={styles['imageTitle']}>Karbon</h4> */}
                                    <Image src={img11} className={styles['logo22']} />
                                </div>
                                <div className={styles['imageContainer']}>
                                    {/* <h4 className={styles['imageTitle']}>MS Office</h4> */}
                                    <Image src={img12} className={styles['logo22']} />
                                </div>
                            </div>
                        </div>

                        <div className={styles['klo1']}>
                            <p className={styles['sectionTitle']}>Finance</p>
                            <div className={styles['klo2']}>
                                <div className={styles['imageContainer']}>
                                    {/* <h4 className={styles['imageTitle']}>Swoop</h4> */}
                                    <Image src={img1} className={styles['logo22']} />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>





            <Box className="div-center position-relative">

                <div className={styles["schedule"]}>
                    <Typography style={{ marginTop: "-18px" }} className="weight-700 font-60 font-40-sm width-100 width-50-sm font-mulish line-height-72 line-height-48-sm">
                        Want to talk
                    </Typography>
                    <Typography className="weight-600 font-24 width-100 width-100-md font-mulish line-height-36">
                        Want to talk to us about your App Stack? We have team members who can review

                        your processes and apps. If we can’t help directly, we’ll help find the right solution for you.
                    </Typography>
                    <div className="box-inside" style={{ marginTop: "10px", }}>
                        <Typography
                            className="read-more color-light-grey font-mulish"
                            style={{ width: "158px", height: "36px", paddingInline: "14px", paddingBlock: "12px" }}
                        >
                            <a
                                href="https://calendly.com/d/z84-783-bw8/discovery-call" target='_blank' style={{ textDecoration: "none", color: "#DDDDDD" }}
                            >
                                {" "}
                                Schedule a call{" "}
                            </a>
                        </Typography>
                    </div>
                </div>
            </Box>


            <div className={styles['midSection2']}>
                <div >
                    <div className={styles['midSectionHead']}>The Software</div>
                    <div style={{ color: "#fff", marginBottom: "30px", marginTop: "30px", fontSize: "24px" }}>At Borgo we only use software that we trust and are proud to use</div>

                    <Grid className={styles['midSectionCard']}>
                        <Grid className={styles['part1']}>

                            <Image src={midCard} className={styles['midCard']} />
                            <Image src={logo2} className={styles['logo2']} />

                            <div className={styles['midCardHead']} >Xero</div>
                            <div className={styles['midCardText']} >
                                Xero is small business accounting software that operates in the cloud. This means all your financial data is stored online - so you can access it anywhere, anytime, from any device. It's easy to use and will save you incredible amounts of time, transforming the way you run your business. Xero works with hundreds of Add-on apps 2 help you manage all aspects of your business, these include point of sale, time tracking, inventory management, invoicing and job systems plus a wide range of other specialised software.
                                <br /><br />
                                At Borgo we believe that Xero is the best cloud accounting software for small business and we're proud to be a Xero partner.
                            </div>

                        </Grid>
                        <Grid className={styles['part1']}>

                            <Image src={midCard} className={styles['midCard']} />
                            <Image src={Dext} className={styles['logo1']} />

                            <div className={styles['midCardHead']} >Dext</div>
                            <div className={styles['midCardText']} >
                                Dext is an award-winning business accounting software add-on that converts all your purchase invoices, bills and receipts into data, making it easy for you to send your financial information straight to us. With Dext's flexible submission methods you'll never lose another document as it's simple to submit them instantly You can submit in a variety of ways including the Dext App, Email or Invoice Fetch…where Dext will fetch the invoice for you directly from your online supplier account. Using Dexts easy submission methods means that you save time on sending us your paperwork, allowing you time to build your business.
                            </div>

                        </Grid>
                    </Grid>
                </div>

            </div>

            <Box className="div-center position-relative mt-0">
                <Box className={styles['schedule']}>
                    <Typography className='weight-700 font-60 font-40-sm width-100 width-50-sm font-mulish line-height-72 line-height-48-sm'>
                        Schedule a call
                    </Typography>
                    <Typography className='weight-600 font-24 width-80 font-mulish line-height-36'>
                        If you are starting a business we can help you every step of the way.<br></br>
                        Let us work with you to get your business started on the right foot.
                    </Typography>
                    <div className="box-inside" style={{ marginTop: "10px" }}>
                        <Typography
                            className="read-more color-light-grey"
                            style={{
                                width: "158px",
                                height: "36px",
                                paddingInline: "14px",
                                paddingBlock: "12px",
                            }}
                        >
                            <a
                                href="https://calendly.com/d/z84-783-bw8/discovery-call"
                                target='_blank'
                                style={{ textDecoration: "none", color: "#DDDDDD" }}
                            >
                                {" "}
                                Schedule a call{" "}
                            </a>
                        </Typography>
                    </div>
                </Box>
                <Box className="display-none-sm position-absolute right-0">
                    <Image src={Scheduled} className={styles['schedule-sphere']} />
                </Box>
                <Box className="display-none display-block-sm position-absolute right-0 fig-schedule">
                    <Image src={ScheduledMobile} className={styles['schedule-sphere']} />
                </Box>
            </Box >

            <Box sx={{ marginBlock: '100px' }}>
                <Footer />
            </Box>
        </>
    )
}
