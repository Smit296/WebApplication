import React from 'react'
import SideNav from '../components/SideNav'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import NavBar from '../components/NavBar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css"
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import ShoppingBag from '@mui/icons-material/ShoppingBag'
import Accordiondash from '../components/AccordionDash'

import BarChart from '../charts/BarChart'

export const Home = () => {
  const email = localStorage.getItem('email')
  console.log("email: " + email)
  return (
    <>
    <div className='bgcolor'>
    <NavBar />
      <Box height={70} />


      <Box sx={{ display: 'flex' }}>
        <SideNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction={'row'}>
                <Card sx={{ minWidth: 49 + '%', height: 140 }} className="gradient">
                  {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
                  <CardContent>
                  <div className='iconstyle'>
                  <CreditCardIcon/>
                  </div>
               
                    <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
                      $500.00
                    </Typography>
                    <Typography
                    gutterBottom
                    variant='body2'
                    component="div"
                    sx={{color:'#ccd1d1'}}
                    >
                    Total Orders
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
                </Card>
                <Card sx={{ minWidth: 49 + '%', height: 140 }} className='gradientlight'>

                  <CardContent>
                  <div className='iconstyle'>
                  <ShoppingBag/>

                  </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
                      $900.00
                    </Typography>
                    <Typography
                    gutterBottom
                    variant='body2'
                    component="div"
                    sx={{color:'#ccd1d1'}}
                    >
                    Total Earnings
                    </Typography>
                    
                  </CardContent>

                </Card>
              </Stack>


            </Grid>



            <Grid item xs={4}>
              <Stack spacing={2}>
              <Card sx={{ height: '9vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='gradientlight'>
                  <CardContent>
                    <Stack spacing={2} direction={'row'} alignItems="center">
                      <div className='iconstyle'>
                        <StorefrontIcon />
                      </div>
                      <div>
                        <span className='pricetitle' >$203k</span>
                        <br />
                        <span className='pricesubtitle'>Total Income</span>
                      </div>
                    </Stack>
                  </CardContent>
                </Card>
                <Card sx={{ height: '9vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CardContent>
                    <Stack spacing={2} direction={'row'} alignItems="center">
                      <div className='iconstyleblack'>
                        <StorefrontIcon />
                      </div>
                      <div>
                        <span className='pricetitle'>$203k</span>
                        <br />
                        <span className='pricesubtitle'>Total Income</span>
                      </div>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>


          <Box height={20} />


          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + 'vh' }}>

                <CardContent>
                  <BarChart/>

                </CardContent>

              </Card>

            </Grid>
            <Grid item xs={4}>

              <Card sx={{ height: 60 + 'vh' }}>

                <CardContent>
                <div style={{marginBottom:10,fontWeight:'600'}}>
                        <span >Popular Products</span>
                      
                     
                      </div>
                      
                      <Accordiondash/>
                      
                  

                </CardContent>

              </Card>
            </Grid>

          </Grid>

        </Box>
      </Box>
    </div>
      

    </>

  )
}
