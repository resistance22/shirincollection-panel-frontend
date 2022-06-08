import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Tooltip,
  IconButton
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import { FC, useState } from 'react'
import { useProduct } from 'src/hooks'
interface props {
  id: number
}

const DeleteProductBtn: FC<props> = ({ id }) => {
  const { dispatchDeleteProduct } = useProduct()
  const [open, setOpen] = useState<boolean>(false)
  const handleAgree = () => {
    dispatchDeleteProduct(id)
    setOpen(false)
  }
  const handleDisagree = () => {
    setOpen(false)
  }
  return (
    <>
      <Tooltip title="Delete">
        <IconButton
          color='error'
          onClick={() => setOpen(true)}
        >
          <Delete />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you Sure you want to delete product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteProductBtn