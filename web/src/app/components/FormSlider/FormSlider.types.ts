export interface FormSliderProps {
  field: string;
  label: string;
  required: boolean;
  minVal: number;
  maxVal: number;
  defaultVal: number;
  marks: { [key: number]: number };
}
