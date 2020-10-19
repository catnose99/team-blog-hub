export const ContentWrapper: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return <div className="content-wrapper">{props.children}</div>;
};

export const UndoWrapForScroll: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <div className="undo-wrap-for-scroll">{props.children}</div>;
};
