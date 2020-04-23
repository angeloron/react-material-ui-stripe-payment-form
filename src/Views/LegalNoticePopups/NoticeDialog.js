import React, { useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    Link,
    Typography,
} from "@material-ui/core";

const NoticeDialog = ({separator}) => {

    const [open, toggleOpen] = useState(false);
    const [dialog, setDialog] = useState("legal");

    const clickHandler = (event) => {
        event.preventDefault();
        setDialog(event.target.name);
        toggleOpen(true);
    };

    const contentObject = {
        legal: {
            name: "legal",
            title: "Legal Notice",
            description: () => <>This website is owned and operated by _________.<br /><br />To contact us:<br />Name<br />Address line<br />postcode city<br />country<br /><br />Phone: ___________</>
        },
        privacy: {
            name: "privacy",
            title: "Privacy Notice",
            description: () => <>
                The present website, including all information and materials contained on it, are managed and controlled by _________, ADDRESS.<br /><br />
                Our contact details are provided on our Legal Notice.<br /><br />
                The terms and conditions set out in this Privacy Notice apply in conjunction with the more detailed Privacy Policies.<br /><br />
                <Typography variant="h6">Our Commitment</Typography>
                We are committed to respecting and ensuring the privacy of all the users of this website.<br />
                We will be transparent about the purposes for which we collect data, including personal data, and about the kinds of data we collect and how we use them.<br /><br />
                <Typography variant="h6">Your Consent</Typography>
                By using this website, you consent to the terms of this Privacy Notice.<br />
                We may change the terms of this Notice and these Policies from time to time.<br />
                If such changes are made, we will promptly place notices on all the websites so that you can be aware of those changes.<br /><br />
                Your continued use of this websites subsequent to such notified changes will mean that you accept those changes, and will be on the terms of this Privacy Notice and those Privacy Policies, as amended from time to time.<br /><br />
                What types of information do we collect and store?<br /><br />
                <Typography variant="h6">Personal Information</Typography>
                You can access most of the pages on the website without telling us who you are and without revealing any personal information.<br /><br />
                We do not collect personal information (such as your name, address, phone number or e-mail address, or other personal details) on the website unless you choose to provide them.<br />
                For example, where you express an interest in joining or donating to one of our organizations, subscribe to our email updates, or buy a book or CD or DVD, we will often provide you with an online form that you can fill in and submit online.<br />
                In all these cases, we will inform you of the purpose of the form (unless that is obvious) and provide you with options as concerns the uses of the data (see below: "Your Rights: Right to object").<br />
                We only collect personal information that is relevant and adequate and not excessive for the purposes in question.<br /><br />
                Non-personal, aggregate data; the use of "cookies" and of Google Analytics<br /><br />
                <Typography variant="h6">General</Typography>
                Our web servers create anonymous logs during user visits to the website, which are used by us to create aggregate statistics, for example about when the website is accessed, the pages which refer visitors to the website, the type of web browsers visitors use and which pages are viewed.<br />
                These statistics help us understand how the website is used and provide us with valuable information for improving it in the future.<br />
                In this, we use both our own "cookies" and a special tool, Google Analytics, as described below.<br /><br />
                <Typography variant="h6">Use of Cookies</Typography>
                A cookie is a text-only piece of information that a website transfers to your computer's hard disk so that the website can remember who you are.<br />
                A cookie will normally contain the name of the Internet domain from which the cookie has come, the "lifetime" of the cookie, and a value, usually a randomly generated unique number.<br /><br />
                We use cookies and collect IP addresses (an IP address is a number that can uniquely identify a specific computer or other network device on the internet).<br />
                We use our own analysis software to look at IP addresses and cookies for the purpose of enhancing your user experience.<br />
                This information is not used to develop a personal profile of you.<br /><br />
                Users have the opportunity to set their devices to accept all cookies, to notify them when a cookie is issued, or not to receive cookies at any time.<br />
                To prevent the download of cookies, or otherwise control how cookies are used on your computer, please read the help information supplied with your Internet browser software or go to: <Link href="http://www.allaboutcookies.org" target="_blank">http://www.allaboutcookies.org</Link>.<br />
                However please note that if you do this you may not be able to use the full functionality of this website.<br /><br />
                <Typography variant="h6">Google Analytics</Typography>
                Our website also uses Google Analytics, a web analytics service provided by Google, Inc. (“Google”).<br />
                Google Analytics uses “cookies” to help the website analyze how users use the site (as described above).<br />
                The information generated by the Google Analytics cookie about your use of the website (including a truncated IP address: see below) will be transmitted to and stored by Google on their servers.<br />
                Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators such as us, and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf.<br /><br />
                As explained above, you may refuse the use of cookies—and thus also the use of the Google Analytics cookie—by selecting the appropriate settings on your browser, but this too may affect the extent to which you can fully use the website.<br /><br />
                <Typography variant="h6">Your Agreement</Typography>
                In accordance to what we already said at the beginning of this Notice, by using this website, you consent to the processing of data about you, and of aggregate data, by us and by Google in the manner and for the purposes set out above.<br /><br />
                <Typography variant="h6">How do we use information collected?</Typography>
                Your personal information will be retained by us and its service providers in a secure environment, will be kept confidential, and will only be used in connection with the purposes for which it is submitted, or as necessary for us to comply with our legal obligations.<br /><br />
                <Typography variant="h6">Sharing of your personal information?</Typography>
                Other than as described below, the information you provide will not be sold or rented nor will it be shared with any person or entity unrelated to our company, unless we are required to disclose the information by law.<br /><br />
                We may share relevant personal data, obtained through this website for hosting and processing:<br /><br />
                Our website may be hosted by a third party service provider and therefore any personal details you submit through this website may be processed by such a third party service provider.<br />
                We may also use other third parties to process some of your personal details, for example to send you books or other goods you have ordered (so-called "fulfillment").<br />
                All of these third party services providers will process your personal information only on our behalf and will be bound by strict confidentiality conditions.<br /><br />
                <Typography variant="h6">Payment processing and fraud</Typography>
                Your card or other details may be disclosed to banks or relevant financial institutions to arrange payments.<br />
                In the case of a suspected fraudulent transaction, your details may be further disclosed for the sole purpose of performing further checks (for example, disclosure to a credit checking agency).<br />
                Trans-border data flows<br />
                If you have accessed this webpage from within the European Union or the European Economic Area, you should be aware that the disclosure of your personal information discussed above will involve transfer of that information to us.<br /><br />
                <Typography variant="h6">Your Rights</Typography>
                Right of access to your personal information:<br />
                You have a right of access to any personal information that we collect about you on this website and that is retrievable from this website by reference to you personally.<br />
                Right of correction:<br />
                You have a right to correct the information we hold on you, or to have it deleted, if it is incorrect, irrelevant or out of date.<br />
                Right to object:<br />
                When we ask for your contact information in various forms, we will explain to you what we want to use those details for, and we will offer you options in regard of their use.<br />
                Specifically, we will explain if we want to use certain information, such as your phone number or mobile phone number or email address, to contact you.<br />
                You can also, at any time, let us know by simple email if you do not want to be contacted any more, either in general or by certain special means (e.g., by text or phone call).<br />
                We will then, within a short period, ensure that such follow-up contacts are stopped.<br /><br />
                <Typography variant="subtitle2">
                    IF YOU HAVE ANY QUESTIONS ABOUT THIS PRIVACY NOTICE OR OUR PRIVACY POLICES; OR IF YOU WANT TO EXERCISE ANY OF THE ABOVE-MENTIONED RIGHTS.
                </Typography>
            </>
        },
        tou: {
            name: "tou",
            title: "Terms of Use",
            description: () => <>
                This website featured to you is subject to the following Terms and our Privacy Notice. If you visit our websites you accept these conditions.<br />
                Please read them carefully.<br /><br />
                <Typography variant="h6">1. Scope and Addressees</Typography>
                This website is operated and administered by _______ (see "Legal Notice"), and therefore complies with the applicable laws.<br /><br />
                <Typography variant="h6">2. Data Privacy Protection</Typography>
                Personally identifiable data of the user of this website will be collected, used and processed in compliance with applicable laws on data privacy protection and our "Privacy Notice".<br /><br />
                <Typography variant="h6">3. Intellectual Property Rights</Typography>
                All materials available on this site are protected by copyright laws and international copyright treaty provisions.<br /><br />
                <Typography variant="h6">4. Hyperlinks</Typography>
                The Site may contain hyperlinks to the web pages of third parties.<br />
                We shall have no liability for the contents of such web pages and does not make representations about or endorse such web pages or their contents as its own, as we do not control the information on such web pages and is not responsible for the contents and information given thereon. The use of such web pages shall be at the sole risk of the user.<br /><br />
                <Typography variant="h6">5. Applicable Law, Place of Jurisdiction</Typography>
                These Terms of Use including its disclaimers, terms and conditions shall be governed by—and all disputes relating to or in connection with these Terms of Use or their subject matter shall be resolved in accordance with—the European laws, without giving effect to any principles of conflicts of laws.<br />
                We reserve the right to make changes to this site and these disclaimers, terms and conditions at any time.<br />
                User hereby irrevocably and unconditionally consents to submit to the exclusive jurisdiction of the European court for any litigation arising out of or relating to use of this site (and agrees not to commence any litigation relating thereto except in such courts) waives any objection to the laying of venue of any such litigation.<br /><br />
                <Typography variant="h6">6. Severability</Typography>
                The provisions of these Terms of Use are intended to be severable. If for any reason any provision of these Terms of Use shall be held invalid or unenforceable in whole or in part in any jurisdiction, such provision shall, as to such jurisdiction, be ineffective to the extent of such invalidity or unenforceability without in any manner affecting the validity or enforceability thereof in any other jurisdiction or the remaining provisions hereof in any jurisdiction.<br />
            </>
        },
        trademarks: {
            name: "trademarks",
            title: "Trademarks",
            description: () => <>
                All materials available on this site are protected by copyright laws and international copyright treaty provisions.<br />
                This material has been placed on this Internet site under the authority of the copyright owner for the sole purpose of viewing of the materials by users of this site.<br />
            </>
        },
    }

    return <Typography variant="caption">
        {Object.keys(contentObject).map((x, i) => <span key={i}>{i > 0 && separator}&nbsp;<Link href="#" name={contentObject[x].name} onClick={clickHandler}>{contentObject[x].title}</Link></span>)}
        <Dialog
            open={open}
            onClose={() => toggleOpen(false)}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
        >
            <DialogTitle id="dialog-title" color="primary">
                {contentObject[dialog].title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="dialog-description">
                    {contentObject[dialog].description()}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => toggleOpen(false)} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </Typography>
}

export default NoticeDialog;