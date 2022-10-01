
import Avatar from '@mui/material/Avatar';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

import {useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
//import { useAppDispatch } from '../../app/store/configureStore';
import agent from '../../app/api/agent';
import { toast } from 'react-toastify';



const theme = createTheme();

export default function Register() {
    const history = useHistory();
    const { register , handleSubmit, setError ,formState: { isSubmitting , errors , isValid } } = useForm({
        mode: "all"
    });

    function handleApiErrors(errors: any){
      if(errors){
        errors.forEach((error: string) => {
          if(error.includes("Password")){
            setError("password", {message: error})
          } else if (error.includes("Email")){
            setError("email", {message: error})
          }else if (error.includes("Username")){
            setError("username", {message: error})
          }
        });
      }
    }

    // const [values, setValues] = React.useState({
    //     username: "",
    //     password: ""
    // })

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

// const handleSubmit = (event: any) => {
//     event.preventDefault();
//     agent.Account.login(values);
//   };

//   function handleInputChange(event: any){
//     const { name, value } = event.target;
//     setValues({...values, [name]: value});
//   }

  return (
    <ThemeProvider theme={theme}>
      <Container component={Paper} maxWidth="sm" >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" 
          onSubmit={handleSubmit((data) => 
            agent.Account.register(data)
              .then(() => {
                toast.success("Registration succesful -- You can now login");
                history.push("/login");
              })
              .catch(error => handleApiErrors(error)))
          } 
          noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Username"
              autoFocus
            //   onChange={handleInputChange}
            //   value={values.username}
            {...register("username", {required: "Username is required"})}
            error={!!errors.username}
            helperText={errors?.username?.message?.toString()}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Email"
            //   onChange={handleInputChange}
            //   value={values.username}
            {...register("email", 
            {required: "Email is required",
             pattern: {
              value: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
              message: "Not a valid email address"
             }
            })}
            error={!!errors.email}
            helperText={errors?.email?.message?.toString()}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                  message: "Password does not meet complexity requirement"
                } 
              })}
              error={!!errors.password}
              helperText={errors?.password?.message?.toString()}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <LoadingButton loading={isSubmitting}
              disabled={!isValid}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </LoadingButton>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to= "/login" >
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}