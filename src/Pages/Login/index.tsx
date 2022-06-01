import { Button, Grid, TextField, CircularProgress } from "@mui/material"
import { useForm, SubmitHandler } from 'react-hook-form'
import { crudentials } from 'src/Store/auth/types'
import { useAuth } from 'src/hooks'
import { Navigate } from "react-router-dom"
export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<crudentials>()
  const { disatchLogin, stateVal } = useAuth()
  const onSubmit: SubmitHandler<crudentials> = data => {
    disatchLogin(data)
  }
  if (stateVal.authenticated) {
    return <Navigate to='/panel' />
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <TextField
            error={!!errors.identifier}
            helperText={errors?.identifier?.message || "required*"}
            label={"Email/Username"}
            variant="filled"
            {...register("identifier", { required: "This field is required" })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={!!errors.password}
            label={"Password"}
            helperText={errors?.password?.message || "required*"}
            variant="filled"
            type={"password"}
            {...register("password", { required: "This field is required" })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={stateVal.loading}
            startIcon={stateVal.loading ? <CircularProgress size={20} /> : ""}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>

  )
}