import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
       <BannerContainer>
        <BannerImage src="/images/banner/lake-3612279_1920.jpg"></BannerImage>
        <BannerContent>
            <Typography varaiant="h6">Huge Collection</Typography>
            <BannerTitle varaiant="h2">New Bags</BannerTitle>
                <BannerDescription varaiant="subtitle">
                   
                   
                </BannerDescription>
            
        </BannerContent>
       </BannerContainer>
      );
    }