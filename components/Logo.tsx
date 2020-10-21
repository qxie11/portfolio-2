import React from 'react'
import Link from 'next/link'

const Logo = () => (<Link href="/">
  <img src={require('../public/images/logo.png')} alt="logo" className="logo" />
</Link>);


export default Logo;
