import React from 'react';
import './Page.scss';

export default function Page({ children }) {
  return <section className="page">{children}</section>;
}
