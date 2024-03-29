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
    <div className="fixed top-0 left-60 h-fit">
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
          <AccordionDetails>
            <div className="grid grid-flow-col gap-8 m-9">
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
