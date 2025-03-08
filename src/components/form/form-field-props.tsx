import { Control } from 'react-hook-form'

export interface FormFieldProps {
  control: Control<any>
  name: string
  label: string
  placeholder?: string
  type?: string
}
