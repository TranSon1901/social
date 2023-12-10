import { AppBar, Toolbar, styled, Typography, InputAdornment, TextField, Box, Avatar } from '@mui/material'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { orange } from '@mui/material/colors'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})


const StyleIcon = styled(Box)({
  display: 'flex',
  gap: 5
})

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))
function Navbar() {
  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'bgHeader.main' }}>
      <StyledToolbar>
        <Typography variant='h6' sx={{ color:'primary.main', fontWeight:'bold', display: { xs: 'none', sm: 'block' } }}>
          SOCIAL
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <TextField
          size='small'
          id="header-input"
          label="search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <StyleIcon>
          <Mail sx={{ color:'primary.main', display: { xs: 'none', sm: 'block' } }}/>
          <Notifications sx={{ color:'primary.main', display: { xs: 'none', sm: 'block' } }}/>
          <Avatar
            alt='Remy Sharp'
            src='https://file1.dangcongsan.vn/DATA/0/2018/10/68___gi%E1%BA%BFng_l%C3%A0ng_qu%E1%BA%A3ng_ph%C3%BA_c%E1%BA%A7u__%E1%BB%A9ng_h%C3%B2a___%E1%BA%A3nh_vi%E1%BA%BFt_m%E1%BA%A1nh-16_51_07_908.jpg'
            sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer', width: 24, height: 24 }}
          />
          <UserBox>
            <Avatar
              alt='Remy Sharp'
              src='https://file1.dangcongsan.vn/DATA/0/2018/10/68___gi%E1%BA%BFng_l%C3%A0ng_qu%E1%BA%A3ng_ph%C3%BA_c%E1%BA%A7u__%E1%BB%A9ng_h%C3%B2a___%E1%BA%A3nh_vi%E1%BA%BFt_m%E1%BA%A1nh-16_51_07_908.jpg'
              sx={{ cursor: 'pointer', width: 24, height: 24 }}
            />
            <Typography variant='span'>Tran Son</Typography>
          </UserBox>
        </StyleIcon>
      </StyledToolbar>
    </AppBar>
  )
}
export default Navbar
