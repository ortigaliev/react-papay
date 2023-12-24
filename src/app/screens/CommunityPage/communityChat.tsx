import { Avatar, Box, Stack } from "@mui/material";
import React, {
    useState
} from "react";
import SendIcon from "@mui/icons-material/Send";

export function CommunityChat() {
    /** INITIALIZATIONS **/
    const [messagesList, setMessagesList] = useState([]);

    return (
        <Stack className={"chat_frame"}>
            <Box className={"chat_top"}>Chatting</Box>
            < Box className={"chat_content"}>
            <Stack className={"chat_main"}>
        <Box
        flexDirection={"row"}
        style={{ display: "flex" }}
        sx={{ m: "10px 0px"}}>
        <div className={"msg_left"}> Chatting</div>

        </Box>
        {/* This is your message */}
        <Box
        flexDirection={"row"}
        style={{ display: "flex" }}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
        sx={{ m: "10px 0px"}}>
        <div className={"msg_right"}>This is your message</div>
        </Box>

        {/* This is others message */}
        <Box
        flexDirection={"row"}
        style={{ display: "flex" }}
        sx={{ m: "10px 0px"}}>
        <Avatar alt={"Max"} src={"/community/cute_girl.jpg"}/>
        <div className={"msg_left"}>This is others message</div>
        </Box>
        {/* ------------------------------ */}
        {/* sizning habaringiz */}
        <Box
        flexDirection={"row"}
        style={{ display: "flex" }}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
        sx={{ m: "10px 0px"}}
        >
        <div className={"msg_right"}>Hi there?</div>
        </Box>
        {/* ------------------------------ */}

        {/* boshqalarni habari */}
        <Box
        flexDirection={"row"}
        style={{ display: "flex" }}
        sx={{ m: "10px 0px"}}></Box>
        <Avatar alt={"martin"} src={"/community/cute_girl.jpg"}/>
        <div className={"msg_left"}>How is it going?</div>
        {/* ------------------------------ */}
        </Stack>
        </Box>
        <Box className={"chat_bott"}>
        <input
        type={"text"}
        name={"message"}
        className={"msg_input"}
        placeholder={"send"}
        />
        <button className={"send_msg_btn"}>
        <SendIcon style={{ color: "#fff" }} />
        </button>
        </Box>
        </Stack>
        )
    }