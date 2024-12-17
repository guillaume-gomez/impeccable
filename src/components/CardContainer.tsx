import { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
}

function CardContainer({children} : CardContainerProps) {
  /*const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { sayHello });
    }
    return child;
  });*/

  return (
    <div className="flex flex-row gap-6 [perspective:800px]">
      {children}
    </div>
  );
}

export default CardContainer;