// SingleBlog.jsx
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  IconButton,
  Box,
  Divider,
  Chip
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { blogs } from './blogsData';

export default function SingleBlog() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <div>Article not found</div>;

  const contentParagraphs = blog.content.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container maxWidth="md" sx={{ py: 4 }}>
        <IconButton component={Link} to="/blogs" sx={{ mb: 2 }}>
          <ArrowBack sx={{ fontSize: 32 }} />
        </IconButton>

        <motion.img
          src={blog.image}
          alt={blog.title}
          style={{ 
            width: '100%', 
            height: '400px',
            borderRadius: 12,
            marginBottom: 24,
            objectFit: 'cover'
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        <Chip 
          label={blog.category || "Featured Article"} 
          color="primary" 
          sx={{ mb: 3, fontSize: '0.9rem', padding: '4px 12px' }}
        />

        <Typography variant="h2" gutterBottom sx={{ 
          fontWeight: 'bold',
          mb: 4,
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}>
          {blog.title}
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          mb: 4,
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.05)',
          padding: 2,
          borderRadius: 2
        }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {blog.author}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="subtitle1" color="text.secondary">
            {blog.date}
          </Typography>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {contentParagraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Typography variant="body1" paragraph sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 3,
                textAlign: 'justify'
              }}>
                {paragraph}
              </Typography>
              {index === 1 && <Divider sx={{ my: 3 }} />}
            </motion.div>
          ))}
        </motion.div>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <IconButton 
            component={Link} 
            to="/blogs" 
            sx={{ 
              fontSize: '1.1rem',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' }
            }}
          >
            <ArrowBack sx={{ mr: 1 }} /> Back to Articles
          </IconButton>
        </Box>
      </Container>
    </motion.div>
  );
}