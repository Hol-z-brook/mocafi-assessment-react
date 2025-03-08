import { Control, FieldValues } from 'react-hook-form'

export interface FormFieldProps<
  T extends FieldValues = Record<string, unknown>,
> {
  control: Control<T>
  name: string
  label: string
  placeholder?: string
  type?: string
}
