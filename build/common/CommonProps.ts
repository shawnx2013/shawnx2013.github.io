import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React, { MutableRefObject } from 'react';

export interface RefProps {
  refProp: React.RefObject<any>;
}

export interface CommonProps {
  handleSectionChange: (sectionId: string, inView: boolean) => void;
}

export interface SectionType {
  id: string;
  label: string;
  icon: IconDefinition;
  isActive: boolean;
}