import { useEffect, useState } from "react";

const useDataStateSwitch = (
  reference: React.RefObject<HTMLElement | undefined>,
  target: React.RefObject<HTMLElement | undefined>
) => {
  const [attr, setAttr] = useState(target)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (target?.current && reference?.current) {
        if (isIntersecting(reference.current, target.current)) {
          target.current.setAttribute("data-state", "on");
        } else {
          target.current.setAttribute("data-state", "off");
        }
      }
    });
  }, [reference, target]);

  return {target}
};

function isIntersecting(referenceEl: HTMLElement, targetEl: HTMLElement) {
  const rect1 = referenceEl.getBoundingClientRect();
  const rect2 = targetEl.getBoundingClientRect();

  return !(
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right
  );
}

export default useDataStateSwitch;
