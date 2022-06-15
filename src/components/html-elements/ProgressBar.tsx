import React from "react";
import styled from "styled-components";

const ProgressBar = ({ wPercent, position }: any) => {
    return (
      <ProgressWrapper className="progress-wrapper">
        <ProgressRail className="progress-rail" width={wPercent}></ProgressRail>
        <ProgressTrack className="progress-track" position={wPercent * (1 - position)}></ProgressTrack>
      </ProgressWrapper>
    );
};

const ProgressWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 6px;
  touch-action: none;
  box-sizing: border-box;
`;

const ProgressRail = styled.div<{ width: number }>`
  position: absolute;
  width: ${(props) => props.width}%;
  height: 4px;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 6px;
`;

const ProgressTrack = styled.div<{ position: number }>`
  position: absolute;
  width: ${(props) => props.position}%;
  height: 4px;
  background-color: #e9e9e9;
  border-radius: 6px;
  transition: width 0.5s;
`;

export default ProgressBar;