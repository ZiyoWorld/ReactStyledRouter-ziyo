import React from "react";
import {Button} from "../../globalStyle";
import { 
    FooterContainer,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    FormInput,
    Form

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
            {/* <FooterLinksContainer>
                <FooterLinksWrapper>

                </FooterLinksWrapper>
            </FooterLinksContainer> */}
        </FooterContainer>
        </>
    )
}

export default Footer;