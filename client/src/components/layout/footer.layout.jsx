import React from 'react';

function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover" href="/#">
                    Branding
                </a>
                <a className="link link-hover" href="/#">
                    Design
                </a>
                <a className="link link-hover" href="/#">
                    Marketing
                </a>
                <a className="link link-hover" href="/#">
                    Advertisement
                </a>
            </div>
            <div>
                <span className="footer-title" href="/#">
                    Company
                </span>
                <a className="link link-hover" href="/#">
                    About us
                </a>
                <a className="link link-hover" href="/#">
                    Contact
                </a>
                <a className="link link-hover" href="/#">
                    Jobs
                </a>
                <a className="link link-hover" href="/#">
                    Press kit
                </a>
            </div>
            <div>
                <span className="footer-title" href="/#">
                    Legal
                </span>
                <a className="link link-hover" href="/#">
                    Terms of use
                </a>
                <a className="link link-hover" href="/#">
                    Privacy policy
                </a>
                <a className="link link-hover" href="/#">
                    Cookie policy
                </a>
            </div>
        </footer>
    );
}

export default Footer;
