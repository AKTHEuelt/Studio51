"use client";

import styled, { keyframes } from "styled-components";

// Keyframe animation with a larger max-height for a bigger effect
const wave = keyframes`
  0%, 100% {
    height: 15px; /* Increased base height */
  }
  50% {
    height: 80px; /* Increased max height */
  }
`;

// Container with more spacing
const WaveformContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px; /* Increased gap */
  height: 100px; /* Increased height to contain taller bars */
  margin: 4rem 0 5rem 0; /* Increased top and bottom margin for more space */
`;

// Bars with randomized animation properties
const WaveformBar = styled.div`
  width: 12px; /* Made bars slightly wider */
  height: 15px;
  background-color: #ff9800; /* Orange color */
  border-radius: 6px;
  animation-name: ${wave};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  /* Randomized durations and delays to break the pattern */
  &:nth-child(1) { animation-duration: 1.5s; animation-delay: 0.2s; }
  &:nth-child(2) { animation-duration: 1.2s; animation-delay: 0.5s; }
  &:nth-child(3) { animation-duration: 1.8s; animation-delay: 0.1s; }
  &:nth-child(4) { animation-duration: 1.4s; animation-delay: 0.8s; }
  &:nth-child(5) { animation-duration: 1.6s; animation-delay: 0.4s; }
  &:nth-child(6) { animation-duration: 1.3s; animation-delay: 0.6s; }
  &:nth-child(7) { animation-duration: 1.9s; animation-delay: 0.3s; }
`;

// The dedicated Waveform component now with more bars
export default function Waveform() {
  return (
    <WaveformContainer>
      <WaveformBar />
      <WaveformBar />
      <WaveformBar />
      <WaveformBar />
      <WaveformBar />
      <WaveformBar />
      <WaveformBar />
    </WaveformContainer>
  );
}

