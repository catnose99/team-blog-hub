type Props = {
  className?: string;
}

export const ContentWrapper: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const { className, children } = props;
  return <div className={`content-wrapper${className ? " " + className : ""}`}>{children}</div>;
};

export const UndoWrapForScroll: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <div className="undo-wrap-for-scroll">{props.children}</div>;
};
