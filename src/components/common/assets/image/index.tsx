import { HTMLProps } from "react";

interface Props {
  usePrefix?: boolean;
}

export default function Image({ usePrefix = true, ...props }: HTMLProps<HTMLImageElement> & Props) {
  const prefix = process.env.REACT_APP_IMAGE_URL_PREFIX ?? "";
  const src = usePrefix ? prefix + props.src : props.src;

  // we can handle more optimizations for images. But time is running out

  return <img {...props} src={src} />;
}
