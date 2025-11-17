// pill component to be used in Card component
import React from "react";
interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      {title}
    </div>
  );
};

export default Pill;
