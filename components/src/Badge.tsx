import React from "react";
import styled from "@emotion/styled";

interface BadgeProps {
  onClick: () => void;
  children: string;
  className?: string;
}

const Badge = ({ onClick, children, className }: BadgeProps) => (
  <div className={className} onClick={onClick}>
    {children}
  </div>
);

export default styled(Badge)`
  background-color: red;
  width: 10rem;
  display: border-box;
  padding: 1rem;
  text-align: center;
`;
