import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";

const messages = [
    "20% off on your first order!",
    "Bonus sale starts now!! visit any of our stores.",
    "Please like, share and subscribe :)",
  ];
  export default function Promotions() {
    const[messageIndex,setMessageIndex]=useState(0)
    const[show,setShow]=useState(true);

    useEffect(() => {
        
const intervalId = setInterval(() => {
  setMessageIndex((i) => (i + 1) % messages.length)},4000);

  return () => {
  clearInterval(intervalId);
};
}, []);

    return(

        <PromotionsContainer>
            <Slide direction="left" in={show}>
            <Box dispay={"flex"} justifyContent="center" alignItems={"center"}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>

            </Box>
        </Slide>

        </PromotionsContainer>
    )


    

  }