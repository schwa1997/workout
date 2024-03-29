"use client";

import React, { FC } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { ItemCard } from "./itemCard";
import { WorkOutList } from "./workoutList";

type AccordionData = WorkoutGroup[];
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
            {item.suborgans.map((subItem, subIndex) => (
              <Accordion key={`${index}-${subIndex}`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-${subIndex}d-content`}
                  id={`panel${index}-${subIndex}d-header`}
                >
                  <Typography>{subItem.suborganName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {Object.entries(subItem.workout).map(
                    ([equipmentType, workouts]) => (
                      <div key={equipmentType}>
                        <Accordion
                          key={`${index}-${subIndex}-${equipmentType}`}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-${subIndex}-${equipmentType}d-content`}
                            id={`panel${index}-${subIndex}-${equipmentType}d-header`}
                          >
                            <Typography>{equipmentType}</Typography>
                          </AccordionSummary>
                          <WorkOutList workouts={workouts} />
                        </Accordion>
                      </div>
                    )
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
