import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTelegram, FaYoutube } from "react-icons/fa";
import {Button} from "../../globalStyle";
import { 
    FooterContainer,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    FormInput,
    Form,
    FooterLink,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinksWrapper,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    SocialIcon,
    WebsiteRights,

} from "./FooterStyled";

const Footer = ()=>{
    return(
        <>
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership 
                    to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" 
                    placeholder="Your email" />
                       <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                       <SocialIcon /> ZiyoWorld
                    </SocialLogo>
                    <WebsiteRights>ZiyoWorld © {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" 
                        arial-label="Facebook">
                         <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        arial-label="Instagram">
                         <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        arial-label="Youtube" rel="noopener">
                         <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        arial-label="Telegram">
                         <FaTelegram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        arial-label="LinkedIn">
                         <FaLinkedinIn />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
        </>
    )
}

export default Footer;