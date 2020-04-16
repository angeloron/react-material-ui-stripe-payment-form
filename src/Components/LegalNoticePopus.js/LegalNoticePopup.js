import React, { useState, useEffect } from 'react'
import {
    AppBar,
    Toolbar,
    Fab,
    Typography
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import NoticeDialog from "./NoticeDialog";
import { setCookie, getCookie } from "../../constants/functions";

const LegalNoticePopup = () => {

    const [bottomPopup, setBottomPopup] = useState(false);

    useEffect(() => {
        getCookie("CookieAuth") === null && setBottomPopup(true);
        setCookie("CookieAuth", 1, 7);
    }, []);

    if (!bottomPopup) return null

    return <AppBar position="fixed" elevation={0} component="div" color="default" style={{ top: "auto", bottom: 0 }}>
        <Toolbar style={{ justifyContent: "center" }}>
            <div>
                <Typography variant="caption">By using our site, you acknowledge that you have read and understand our</Typography>
                <NoticeDialog separator="," />
            </div>
            <Fab onClick={() => setBottomPopup(false)} size="small" style={{ marginLeft: "10px", minWidth: "40px" }}>
                <Close />
            </Fab>
        </Toolbar>
    </AppBar>
}

export default LegalNoticePopup
