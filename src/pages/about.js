import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UpperFooter from './components/UpperFooter'
import { Box, Grid, Typography } from '@mui/material'
import About1 from '../../public/assests/aboutspike1.png'
import Spike1 from '../../public/assests/aboutspike2.png'
import About2 from '../../public/assests/aboutgroup1.png'
import About3 from '../../public/assests/aboutgroup0.png'
import About4 from '../../public/assests/aboutgroup2.png'
import PropCard from '../../public/assests/propcard.png';
import Admi from '../../public/assests/Admi.png';
import KalcAcc1 from '../../public/assests/KalcAcc1.jpg';
import KalcAcc2 from '../../public/assests/KalcAcc2.jpg';
import KalcAcc3 from '../../public/assests/KalcAcc3.jpg';
import KalcAcc4 from '../../public/assests/KalcAcc4.jpg';
import KalcAcc5 from '../../public/assests/KalcAcc5.jpg';
import KalcAcc6 from '../../public/assests/KalcAcc6.jpg';
import KalcAcc7 from '../../public/assests/KalcAcc7.jpg';
import KalcAcc8 from '../../public/assests/KalcAcc8.jpg';
import KalcAcc9 from '../../public/assests/KalcAcc9.jpg';
import KalcAccTeam from '../../public/assests/KalcAccTeam.jpg';
import Arrow from '../../public/assests/arrow.png';
import Scroll from '../../public/assests/scroll.png';
import mobileFill from '../../public/assests/mobileFill.png'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <Grid className='position-relative'>
      <Navbar />

      <Box component="main" className='width-100 position-relative about-height height-auto-sm div-center'>
        <Box className='margin-auto width-100 position-relative'>
          <Box className='display-none-sm position-absolute left-0 about-fig-1'>
            <Image src={About1} width='100%' height="100%" />
          </Box>
          <Box className='display-none-sm position-absolute right-0 about-fig-2'>
            <Image src={About2} width='100%' height="100%" />
          </Box>
          <Box className='margin-auto flex-direction-column width-60 width-100-sm div-center-sm position-relative' sx={{ zIndex: '5' }}>
            <Typography className='font-18 weight-400 color-orange mt-20-sm font-mulish'>ABOUT US</Typography>
            <Typography className='display-none-sm font-80 weight-700 color-light-grey font-mulish line-height-88 width-80 '>ABOUT US</Typography>
            <Typography className='display-none display-block-sm font-48-sm weight-700 font-mulish color-light-grey line-height-60 width-60 text-center-sm mt-20-sm'>Who are Borgo?</Typography>
            <Typography className='font-24 font-22-sm weight-600 color-light-grey line-height-36 width-100 width-80-sm bottom-0 text-center-sm mt-50 mt-20-sm font-mulish'>You started your business with a passion to succeed. We did the same.</Typography>

            <div className={` ${styles.scroll} display-none display-block-sm`}>
              <Box className="div-center mt-50-sm">
                <Image src={Scroll} width='100%' height="100%" />
              </Box>
              <Typography className='mt-20 color-grey font-mulish weight-600'>SCROLL TO EXPLORE</Typography>
            </div>
          </Box>
        </Box>
      </Box>

      <Grid container className='flex-direction-column-reverse-sm mt-40-sm mt-100'>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box className={`${styles['card-main-about']} mt-50 div-center animation-cards`} style={{ zIndex: 6 }}>
            <Box className={styles['card-top-box-about']} ></Box>
            <Image src={PropCard} className={styles['card-image-about']} style={{ zIndex: 6 }} />
            <Box className={styles['card-inner']}>
              <Typography className='weight-300 line-height-48 width-100-sm width-80 color-light-grey font-24 font-mulish' sx={{ marginTop: '10px' }}>
                Let's create a plan
              </Typography>
              <Typography className='weight-700 line-height-48 width-100-sm width-100 letter-spacing color-light-grey font-48 font-mulish'>
                Schedule a Call
              </Typography>
              <Typography className='weight-400 color-light-grey font-18 font-mulish' sx={{ marginTop: '20px' }}>
                We will arrange a call or face to face meeting with one of our qualified accountants.
              </Typography>
              <a href='https://calendly.com/d/z84-783-bw8/discovery-call' target='_blank' style={{ textDecoration: 'none', backgroundColor: '#fff', color: '#DDDDDD', cursor: 'pointer' }}>
                <Box className={'div-between'} sx={{ marginTop: '100px' }}>
                  <Typography style={{ zIndex: 6 }} className='weight-700 color-light-grey text-center font-18 font-mulish'>
                    Click here
                  </Typography>
                  <Image src={Arrow} width='100%' height="100%" style={{ zIndex: 6 }} />
                </Box>
              </a>
            </Box>
          </Box>
        </Grid >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box className='margin-auto flex-direction-column width-80 mt-50 mt-20-sm '>
            <Typography className='font-60 font-40-sm font-mulish text-center-sm weight-700 line-height-48-sm color-light-grey line-height-72'>
              At Borgo what matters most to us, is you, our client.
            </Typography>
            <Typography className='display-none-sm font-mulish font-24 weight-600 color-light-grey line-height-36 mt-20'>
              Allow us to manage your accounting and finance function so you can focus your energies on what matters most to you.
              <br></br><br></br>
              All our work is carried out by dedicated accountants and support staff who represent the business to the highest standards of professionalism.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box className='position-relative' style={{ zIndex: 1 }}>
        <Box className='display-none-sm position-absolute left-0 about-fig-3'>
          <Image src={Spike1} width='100%' height="100%" />
        </Box>
      </Box>

      <Box className='width-80 width-80-sm margin-auto position-relative mt-100-sm' >
        <Typography className='font-60 font-24-sm weight-300 weight-600-sm text-center font-mulish color-light-grey mt-20-sm line-height-72 line-height-29-sm' sx={{ marginTop: '400px' }}>
          “Their seamless onboarding process and expertise in Xero made the transition smooth and effortless”
        </Typography>
      </Box>

      <Box className="div-center flex-direction-column position-relative mt-100 mt-50-sm">
        <Box className='display-none-sm position-absolute left-0 about-fig-3'>
          <Image src={About3} width='100%' height="100%" />
        </Box>
        <Box className='display-none-sm position-absolute right-0' sx={{ top: "-280px" }}>
          <Image src={About4} width='100%' height="100%" />
        </Box>
        <Box className='display-block-sm display-none about-spike position-absolute' justifyContent={'flex-end'}>
          <Image src={mobileFill} style={{ width: '100%', height: '100%' }} />
        </Box>
        <div style={{ height: '64px', width: '64px', backgroundColor: '#5E6B7E', borderRadius: '50%' }}></div>
        <Typography className='font-16 weight-400 text-center color-light-grey mt-20 line-height-19'>Padraig Sweeney - Sweeney's D3</Typography>
        <Typography className='font-16 weight-400 text-center mt-10 color-grey line-height-19 display-none'>Borgo Client</Typography>
        <Typography className='font-32 weight-300 text-center mt-100-sm mt-220 color-light-grey line-height-38' sx={{ zIndex: '5' }}>Meet the Borgo team</Typography>
        <Typography className='font-60 font-40-sm width-80-sm weight-700 text-center mt-20 color-light-grey line-height-72 line-height-48-sm'>Our team is your team</Typography>
      </Box>

      <Box className="width-80 width-100-sm" sx={{ margin: 'auto' }}>
        <Grid container className='mt-20-sm mt-100 div-center'>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc9} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Allan Egan</Typography>
                  <Typography className='color-grey weight-400 font-16'>Co-Founder and Managing Director</Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Allan has over 15 years experience working in both accounting and financial services helping business owners build and grow their business "at Borgo at our aim is to provide an exceptional client experience,
                we can't do that without an exceptional team, I am proud of the team that we are building at Borgo and their efforts to deliver this for our clients "
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc6} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Martyn Cahill</Typography>
                  <Typography className='color-grey weight-400 font-16'>Client Manager</Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Martyn combines accounting expertise with the latest technology to provide an innovative and personal services for our clients.
                If there is a way to automate or improve a process he wants to know about it! Martyn is a qualified accountant with the Association of Chartered Certified Accountants (ACCA) and is also a member of Accounting Technicians Ireland (ATI).
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about1']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc5} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Ollie Dixon</Typography>
                  <Typography className='color-grey weight-400 font-16'>Client Manager</Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Ollie brings a wealth of experience and knowledge to his role as a Client Manager.
                He is passionate about accounting and enjoys working closely with clients to give them the best advice and add value to their business.
                Ollie is a qualified accountant with the Association of Chartered Certified Accountants (ACCA) and is also a member of Accounting Technicians Ireland (ATI).
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about1']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc2} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Gillian Nolan</Typography>
                  <Typography className='color-grey weight-400 font-16'>Senior Production Manager</Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Gillian is responsible for the quality and delivery of all the accounting jobs in Borgo .
                Prior to joining to Borgo Gillian worked as the Practice Manager with Shelbourne Accountants and as a Financial Accountant with Aviva Life & Pensions Ireland Ltd.
                She brings valuable experience in the accounting industry to the Borgo team.
              </Typography>
            </div>
          </Grid>

          {/* <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about1']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc8} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Tina Zapryanova</Typography>
                  <Typography className='color-grey weight-400 font-16'>Senior Accountant</Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Tina is responsible for income tax compliance and planning with Borgo.
                Tina is a qualified accountant with the Association of Chartered Certified Accountants (ACCA) and has over 15 years experience in the accounting industry.
              </Typography>
            </div>
          </Grid> */}

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc1} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Sarah McDonnell</Typography>
                  <Typography className='color-grey weight-400 font-16'>Payroll Specialist</Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Sarah is responsible for payroll processing and support with Borgo.
                Sarah is a qualified accounting technician with Accounting Technicians Ireland (ATI) and is currently studying towards the Certificate in Payroll Techniques with IPASS.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc3} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Anna Palmer</Typography>
                  <Typography className='color-grey weight-400 font-16'>Accounts Assistant</Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Anna is a trainee accountant with Borgo and is currently studying towards her ACCA examinations.
                Anna provides accounting and bookkeeping support to the team.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc4} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Holly McEntee</Typography>
                  <Typography className='color-grey weight-400 font-16'>Bookkeeper</Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Holly is an intern with Borgo and will return to college to complete her BA Honours in Accounting and Finance with National College of Ireland.
                Holly provides accounting and bookkeeping support to the team.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc7} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Svetlana Stoyanova</Typography>
                  <Typography className='color-grey weight-400 font-16'>Accounts Manager</Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Svetlana works in our accounts and admin department and is responsible for the day - to - day operational tasks of Borgo.
              </Typography>
            </div>
          </Grid>
          
        </Grid>
      </Box>

      <Box className='mt-100-sm mt-300'>
        <UpperFooter />
      </Box>
      <Footer />
    </Grid>
  )
}
