// Card, CardContent, CardHeader, CardTitle

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export { Card };

const CardHeader = ({ children, className }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  className: '',
};

export { CardHeader };

const CardTitle = ({ children, className }) => {
  return <div className={`card-title ${className}`}>{children}</div>;
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardTitle.defaultProps = {
  className: '',
};

export { CardTitle };

const CardContent = ({ children, className }) => {
  return <div className={`card-content ${className}`}>{children}</div>;
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.defaultProps = {
  className: '',
};

export { CardContent };

