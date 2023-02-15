import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AddIcon from '@mui/icons-material/Add';
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

interface DashProps {

}

export default function Index(props: DashProps) {
	return <Container sx={{p: 1}}>
		<Paper sx={{p: 1}}>
			<Box sx={{display: 'flex'}}>
				<Typography sx={{flex: '1 1'}} variant={'h5'}> Your Bookmarks </Typography>
				<IconButton sx={{color: 'text.secondary'}}> <ReplayIcon fontSize={'small'} /> </IconButton>
				<Button startIcon={<AddIcon/>} component={Link} href={'dash/add'}> Add </Button>
			</Box>
			<Divider/>
			<Grid container>
				<Grid item xs={'auto'}></Grid>
				<Grid item xs={'auto'}></Grid>
			</Grid>
		</Paper>
	</Container>
}