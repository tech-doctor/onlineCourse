
import {Avatar, AvatarBadge,} from '@chakra-ui/react';
import { AccountSection } from './styles/extra';

const Account = () => {
  return (
    <AccountSection>
      <div className = "avatar" style = {{fontSize: '34px'}}>
        <Avatar
        size="md"
        bg='#8b8b8b'
        name='Oluka Damilola Isaac' 
        src='link'>
      <AvatarBadge boxSize='1.25em' bg='#02897A' />
    </Avatar>
      </div>
      <div className = "email-name">
        <p style={{textDecoration:'none'}} className = "name">Oluka Damilola Isaac</p>
        <span className = "email">hilghsilk2damson@gmail.com</span>
      </div>         
    </AccountSection>
  )
}

export default Account;