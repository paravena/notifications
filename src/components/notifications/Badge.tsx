type Props = {
  text: string;
};
const Badge = ({ text }: Props) => {
  return (
    <div className="absolute right-0 top-0 inline-flex items-center justify-center rounded-full bg-red-400 px-2 py-1 text-xs text-white group-hover:bg-red-600">
      {text}
    </div>
  );
};

export default Badge;
