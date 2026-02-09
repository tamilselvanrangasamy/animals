import { Typography } from "@mui/material"

function Info({ title, colors }: any) {
  return (
    <div>
      <Typography variant="h3" color={`${colors}`} gutterBottom align="center"
        sx={{ backgroundColor: "black", marginTop: "20px" }}>{title}</Typography>

    </div>
  )
}

export default Info