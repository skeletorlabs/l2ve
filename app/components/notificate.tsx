import Link from "next/link";
import { toast } from "react-toastify";

type Props = {
  type: string;
  title: string;
  message: string;
  link: string;
};

export default function Notificate({ type, title, message, link }: Props) {
  const messageWithoutLink = <div className="inline">{message}</div>;

  const messageWithLink = (
    <Link href={link} className="inline" target="blank">
      <span className="mr-2">
        {message}
        <b className="text-white ml-2 text-sm underline">view transaction</b>
      </span>
    </Link>
  );

  const container = (
    <div className="px-2 space-y-1">
      <div className="text-white text-xl">{title}</div>
      <div className="text-levigray text-md">
        {link ? messageWithLink : messageWithoutLink}
      </div>
    </div>
  );

  switch (type) {
    case "success":
      return toast.success(container);
    case "error":
      return toast.error(container);
    default:
      return toast.info(container);
  }
}
