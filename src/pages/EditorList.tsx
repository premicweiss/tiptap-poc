import React, { FC } from 'react';
import styled from '@emotion/styled';

const EditorList:FC<{className?: string}> = ({className}) => {
  return <div className={className}>
    Editor list
  </div>
};

export default styled (EditorList)(() => `
  padding: 0;
  color: red;
`)