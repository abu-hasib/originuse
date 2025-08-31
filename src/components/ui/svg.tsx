import SVG from 'react-inlinesvg'

interface RSVGProps {
  src: string;
  width: number | string;
  height?: number | string | undefined;
}

function RSVG(props: RSVGProps) {
  const { src, width, height } = props;
  return (
    <SVG
      cacheRequests={true}
      loader={<span>Loading...</span>}
      src={src}
      width={width}
      height={height || width}
      uniquifyIDs={true}
    />
  );
}

export default RSVG;
