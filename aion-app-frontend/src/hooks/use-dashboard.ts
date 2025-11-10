import React from "react";


export function useDashboard(startTab: string) {
  const [selectedTab, setSelectedTab] = React.useState(startTab || 'overview');
  return { selectedTab, setSelectedTab };
}