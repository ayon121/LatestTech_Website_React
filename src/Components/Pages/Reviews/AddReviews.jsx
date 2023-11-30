

import { Button, Grid, TextField } from '@mui/material';

import { useState } from 'react';
import Title from '../../Shared/Title';


import { useContext } from "react";

import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Providers/Authproviders';
import { axiosSecure } from '../../Hooks/useAxiosSecure';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const AddReviews = () => {
    const { user } = useContext(AuthContext)
    const {id} = useParams()
    const [review, SetReview] = useState({
        name: user?.displayName,
        productId : id,
        review: '',
        ratings: ''
    })
    const handleinputChange = e => {
        SetReview((prevState) => ({
            ...prevState,
            [e.target.name] : [e.target.value],
        }))
    }

    const handleReview = (e) => {
        e.preventDefault()
        axiosSecure.post('/addproductreview', review)
        .then(res =>{ if(res.data.acknowledged){
            toast('Review Added')
        }
        })
    }


    return (
        <div>
            <Title title={'Add Review'}></Title>
            <form onSubmit={handleReview}>
                <Grid container>
                    <Grid item>
                        <TextField
                            id="outlined-basic"
                            onChange={handleinputChange}
                            label="Your Review"
                            variant="outlined"
                            name='review'
                            sx={{margin : '20px'}}
                            value={review.review}
                            
                        />
                        <br/>
                        <TextField
                        onChange={handleinputChange}
                            id="outlined-basic"
                            label="Give Ratings From 1 to 5"
                            variant="outlined"
                            name='ratings'
                            sx={{margin : '20px'}}
                            value={review.ratings}
                            
                             />
                             <br/>
                             <Button sx={{margin : '20px'}} type='submit' variant="contained">Add Review</Button>
                    </Grid>
                

                </Grid>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddReviews;