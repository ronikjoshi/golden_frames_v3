import React from "react";
import { styles } from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';

const Post = ({ post }) => {
 
        return (
             <Card sx={styles.card}>
                <CardMedia
                    sx={styles.media}
                    image={post.selectedFile}
                    title={post.title}
                />

                <Box sx={styles.overlay}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </Box>

                <Box sx={styles.overlay2}>
                    <Button sx={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                    </Button>
                </Box>

                <Box sx={styles.details}>
                    <Typography variant="body2" color="text.secondary">
                    {post.tags.map((tag) => `#${tag} `)}
                    </Typography>
                </Box>

                <Typography sx={styles.title} variant="h5" gutterBottom>
                    {post.title}
                </Typography>

                <CardContent>
                    {/* ✅ Using styles.message for word-wrap */}
                    <Typography variant="body2" sx={styles.message}>
                    {post.message}
                    </Typography>
                </CardContent>

                <CardActions sx={styles.cardActions}>
                    <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount}
                    </Button>

                    <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" /> &nbsp; Delete
                    </Button>
                </CardActions>
                </Card>
        )

}

export default Post;