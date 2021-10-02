import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const News = (props) => {
    const { title, author, content, urlToImage } = props.news
    return (

        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Card style={{ height: '100%' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={urlToImage}
                        alt="news-image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="button" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="p">
                            {author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default News;