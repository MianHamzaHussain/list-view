import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Card,
  CardHeader,
  Heading,
  Stack,
  Checkbox,
  CardBody,
  Badge,
} from "@chakra-ui/react";
export default function CheckList() {
  return (
    <Box className="container">
      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap={0} 
      >
        <GridItem>
          <Card>
            <CardHeader bgColor={"#ECF8EB"}>
              <Heading size="md" color={"#72C16F"}>
                Client Report
              </Heading>
            </CardHeader>

            <CardBody>
              <Stack spacing="2">
                <Checkbox defaultChecked colorScheme={"green"} className="clientCheckbox">
            
                  Linkedin Bio
                </Checkbox>
                <Checkbox colorScheme={"green"}>List Of Past Jobs</Checkbox>
                <Checkbox colorScheme={"green"}>Years Of Experience</Checkbox>
                <Checkbox colorScheme={"green"} disabled>
                  Current Job Description{" "}
                  <span className="disabledBadge">DISABLED</span>
                </Checkbox>
                <Checkbox defaultChecked colorScheme={"green"}>
                  Current Experience
                </Checkbox>
                <Checkbox colorScheme={"green"} disabled>
                  Current Job Specialities{" "}
                  <span className="disabledBadge">DISABLED</span>
                </Checkbox>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <Card>
          <CardHeader bgColor={"#F8EFFD"}>
            <Heading size="md" color={"#D289EC"}>
              Account Based Personalization
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2">
              <Checkbox
                defaultChecked
                colorScheme={"purple"}
                
              >
                Linkedin Bio
              </Checkbox>
              <Checkbox colorScheme={"purple"} >
                List Of Past Jobs
              </Checkbox>
              <Checkbox colorScheme={"purple"} >
                Years Of Experience
              </Checkbox>
              <Checkbox colorScheme={"purple"} disabled>
                Current Job Description
                <span className="disabledBadge">DISABLED</span>
              </Checkbox>
              <Checkbox
                defaultChecked
                colorScheme={"purple"}
                
              >
                Current Experience
              </Checkbox>
              <Checkbox colorScheme={"purple"} disabled>
                Current Job Specialities
                <span className="disabledBadge">DISABLED</span>
              </Checkbox>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
