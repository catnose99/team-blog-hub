// TO [name].tsx

// types
type Props = {
  keyword: string;
};

export const SearchWord: React.FC<Props> = (props) => {
  const { keyword } = props;
  const searchEngineUrl =
    'https://duckduckgo.com/?q=site%3Ayuchrszk.blogspot.com';
  const searchUrl = `${searchEngineUrl} + ${keyword}`;
  return (
    <a href={`${searchUrl}`}>
      <span>{`${keyword}`}</span>
    </a>
  );
};
