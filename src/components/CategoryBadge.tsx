import { LucideIcon } from "lucide-react";

interface CategoryBadgeProps {
  icon: LucideIcon;
  label: string;
  color: "blue" | "purple" | "teal" | "orange" | "red";
}

const colorMap = {
  blue: "bg-blue",
  purple: "bg-purple",
  teal: "bg-teal",
  orange: "bg-orange",
  red: "bg-red",
};

export const CategoryBadge = ({ icon: Icon, label, color }: CategoryBadgeProps) => {
  return (
    <div className={`inline-flex items-center gap-2 ${colorMap[color]} text-white px-4 py-2 rounded-full text-sm font-light transition-all`}>
      <Icon size={16} strokeWidth={1.5} />
      <span>{label}</span>
    </div>
  );
};
