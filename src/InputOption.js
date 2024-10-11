import React from 'react';
import './InputOption.css';

const InputOption = ({ Icon, title }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: '#70B5F9' }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;