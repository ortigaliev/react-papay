import React, { useState } from "react";
import { Container, Box, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import "../../../css/community.css";
import { TargetArticles } from "./targetArticles";
import { CommunityChat } from "./communityChat";
import TabContext from "@mui/lab/TabContext";
import TabList  from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function CommunityPage(props: any) {
  // INITIALIZATIONS
  const [value, setValue] = React.useState("1");

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    console.log(value);
  };
  return (
    <div className="community_page">
      <div className="community_frame">
        <Container sx={{ mt: "50px", mb: "50px" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <CommunityChat />
            <Stack
              className="community_all_frame"
              inputMode={"text"}
              style={{ border: "1px solid #fff" }}
            >
              <TabContext value={value}>
                <Box className={"article_tabs"}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      style={{ borderColor: "blue" }}
                    >
                      <Tab label="All Articles" value={"1"} />
                      <Tab label="Celebritis" value={"2"} />
                      <Tab label="Restaurant rate" value={"3"} />
                      <Tab label="Story" value={"4"} />
                    </TabList>
                  </Box>
                </Box>

                <Box className={"article_main"}>
                  <TabPanel value={"1"}>
                    <TargetArticles targetBoArticles={[1, 2, 3, ]} />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <TargetArticles targetBoArticles={[1, 2, 3, 4, 5]} />
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <TargetArticles targetBoArticles={[1, 2, ]} />
                  </TabPanel>
                  <TabPanel value={"4"}>
                    <TargetArticles targetBoArticles={[1, 2, 3, 4, ]} />
                  </TabPanel>
                </Box>

                <Box className={"article_bott"}>
                  <Pagination
                    count={5}
                    page={1}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                        color={"primary"}
                      />
                    )}
                    onChange={handlePaginationChange}
                  />
                </Box>
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}