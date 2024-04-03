import React, { FC } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { ItemCard } from "./itemCard";


interface AccordionProps {
  data: WorkoutGroupByEquipment[]; // Corrected data type
}

export const CustomizedAccordionsList: FC<AccordionProps> = ({ data }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="relative max-w-screen-lg">
      {data.map((group, index) => (
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
            <Typography>{group.equipmentName}</Typography>
          </AccordionSummary>
          <AccordionDetails className="fixed top-0 left-1/4 bg-green-200 overflow-y-auto h-screen">
            <div className="grid grid-cols-3 grid-flow-row gap-4 m-2">
              {group.workout.map((workout, workoutIndex) => (
                <ItemCard
                  key={workout.key}
                  title={workout.workoutName}
                  img={workout.imgUrl}
                />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
