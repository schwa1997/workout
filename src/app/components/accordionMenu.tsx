"use client";

import React, { FC } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { WorkOutList } from "./workoutList";
import { CustomizedAccordionsList } from "./accordianList";

type AccordionData = WorkoutGroupByOrgan[];
interface AccordionProps {
  data: AccordionData;
}
export const CustomizedAccordions: FC<AccordionProps> = ({ data }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <Typography>{item.organName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.workoutGroupBySubOrgan.map((item, index) => (
              <Accordion key={`${index}-${index}`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-${index}d-content`}
                  id={`panel${index}-${index}d-header`}
                >
                  <Typography>{item.suborganName}</Typography>
                </AccordionSummary>

                <CustomizedAccordionsList data={item.workoutGroupByEquipment} />
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
