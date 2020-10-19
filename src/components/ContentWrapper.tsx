export const ContentWrapper: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return <div className="content-wrapper">{props.children}</div>;
};
