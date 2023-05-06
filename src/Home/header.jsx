import React from 'react'
// import './header.css'

const Header = () => {
    return (
        <div><header class="header header--alt ">
            <a href="index.html" class="logo logo--alt ">
                <aside>
                    <span></span>

                    <span></span>
                </aside>

                <strong>
                    htmlBurger

                    <small>Since 2007</small>
                </strong>

            </a>


            <nav class="nav nav--alt">
                <ul class="nav__left">
                    <li class="nav__dropdown-holder">
                        <a href="services"  >All Services</a>

                        <ul>
                            <li>
                                <a href="front-end-development-services.html" >
                                    <span>HTML/CSS Front-End</span>
                                </a>
                            </li>

                            <li>
                                <a href="vue-react-development-services" >
                                    <span>Vue / React Front-End</span>
                                </a>
                            </li>

                            <li>
                                <a href="custom-wordpress-development.html" >
                                    <span>WordPress Development</span>
                                </a>
                            </li>

                            <li>
                                <a href="hubspot-development-services.html" >
                                    <span>HubSpot Development</span>
                                </a>
                            </li>

                            <li>
                                <a href="contentful-development-services.html" >
                                    <span>Contentful Development</span>
                                </a>
                            </li>

                            <li>
                                <a href="shopify-ecommerce-development-services.html" >
                                    <span>Shopify Development</span>
                                </a>
                            </li>

                            <li>
                                <a href="woocommerce-development-services.html" >
                                    <span>WooCommerce Development</span>
                                </a>
                            </li>

                            <li>
                                <a href="bigcommerce-development-services.html" >
                                    <span>BigCommerce Development</span>
                                </a>
                            </li>

                            <li>
                                <a href="craft-cms-development-services.html" >
                                    <span>Craft CMS Development</span>
                                </a>
                            </li>

                            <li>
                                <a href="squarespace-development-services.html" >
                                    <span>Squarespace Development</span>
                                </a>
                            </li>

                            <li>
                                <a href="email-templates-coding-services.html" >
                                    <span>Email Templates Coding</span>
                                </a>
                            </li>

                            <li>
                                <a href="spec-to-design.html" >
                                    <span>Design Service</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="our-work.html" >Our Work</a>
                    </li>

                    <li>
                        <a href="for-agencies.html" >For Agencies</a>
                    </li>

                    <li>
                        <a href="blog/index.html">Blog</a>
                    </li>

                    <li>
                        <a href="pricing.html"  >Pricing</a>
                    </li>

                    <li class="visible-sm-block">
                        <a href="client-area"  >Client Login</a>
                    </li>
                </ul>

                <ul class="nav__right">
                    <li class="nav__conversation">
                        <a class="btn-alt btn-alt--white" href="start-conversation.html">Start a Conversation</a>
                    </li>

                    <li class="nav__order">
                        <a href="get-started/free-quote.html" class="btn-alt btn--warning">Get a Quote</a>
                    </li>

                    <li class="nav__login hidden-sm">
                        <a href="client-area">
                            <i class="ico-padlock-unlock-charcoal">
                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.7082 8.29161C11.5137 8.09711 11.2777 8.00002 10.9998 8.00002H3.33322V4.66672C3.33322 3.93049 3.59369 3.3021 4.11455 2.78124C4.63546 2.26048 5.26388 2.00005 6.00004 2.00005C6.73613 2.00005 7.36466 2.26045 7.88534 2.78124C8.40624 3.3021 8.66671 3.93052 8.66671 4.66672C8.66671 4.84722 8.73264 5.00345 8.86446 5.13538C8.99658 5.26734 9.15288 5.33335 9.33319 5.33335H10.0002C10.1806 5.33335 10.3368 5.26734 10.4689 5.13538C10.6005 5.00345 10.6667 4.84722 10.6667 4.66672C10.6667 3.38186 10.2101 2.2831 9.297 1.36984C8.38377 0.45654 7.28472 0 6.00004 0C4.71525 0 3.61631 0.45654 2.70301 1.3698C1.78986 2.28296 1.33328 3.38182 1.33328 4.66669V7.99998H0.999988C0.722299 7.99998 0.48613 8.09729 0.291663 8.29157C0.0971968 8.48586 0 8.7221 0 8.9999V15C0 15.2779 0.0972333 15.514 0.291663 15.7084C0.48613 15.9027 0.722299 16 0.999988 16H10.9998C11.2777 16 11.514 15.9027 11.7082 15.7084C11.9025 15.514 11.9999 15.2779 11.9999 15V8.99993C12 8.72214 11.9028 8.48615 11.7082 8.29161Z" fill="currentColor" />
                                </svg>
                            </i>

                            <span>Client Login</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <aside class="header__aside">
                <a href="#" class="nav-btn js-toggle" data-class="nav-visible" data-target=".nav" data-dispatch="toggle">
                    <span></span>

                    <span></span>

                    <span></span>
                </a>
            </aside>
        </header></div>
    )
}

export default Header
