// src/utils/avatar.js
import React from 'react';
import Avatar from 'react-avatar';

export const generateAvatar = (name, size = 100) => {
  return <Avatar name={name} size={size} round={true} />;
};
