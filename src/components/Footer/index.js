import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaYoutube, FaLinkedin,
    FaTwitter
}
    from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
}
    from './FooterElements';
const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>Carrers</FooterLink>
                            <FooterLink to='/'>Franchises</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Privacy Policy</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinkItems>


                    </FooterLinksWrapper>


                </FooterLinksContainer> */}

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Kimonos KDF
                        </SocialLogo>
                        <WebsiteRights> Kimonos KDF © {new Date().getFullYear()}&nbsp;
                             |&nbsp; All rigths reserved</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="//wa.me/5521964653565" target="_blank"
                                aria-label="Whatsapp">
                                <FaWhatsapp />
                            </SocialIconLink>

                            <SocialIconLink href="//www.facebook.com/kimonoskdf/" target="_blank"
                                aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="//https://www.instagram.com/kimonoskdf/" target="_blank"
                                aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
