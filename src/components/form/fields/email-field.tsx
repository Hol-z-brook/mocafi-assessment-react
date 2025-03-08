import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { Control, FieldValues, Path } from 'react-hook-form'

interface EmailFieldProps<T extends FieldValues = Record<string, unknown>> {
  control: Control<T>
  name?: Path<T>
  label?: string
  placeholder?: string
}

export function EmailField<T extends FieldValues = Record<string, unknown>>({
  control,
  name = 'email' as Path<T>,
  label = 'Email',
  placeholder,
}: EmailFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="lg:text-lg">{label}</FormLabel>
          <FormControl>
            <Input
              type="email"
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
