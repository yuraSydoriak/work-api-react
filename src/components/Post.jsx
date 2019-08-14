import React from "react";
import styled from "styled-components";
import { device } from "../helpers/devices_mediaQueries";
import { Blockquote, Icon, Card, Elevation, Divider } from "@blueprintjs/core";

const CardWrapper = styled.div`
  width: 20%;
  margin: 15px;

  @media ${device.laptop} {
    width: 30%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const AccentedSpan = styled.span`
  color: #106ba3;
  font-weight: bold;
`;
const blockquoteStyles = {
  height: "36px",
  overflow: "hidden"
};
const warningImage = <Icon icon="error" iconSize="16" intent="primary" />;

const Post = ({ author, created_at, num_comments, title, points, url }) => (
  <CardWrapper>
    <Card interactive={true} elevation={Elevation.TWO}>
      <Blockquote style={blockquoteStyles}>
        <AccentedSpan>
          {title ? title : <>{warningImage} Sorry...Tittle not found!</>}
        </AccentedSpan>
      </Blockquote>
      <p>
        Author: <AccentedSpan>{author}</AccentedSpan>
      </p>
      <Details>
        <Icon icon="calendar" iconSize="16" intent="primary" />
        <Divider />
        <p>{new Date(created_at).toLocaleDateString()}</p>
        <Divider />
        <p>Comments: {num_comments ? num_comments : 0}</p>
        <Divider />
        <p>Points: {points ? points : 0}</p>
      </Details>
    </Card>
  </CardWrapper>
);

export default Post;
