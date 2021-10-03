import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from '../News/News';


const NewsSite = () => {
    const [news, SetNews] = useState([])
    // const appleNewsAPI = 'https://newsapi.org/v2/everything?q=apple&from=2021-10-01&to=2021-10-01&sortBy=popularity&apiKey=5bc3401fc6b6467d9b7820f29fa3a255'
    // const wallStreetNewsAPI = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5bc3401fc6b6467d9b7820f29fa3a255'
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => SetNews(data.articles))
    }, [])
    return (
        <Container>
            <div style={{ height: "90px" }}></div>
            <Grid container spacing={3}>
                {
                    news.map(nw => <News key={nw.title} news={nw} />)
                }
            </Grid>
        </Container>
    );
};

export default NewsSite;