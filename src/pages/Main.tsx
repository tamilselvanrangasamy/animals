import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Buttons from '../components/Buttons';


export default function Main({ zoo }: any) {
  return (
    <>
      <div className='cardContent'>
        <div className='content'>
          <div className="card">
            {
              zoo.map((e: any) => (
                <Card key={e.id}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={e.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {e.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Buttons title="Learn More"></Buttons>
                  </CardActions>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
