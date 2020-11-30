import React from 'react';
import Link from 'next/link';
import LogoImage from '../public/images/logo.svg';

const Logo = () => <Link href="/">
  <a className="logo">
    <img src={LogoImage} alt="logo" />
  </a>
</Link>;

export default Logo;
