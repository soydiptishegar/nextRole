const accentStyles = {
  blue: {
    card: "bg-blue-500/10 border-blue-500/20 hover:border-blue-400",
    button: "bg-blue-500/10 border-blue-500/20 hover:border-blue-400",
  },
  green: {
    card: "bg-greenCustom/10 border-greenCustom/20 hover:border-greenCustom/40",
    button: "bg-greenCustom/10 border-greenCustom/20 hover:border-greenCustom/40",
  },
};

const ActionCard = ({
  title,
  description,
  accent = "blue",
  action,
  onClick,
}) => {
  return (
    <div
      className={`rounded-2xl p-8 border transition hover:scale-[1.02]
        ${accentStyles[accent].card}`}
    >
      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="text-sm text-zinc-400 mt-2 max-w-sm">
        {description}
      </p>

      <button
        onClick={onClick}
        className={`mt-6 px-5 py-2 rounded-lg text-sm font-medium border
          ${accentStyles[accent].button}`}
      >
        {action}
      </button>
    </div>
  );
};

export default ActionCard;
