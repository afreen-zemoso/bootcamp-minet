import React from 'react';
import { Avatar as MuiAvatar } from '@mui/material'

interface AvatarComponentProps {
    src: string;
    alt: string;
    width: string;
    height: string;
}

const Avatar = ({...props}:AvatarComponentProps) => {
  return (
      <MuiAvatar 
      alt={props.alt}
      src={props.src}
      sx={{width:props.width, height:props.height}}
      data-testid={props.alt}
      />
  )
}

export default Avatar
