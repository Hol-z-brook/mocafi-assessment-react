import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { Control, FieldValues, Path } from 'react-hook-form'

interface NameFieldProps<T extends FieldValues = Record<string, unknown>> {
  control: Control<T>
  name?: Path<T>
  label?: string
  placeholder?: string
}

export function NameField<T extends FieldValues = Record<string, unknown>>({
  control,
  name = 'name' as Path<T>,
  label = 'Name',
  placeholder,
}: NameFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="lg:text-lg">{label}</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder={placeholder || label}
              className="lg:h-12 lg:text-lg"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
