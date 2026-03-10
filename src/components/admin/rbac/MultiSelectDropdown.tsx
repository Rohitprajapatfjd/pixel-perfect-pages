import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface MultiSelectDropdownProps {
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}

const MultiSelectDropdown = ({ options, selected, onChange }: MultiSelectDropdownProps) => {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
      return;
    }
    onChange([...selected, option]);
  };

  return (
    <div className="space-y-2 rounded-md border p-3">
      {options.map((option) => (
        <Label key={option} className="flex cursor-pointer items-center gap-2 text-sm">
          <Checkbox checked={selected.includes(option)} onCheckedChange={() => toggle(option)} />
          {option}
        </Label>
      ))}
    </div>
  );
};

export default MultiSelectDropdown;
