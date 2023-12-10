import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Switch } from '@mui/material'
import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { useColorScheme } from '@mui/material/styles'
function Sidebar() {
  const { mode, setMode } = useColorScheme()
  return (
    <Box flex={2} sx={{ display : { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home sx={{ color: 'primary.dark' }}/>
              </ListItemIcon>
              <ListItemText primary='Homepage' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <Article sx={{ color: 'primary.dark' }}/>
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <Group sx={{ color: 'primary.dark' }}/>
              </ListItemIcon>
              <ListItemText primary='Groups' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <Storefront sx={{ color: 'primary.dark' }}/>
              </ListItemIcon>
              <ListItemText primary='Marketplace' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <Person sx={{ color: 'primary.dark' }}/>
              </ListItemIcon>
              <ListItemText primary='Friends' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <Settings sx={{ color: 'primary.dark' }}/>
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <AccountBox sx={{ color: 'primary.dark' }}/>
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <ModeNight sx={{ color: 'primary.dark' }}/>
              </ListItemIcon>
              <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar