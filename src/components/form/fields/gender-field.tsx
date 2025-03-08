import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/src/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select'
import { Control, FieldValues, Path } from 'react-hook-form'

interface GenderFieldProps<T extends FieldValues = Record<string, unknown>> {
  control: Control<T>
  name?: Path<T>
  label?: string
  placeholder?: string
}

export function GenderField<T extends FieldValues = Record<string, unknown>>({
  control,
  name = 'gender' as Path<T>,
  label = 'Gender',
  placeholder = 'Select your gender',
}: GenderFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="lg:text-lg">{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="lg:h-12 lg:text-lg">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Rather not say">Rather not say</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
