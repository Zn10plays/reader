import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Icon from '@mui/material/Icon';
import {auth} from '@/firebase/firebase'
import {UserCredential} from "@firebase/auth/dist/auth";
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "@firebase/auth";
import {useState} from "react";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

interface LoginFormProps {
	onSignedIn?: () => void;
	onCancel?: () => void;
}

export default function LoginForm(props: LoginFormProps): JSX.Element {

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [isInvalid, setInvalid] = useState(false);

	const validateAttempt = (userCredit: UserCredential | undefined) => {
		if (!userCredit) {
			return;
		}
		props.onSignedIn && props.onSignedIn();
	}
	const handleSignInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then(validateAttempt)
			.catch(err => {
				console.log(err);
			})
	};
	const handleSignInWithUserPass = () => {
		signInWithEmailAndPassword(auth, email, pass)
			.then(validateAttempt)
			.catch(err => {
				setInvalid(true);
			})
	}

	return <Paper sx={{maxWidth: '400px', width: '100%', p: 2}} elevation={2}>
		<Typography variant='h5' component='div' sx={{textAlign: 'center', my: 1}}>
			Login
		</Typography>
		<Divider sx={{my: 1}}/>
		<Box component={'form'}>
			<TextField
				label='Email'
				type='email'
				variant='outlined'
				fullWidth
				value={email}
				onChange={e => {setEmail(e.target.value)}}
				autoComplete={'off'}
				error={isInvalid}
			/>
			<div style={{padding: '.5rem'}}></div>
			<TextField
				label='Password'
				type='password'
				variant='outlined'
				fullWidth
				value={pass}
				onChange={e => {setPass(e.target.value)}}
				helperText={isInvalid && 'Invalid username or password'}
				error={isInvalid}
			/>
			<div style={{padding: '.25rem'}}></div>
			<Box sx={{textAlign: 'end'}}>
				<Tooltip title={'Kindly, Remember'}>
					<Typography variant='caption' sx={{textAlign: 'end', textDecoration: 'underline', cursor: 'pointer'}} >
						Forgot password?
					</Typography>
				</Tooltip>
			</Box>
		</Box>
		<div style={{padding: '.5rem'}}></div>
		<Box sx={{display: 'flex'}}>
			<Button variant='text' sx={{flex: '1 1'}} onClick={props.onCancel}> Cancel </Button>
			<Divider sx={{px: .25}} />
			<Button variant='outlined' sx={{flex: '1 1'}} onClick={handleSignInWithUserPass}> Login </Button>
		</Box>
	</Paper>
}