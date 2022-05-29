import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              {!!list.tech_stack && 
                <>
                  <span className="stackTitle">Мы принимаем:</span>
                  <span className="tags">{list.tech_stack}</span>
                </>
              }
            </Stack>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
