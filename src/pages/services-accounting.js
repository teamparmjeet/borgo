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
                    <div className={styles['topButtons']}>
                        <div className={styles['topButtonsText']}>  OUR SERVICES  </div>
                        <div className={styles['topButton']}><Link href='/services-accounting/' style={{ textDecoration: 'none', color: '#DDDDDD' }} > ACCOUNTING </Link> </div>
                        <div className={styles['topButton']}><Link href='/services-onlinebookkeepr' style={{ textDecoration: 'none', color: '#DDDDDD' }} >ONLINE BOOKKEEPER </Link></div>
                        <div className={styles['topButton']}><Link href='/services-advisory' style={{ textDecoration: 'none', color: '#DDDDDD' }} >ADVISORY </Link></div>
                    </div>
                    <div className={styles['topHead']}>
                        Accounting and
                        <br /> Compliance Services
                    </div>
                    <div className={styles['topText']}>
                        Ensure your business stays compliant with expert year-end <br>
                        </br>accounting services. Our team will prepare your year end accounts,<br>
                        </br> handle your tax obligations (Revenue), and submitting annual returns <br>
                        </br>(CRO). As your registered tax agent, we can manage your registrations,<br>
                        </br> compliance and any queries, providing peace of mind to you and your <br>
                        </br> business. Our accounting and compliance services offers the following benefits:
                    </div>
                    <div>
                        <ul  className={styles['topText2']}>
                            <li>Dedicated team to manage your account, offering personalized support</li>
                            <li>Timely preparation of year-end accounts and tax filings.</li>
                            <li>Full compliance with tax and registration obligations.</li>
                            <li>Proactive approach to filing, helping you plan ahead and avoid stress.</li>
                        </ul>
                    </div>
                    
                    <div >
                        <Image className={styles['scroll']} src={scroll} />
                    </div>
                </div>

                <div className={styles['ref']} >

                    <Grid container className='div-center' id='1'>
                        <Grid item xs={12} sm={12} md={6} xl={6} className='div-start div-center-sm'>
                            <ServiceCardLeft props={1} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} xl={6} className='div-flex-start div-center-sm flex-direction-column'>
                            <div>
                                <ServicesText props={['Accounting',
                                    "Financial Statements",
                                    "Regardless of the size of your business or the type of industry in which you operate it is essential that you maintain accurate accounts. Borgo will prepare your Annual Financial Statements and include a Year-End Review Meeting to ensure that you understand the numbers behind your business.",
                                ]} />
                            </div>
                            <div>
                                <ServicesText props={['',
                                    "Tax Filings",
                                    "As a Limited Company you will have to file a Corporation Tax Return or if you operate as a Sole Trader or Partnership you will have to file a Personal Income Tax Return on an annual basis to the Revenue Commissioners. Borgo will assist you in preparing and filing your company tax returns and income tax returns - and we guarantee you'll never miss a deadline.",
                                ]} />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container className='div-center mt-100' id='4'>
                        <Grid item xs={12} sm={12} md={6} xl={6} id={styles['swap']} className='div-start div-center-sm'>
                            <ServicesText props={['Accounting',
                                <>Company <br /> Secretarial</>,
                                'Directors need to ensure that their company is fully compliant with the requirements of the Companies Act. Borgo provide a range of company secretarial services to companies to meet compliance standards including preparation of Abridged Financial Statements and Annual Returns. We can also assist Start-Ups and Sole Traders who want to set up a Limited Company with our Company Formation services.',
                                <>Year End Review <br /> Meeting </>,
                                'As part of our Year End Compliance services we include a Year End Review Meeting to discuss and review the financial performance of the business. At Borgo we believe this is a very important part of our compliance services. It is an opportunity to discuss on the profitability, working capital and cashflows of the business. We also review the tax positions of the business and their owners to ensure that business and personal goals are aligned.'
                            ]} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} xl={6} className='div-center div-center-sm'>
                            <ServiceCardRight props={1} />
                        </Grid>
                    </Grid>



                </div>
            </div >


            <div className={styles['midSection2']}>
                <div >
                    <div className={styles['midSectionHead']}>The Software</div>
                    <div className={styles['midSectionText']}>At Borgo we only use software that we trust and are proud to use</div>

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
