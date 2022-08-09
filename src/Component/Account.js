
import {Avatar, AvatarBadge,} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { AccountSection } from './styles/extra';

const Account = () => {
  const currentUser = useSelector(state => state.rootReducer.authSlice.currentUser);
  if(currentUser !== null){
    const {firstname, lastname, email} = currentUser;
    return (
      <AccountSection>
        <div className = "avatar" style = {{fontSize: '34px'}}>
          <Avatar
          size="md"
          bg='#8b8b8b'
          name={`${firstname} ${lastname}`} 
          src='link'>
        <AvatarBadge boxSize='1.25em' bg='#02897A' />
      </Avatar>
        </div>
        <div className = "email-name">
          <p style={{textDecoration:'none'}} className = "name">{`${capitalize(firstname)} ${capitalize(lastname)}`}</p>
          <span className = "email">{email}</span>
        </div>         
      </AccountSection>
    )
  }
  return null;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default Account;