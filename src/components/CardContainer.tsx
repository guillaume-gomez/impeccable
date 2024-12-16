import { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
}

function CardContainer({children} : CardContainerProps) {
  return (
    <div className="flex flex-row gap-6 [perspective:800px]">
      {children}
    </div>
  );
}

export default CardContainer;