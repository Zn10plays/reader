import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {User} from "@firebase/auth";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useState} from "react";
import {auth} from "@/firebase/firebase";

interface UserDetailsProps {
	user: User;
}

export default function UserDetails(props: UserDetailsProps) {
	const { user } = props;
	const [userName, setUsername] = useState(user.displayName);

	const updateUsername = () => {
		if (!auth.currentUser) return;

	};

	return <Paper sx={{maxWidth: '500px', width: '100%', p: 2}}>
		<Box sx={{textAlign: 'center'}}>
			<Typography variant={'h4'}>Account Details</Typography>
		</Box>
		<Divider sx={{my: 1}}/>
		<Box sx={{display:'flex', flexDirection: 'column'}}>
			<Box sx={{display: 'flex', mb: 2}}>
				<TextField
					sx={{flex: '1 1'}}
					variant={'standard'}
					label={'Display Name'}
					onChange={(event) => setUsername(event.target.value)}
					defaultValue={userName}
					autoComplete={'off'} />
			</Box>
			<Box sx={{display: 'flex', mb: 2}}>
				<TextField
					sx={{flex: '1 1'}}
					variant={'standard'}
					label={'Email'}
					defaultValue={user.email}
					InputProps={{readOnly: true}}
					autoComplete={'off'} />
			</Box>
			<Box sx={{my: 1, mb: 2}}>
				<Typography variant={'body2'} sx={{color: 'text.secondary'}}>
					Access Level
				</Typography>
				<Stack direction="row" spacing={1}>
					<Chip label={'Reader'}></Chip>
					<Chip label={'Admin'}></Chip>
				</Stack>
			</Box>
			<Box sx={{display: 'flex'}}>
				<Button disabled={userName === user.displayName} onClick={updateUsername}>
					Update
				</Button>
				<Box sx={{flex: '1 1'}}/>
				<Button variant={'contained'}>
					Dashboard
				</Button>
			</Box>
		</Box>
	</Paper>
}