import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import KB from "../KB.svg";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              FitApp <div className='KB'><img src={KB} alt='kettlebell icon' /></div>
            </Link>
          </div>
          <small className='website-rights'>FitApp © 2020</small>
          <div className='social-icons'>
            <Link
                className='social-icon-link github'
                to='github.com/cmillecan/FitApp'
                target='_blank'
                aria-label='Github'
            >
              <GithubOutlined />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='twitter.com/cmillecan'
              target='_blank'
              aria-label='Twitter'
            >
              <TwitterOutlined />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='linkedin.com/cmillecan'
              target='_blank'
              aria-label='LinkedIn'
            >
              <LinkedinOutlined />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;