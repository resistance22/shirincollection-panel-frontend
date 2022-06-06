import { Button, Grid, TextField, TextareaAutosize, IconButton } from "@mui/material"
import { Add, Remove } from '@mui/icons-material'
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface EntryItem {
  Title: string,
  defaultValue: number
}

interface Product {
  Title: string
  Description?: string
  Percent: number
  entry_items: EntryItem[]
}


const formSchema = yup.object({
  Title: yup.string().required("This Field is Required!"),
  Description: yup.string(),
  Percent: yup.number().positive("Must be Positive Number").required("This Field is Required!"),
  entry_items: yup.array().of(yup.object({
    Title: yup.string().required("This Field is Required!"),
    defaltValue: yup.number().positive("Must be Positive Number")
  }))
})

export const NewProductFrom = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm<Product>({
    resolver: yupResolver(formSchema)
  })
  const { fields, append, remove } = useFieldArray({ control, name: "entry_items" })
  const onSubmit: SubmitHandler<Product> = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={0.5}>
        <Grid item xs={9}>
          <Grid container spacing={0.5}>
            <Grid item xs={12} md={8}>
              <TextField
                sx={{ width: "100%" }}
                error={!!errors.Title}
                helperText={errors?.Title?.message || "required*"}
                label={"Product Title"}
                {...register("Title", { required: "This field is required" })}
              />

            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                sx={{ width: "100%" }}
                error={!!errors.Percent}
                helperText={errors?.Percent?.message || "required*"}
                label={"Percent"}
                {...register("Percent", { required: "This field is required", valueAsNumber: true })}
              />
            </Grid>
          </Grid>

          <TextareaAutosize
            {...register("Description")}
            aria-label="Product-Description"
            placeholder="Product Description"
            style={{ width: "100%" }}
          />
          {fields.map((field, index) => {
            return (
              <Grid key={index} container spacing="10px" sx={{ margin: "20px 0" }}>
                <Grid item xs={12} md={8}>
                  <TextField
                    label="Cost Name"
                    sx={{ width: "100%" }}
                    error={!!errors?.entry_items?.[index]?.Title}
                    {...register(`entry_items.${index}.Title` as const)}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Default Value"
                    sx={{ width: "100%" }}
                    error={!!errors?.entry_items?.[index]?.defaultValue}
                    {...register(`entry_items.${index}.defaultValue` as const, {
                      valueAsNumber: true
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={1}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <IconButton
                    color="error"
                    onClick={() => remove(index)}
                  >
                    <Remove />
                  </IconButton>
                </Grid>
              </Grid>

            )
          })}
          <IconButton
            onClick={() => append({
              Title: "",
              defaultValue: 0
            })}
          >
            <Add />
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Add New Product
          </Button>
        </Grid>
      </Grid>
    </form >

  )
}