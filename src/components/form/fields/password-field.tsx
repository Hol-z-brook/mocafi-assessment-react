import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { Control, FieldValues, Path } from 'react-hook-form'

interface PasswordFieldProps<T extends FieldValues = Record<string, unknown>> {
  control: Control<T>
  name?: Path<T>
  label?: string
  placeholder?: string
}

export function PasswordField<T extends FieldValues = Record<string, unknown>>({
  control,
  name = 'password' as Path<T>,
  label = 'Password',
  placeholder,
}: PasswordFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="lg:text-lg">{label}</FormLabel>
          <FormControl>
            <Input
              type="password"
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
