import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface AddProps {

}

export default function Add(props: AddProps) {
	return <Container sx={{pt: 1}}>
		<Paper>
			<Paper sx={{p: 1, my: 1}}>
				<Typography variant={'h4'}>
					Add A Bookmark
				</Typography>
				<Divider/>
			</Paper>
			<Paper sx={{p:1, mt: 1, display: 'flex'}}>
				<Box sx={{flex: 'auto'}}>
					<Box>
						<TextField label={'Enter the Novel URL'}/>
					</Box>
					<Box>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Source</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								// value={age}
								label="Source"
								// onChange={handleChange}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Box>
				<Box sx={{flex: 'auto'}}>
					{/*<Image />*/}
				</Box>
			</Paper>
		</Paper>
	</Container>
}