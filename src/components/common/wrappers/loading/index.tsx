import { PropsWithChildren } from "react";
import { CircleLoading } from "../../loading";

type Props = { loading: boolean };

export default function Loading({ children, loading }: PropsWithChildren<Props>) {
  return loading ? <CircleLoading /> : children;
}
